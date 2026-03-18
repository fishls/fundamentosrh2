import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { ActivitySquare, Play, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard') // Si ya está logueado, lo mandamos al dashboard
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4 relative">
      
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />

      <div className="z-10 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 mb-8 border border-primary/30">
        <Sparkles className="w-4 h-4" />
        Aplicación Educativa de Rehabilitación (16 Sesiones)
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl text-white mb-6 leading-tight">
        Aprende rehabilitación con <br />
        <span className="animated-gradient-text inline-block transform hover:scale-105 transition-transform cursor-default">
          inteligencia clínica
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-12">
        Alineado con el currículo consolidado. Biomecánica, órtesis, imagenología, y electrodiagnóstico. Respaldado por NotebookLM.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/login" 
          className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all glow-effect z-10"
        >
          Iniciar Aventura <Play className="w-5 h-5" fill="currentColor" />
        </Link>
        <Link
          href="/login"
          className="glass px-8 py-4 rounded-full font-bold text-lg text-white hover:bg-white/5 transition-colors z-10 border-white/20"
        >
          Ver Silabo
        </Link>
      </div>

    </div>
  )
}
