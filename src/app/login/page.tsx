'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { login, signup } from './actions'
import { CheckCircle2, ChevronRight, Lock, Mail, ActivitySquare, UserRound } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Suspense } from 'react'

function LoginContent() {
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const errorMsg = searchParams.get('errorMessage')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
  }

  return (
    <div className="w-full relative">
      <div className="absolute inset-0 border border-primary/20 rounded-3xl transform rotate-3 scale-105 pointer-events-none" />
      
      <div className="glass rounded-3xl p-8 sm:p-12 relative z-10">
        <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/10">
          <h3 className="text-2xl font-bold">
            {isLogin ? 'Iniciar Sesión' : 'Crea tu Cuenta'}
          </h3>
          <button 
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-primary hover:text-primary/80 transition-colors font-medium flex items-center gap-1"
          >
            {isLogin ? 'Registrarse' : 'Ingresar'} 
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
            {errorMsg}
          </div>
        )}

        <form 
          action={isLogin ? login : signup} 
          onSubmit={() => setLoading(true)}
          className="flex flex-col gap-5"
        >
          <AnimatePresence mode="popLayout">
            {!isLogin && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-col gap-2"
              >
                <label className="text-sm font-medium text-secondary-foreground/80 pl-1">Nombre Completo</label>
                <div className="relative">
                  <UserRound className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Juan Pérez" 
                    required={!isLogin}
                    className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-white/30 transition-all font-outfit"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-secondary-foreground/80 pl-1">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input 
                type="email" 
                name="email"
                placeholder="estudiante@ejemplo.com" 
                required
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-white/30 transition-all font-outfit"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <label className="text-sm font-medium text-secondary-foreground/80 pl-1">Contraseña</label>
              {isLogin && (
                <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
                  ¿Olvidaste tu contraseña?
                </a>
              )}
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input 
                type="password" 
                name="password"
                placeholder="••••••••" 
                required
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-white/30 transition-all font-outfit"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className={`glow-effect mt-4 w-full bg-primary hover:bg-primary-foreground/90 text-white rounded-xl py-3 font-semibold transition-all relative z-10 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? (
              <>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                />
                Procesando...
              </>
            ) : (
              isLogin ? 'Entrar a RehabStudio' : 'Comenzar mi aprendizaje'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Left Side: Branding / Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/20 rounded-xl">
              <ActivitySquare className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">RehabStudio</h1>
          </div>
          
          <h2 className="text-5xl font-extrabold leading-tight">
            Domina la <br />
            <span className="animated-gradient-text">Rehabilitación Física</span>
          </h2>
          <p className="text-lg text-secondary-foreground/70 max-w-md">
            Un entorno de aprendizaje inmersivo que integra biomecánica, terapias manuales y electrodiagnóstico.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            {[
              "Lecturas guiadas por IA con NotebookLM",
              "Talleres lógicos e interactivos por sesión",
              "Evaluaciones alineadas a competencia",
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-secondary-foreground/80">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Auth Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Suspense fallback={<div className="glass rounded-3xl p-12 text-center text-white/50 animate-pulse">Cargando formulario...</div>}>
            <LoginContent />
          </Suspense>
        </motion.div>
      </div>
    </div>
  )
}
