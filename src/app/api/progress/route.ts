import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

  // Handle both JSON and URL-encoded (sendBeacon)
  let classId: number, field: string, value: string, evalData: string | undefined

  const contentType = request.headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    const body = await request.json()
    classId = Number(body.classId)
    field = body.field
    value = body.value
    evalData = body.evalData
  } else {
    const text = await request.text()
    const params = new URLSearchParams(text)
    classId = Number(params.get('classId'))
    field = params.get('field') || ''
    value = params.get('value') || ''
    evalData = params.get('evalData') || undefined
  }

  if (!classId || !field) {
    return NextResponse.json({ error: 'classId y field son requeridos' }, { status: 400 })
  }

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
    updateData.practice_data = value ? JSON.parse(value) : {}
  } else if (field === 'eval') {
    updateData.eval_completed = true
    updateData.eval_score = Number(value)
    if (evalData) updateData.eval_data = JSON.parse(evalData)
  }

  const { error } = await supabase
    .from('class_progress')
    .upsert(updateData, { onConflict: 'student_id,class_id' })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
