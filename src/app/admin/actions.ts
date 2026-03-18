'use server'

import { createAdminClient } from '@/utils/supabase/admin'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

// ─── Auth Guard ──────────────────────────────────────────────
async function requireAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('No autenticado')

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (profile?.role !== 'admin') throw new Error('Sin permisos de administrador')
  return user
}

// ─── Student Management ──────────────────────────────────────
export async function createStudent(formData: FormData) {
  await requireAdmin()
  const admin = createAdminClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const fullName = formData.get('fullName') as string

  if (!email || !password || !fullName) {
    return { error: 'Todos los campos son obligatorios' }
  }

  // Create auth user with admin client (bypasses RLS)
  const { data: authData, error: authError } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: fullName },
  })

  if (authError) {
    return { error: `Error al crear usuario: ${authError.message}` }
  }

  // Create profile
  const { error: profileError } = await admin
    .from('profiles')
    .upsert({
      id: authData.user.id,
      email,
      full_name: fullName,
      role: 'student',
    })

  if (profileError) {
    return { error: `Usuario creado pero perfil falló: ${profileError.message}` }
  }

  revalidatePath('/admin')
  return { success: true, userId: authData.user.id }
}

export async function deleteStudent(studentId: string) {
  await requireAdmin()
  const admin = createAdminClient()

  const { error } = await admin.auth.admin.deleteUser(studentId)
  if (error) return { error: error.message }

  revalidatePath('/admin')
  return { success: true }
}

export async function getStudents() {
  await requireAdmin()
  const admin = createAdminClient()

  const { data, error } = await admin
    .from('profiles')
    .select('*')
    .eq('role', 'student')
    .order('created_at', { ascending: false })

  if (error) return { error: error.message, data: [] }
  return { data: data || [] }
}

// ─── Session Visibility ──────────────────────────────────────
export async function getSessionSettings() {
  await requireAdmin()
  const admin = createAdminClient()

  const { data, error } = await admin
    .from('classes')
    .select('id, title, is_visible')
    .order('id')

  if (error) return { error: error.message, data: [] }
  return { data: data || [] }
}

export async function toggleSessionVisibility(classId: number, visible: boolean) {
  await requireAdmin()
  const admin = createAdminClient()

  const { error } = await admin
    .from('classes')
    .update({ is_visible: visible })
    .eq('id', classId)

  if (error) return { error: error.message }

  revalidatePath('/admin')
  revalidatePath('/dashboard')
  return { success: true }
}

// ─── Activity Tracking ──────────────────────────────────────
export async function getStudentActivity(studentId?: string) {
  await requireAdmin()
  const admin = createAdminClient()

  let query = admin
    .from('class_progress')
    .select(`
      *,
      profiles:student_id (full_name, email)
    `)
    .order('updated_at', { ascending: false })

  if (studentId) {
    query = query.eq('student_id', studentId)
  }

  const { data, error } = await query

  if (error) return { error: error.message, data: [] }
  return { data: data || [] }
}

export async function getAllActivitySummary() {
  await requireAdmin()
  const admin = createAdminClient()

  // Get all students with their progress
  const { data: students } = await admin
    .from('profiles')
    .select('id, full_name, email, created_at')
    .eq('role', 'student')
    .order('full_name')

  const { data: progress } = await admin
    .from('class_progress')
    .select('*')

  // Build summary per student
  const summary = (students || []).map(student => {
    const studentProgress = (progress || []).filter(p => p.student_id === student.id)
    const totalTime = studentProgress.reduce((acc, p) => acc + (p.lesson_time_spent_seconds || 0), 0)
    const practiceCount = studentProgress.filter(p => p.practice_completed).length
    const evalCount = studentProgress.filter(p => p.eval_completed).length
    const avgScore = studentProgress.filter(p => p.eval_score != null).length > 0
      ? studentProgress.filter(p => p.eval_score != null).reduce((acc, p) => acc + Number(p.eval_score), 0) / studentProgress.filter(p => p.eval_score != null).length
      : null

    return {
      ...student,
      totalTimeSeconds: totalTime,
      sessionsVisited: studentProgress.length,
      practiceCompleted: practiceCount,
      evalsCompleted: evalCount,
      avgEvalScore: avgScore,
      progress: studentProgress,
    }
  })

  return { data: summary }
}

// ─── Client-side progress upsert (called from student's session) ──
export async function upsertProgress(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'No autenticado' }

  const classId = Number(formData.get('classId'))
  const field = formData.get('field') as string
  const value = formData.get('value') as string

  const updateData: Record<string, unknown> = {
    student_id: user.id,
    class_id: classId,
    updated_at: new Date().toISOString(),
  }

  if (field === 'lesson_time') {
    updateData.lesson_time_spent_seconds = Number(value)
    updateData.lesson_completed = true
  } else if (field === 'practice') {
    updateData.practice_completed = true
    updateData.practice_data = JSON.parse(value || '{}')
  } else if (field === 'eval') {
    updateData.eval_completed = true
    updateData.eval_score = Number(value)
    updateData.eval_data = JSON.parse(formData.get('evalData') as string || '{}')
  }

  const { error } = await supabase
    .from('class_progress')
    .upsert(updateData, { onConflict: 'student_id,class_id' })

  if (error) return { error: error.message }
  return { success: true }
}
