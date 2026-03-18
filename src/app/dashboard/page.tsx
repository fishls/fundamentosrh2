import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { BookOpen, CheckCircle, Lock, Play, Activity, EyeOff } from 'lucide-react'

// Unit structure for grouping classes
const UNITS = [
  { name: "Unidad 1: Biomecánica", classIds: [1, 2, 3] },
  { name: "Unidad 2: Terapias", classIds: [4, 5, 6, 7, 8] },
  { name: "Unidad 3: Órtesis y Prótesis", classIds: [9, 10, 11, 12] },
  { name: "Unidad 4: Imagenología", classIds: [13, 14] },
  { name: "Unidad 5: Electrodiagnóstico", classIds: [15, 16] },
]

// Fallback chapter references
const CHAPTERS: Record<number, string> = {
  1: "Caps. 15, 17", 2: "Caps. 11, 13, 15", 3: "Caps. 10, 13, 33",
  4: "Cap. 15", 5: "Cap. 15", 6: "Cap. 16", 7: "Cap. 17", 8: "Varios",
  9: "Caps. 11-13", 10: "Caps. 11-13", 11: "Caps. 9, 10", 12: "Caps. 14, 19",
  13: "Caps. 31, 33, 41, 43", 14: "Caps. 31, 33, 41, 43",
  15: "Cap. 8, 8A", 16: "Cap. 8, 8A, 41",
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const isAdmin = profile?.role === 'admin'
  const isInstructor = profile?.role === 'instructor'

  // Fetch classes from database (RLS handles visibility: admins see all, students see only visible)
  const { data: dbClasses } = await supabase
    .from('classes')
    .select('id, title, is_visible')
    .order('id')

  // Build a map of DB classes for quick lookup
  const classMap = new Map((dbClasses || []).map(c => [c.id, c]))

  return (
    <div className="flex flex-col gap-10 py-8">
      
      {/* Header Dashboard */}
      <div className="glass p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        <h1 className="text-4xl font-extrabold mb-2 text-white">
          Bienvenido a tu <span className="animated-gradient-text">Ruta de Aprendizaje</span>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl">
          16 sesiones clínicas que transformarán tu entendimiento de la rehabilitación física.
        </p>

        <div className="flex items-center gap-3 mt-4">
          <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
            isAdmin ? 'bg-accent/20 border-accent text-accent' : 
            isInstructor ? 'bg-primary/20 border-primary text-primary' : 
            'bg-white/10 border-white/20 text-white/50'
          }`}>
            {profile?.role || 'student'}
          </div>
          <p className="text-white/50 text-sm">| {user.email}</p>
        </div>

        <form action="/auth/signout" method="post" className="absolute top-8 right-8">
          <button className="text-sm font-semibold text-white/50 hover:text-white transition">
            Cerrar Sesión
          </button>
        </form>
      </div>

      {isAdmin && (
        <div className="bg-gradient-to-r from-accent/20 via-primary/10 to-transparent p-1 rounded-3xl border border-accent/30 shadow-[0_0_40px_rgba(var(--color-accent),0.1)] mb-4">
          <div className="glass p-6 rounded-[22px] flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-5 items-center">
              <div className="bg-accent/20 p-4 rounded-2xl border border-accent/20">
                <Activity className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Panel de Administración Maestro</h2>
                <p className="text-white/60 text-sm">Gestiona usuarios, revisa métricas de avance y configura parámetros del sistema.</p>
              </div>
            </div>
            <Link href="/admin" className="bg-accent text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform">
              Acceder al Panel
            </Link>
          </div>
        </div>
      )}

      {/* Unidades & Clases Grid */}
      <div className="flex flex-col gap-12">
        {UNITS.map((unit, index) => {
          // Filter classes based on visibility — admins see all, students only visible
          const visibleClasses = unit.classIds.filter(id => {
            const dbClass = classMap.get(id)
            if (!dbClass) return false // class not in DB
            return isAdmin || dbClass.is_visible
          })

          if (visibleClasses.length === 0) return null

          return (
            <div key={index} className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold border-b border-white/10 pb-4 flex items-center gap-3">
                <Activity className="text-accent w-6 h-6" />
                {unit.name}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleClasses.map((classId) => {
                  const dbClass = classMap.get(classId)!
                  const isHidden = !dbClass.is_visible

                  return (
                    <Link key={classId} href={isHidden ? '#' : `/class/${classId}`}>
                      <div className={`glass group transition-all p-6 rounded-2xl flex flex-col gap-4 border cursor-pointer h-full relative overflow-hidden ${
                        isHidden
                          ? 'border-red-500/20 opacity-40 cursor-not-allowed'
                          : 'border-white/5 hover:border-primary/50 hover:bg-white/5'
                      }`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="flex justify-between items-start">
                          <div className={`px-3 py-1 rounded-full text-xs font-bold font-mono ${
                            isHidden ? 'bg-red-500/20 text-red-400' : 'bg-primary/20 text-primary'
                          }`}>
                            SESIÓN {classId}
                          </div>
                          {isHidden
                            ? <EyeOff className="w-5 h-5 text-red-400/50" />
                            : <BookOpen className="w-5 h-5 text-white/30 group-hover:text-primary transition-colors" />
                          }
                        </div>

                        <h3 className={`text-lg font-bold mt-2 ${isHidden ? 'text-white/40 line-through' : 'group-hover:text-white text-white/90'}`}>
                          {dbClass.title}
                        </h3>
                        
                        <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                          <span className="text-xs text-secondary-foreground/60 flex items-center gap-1.5">
                            <BookOpen className="w-3 h-3" /> Dr. Braddom: {CHAPTERS[classId] || ''}
                          </span>
                          {isHidden
                            ? <span className="text-xs text-red-400/60 font-medium">Oculta</span>
                            : <Play className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" />
                          }
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}
