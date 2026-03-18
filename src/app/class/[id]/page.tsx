'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Code, FileCheck, ArrowLeft, BrainCircuit } from 'lucide-react'
import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import { classesData } from '@/data/classes_data'
import { simulationsData } from '@/data/simulations_data'
import { Markdown } from '@/components/ui/Markdown'
import { SimulationEngine } from '@/components/ui/SimulationEngine'
import { EvalEngine } from '@/components/ui/EvalEngine'
import { evaluationsData } from '@/data/evaluations_data'
import { useActivityTracker } from '@/hooks/useActivityTracker'

export default function ClassViewPage() {
  const params = useParams()
  const id = params?.id ? parseInt(params.id as string) : null
  const [activeTab, setActiveTab] = useState<'content' | 'practice' | 'eval'>('content')
  const [practiceTracked, setPracticeTracked] = useState(false)

  const currentClass = classesData.find(c => c.id === id)

  if (!currentClass) {
    return notFound()
  }

  const { trackPractice, trackEval } = useActivityTracker(currentClass.id)

  // Track practice tab visit
  useEffect(() => {
    if (activeTab === 'practice' && !practiceTracked) {
      trackPractice()
      setPracticeTracked(true)
    }
  }, [activeTab, practiceTracked, trackPractice])

  const handleEvalComplete = useCallback((score: number) => {
    trackEval(score)
  }, [trackEval])

  const TABS = [
    { id: 'content', label: 'Contenido de la Lección', icon: BookOpen, desc: 'Lectura base procesada por NotebookLM' },
    { id: 'practice', label: 'Práctica Interactiva', icon: Code, desc: 'Taller Lógico / Simulador de Casos' },
    { id: 'eval', label: 'Evaluación de Aprendizaje', icon: FileCheck, desc: 'Cuestionario o Pauta Oficial' },
  ] as const;

  return (
    <div className="flex flex-col gap-8 py-6 min-h-[90vh]">
      
      {/* Header Sticky */}
      <div className="flex items-center gap-4 bg-background/80 backdrop-blur-md sticky top-0 py-4 z-20 border-b border-white/5">
        <Link href="/dashboard" className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div>
          <div className="text-xs font-bold text-primary mb-1">SESIÓN {currentClass.id}</div>
          <h1 className="text-2xl font-extrabold">{currentClass.title}</h1>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-start gap-4 p-5 rounded-2xl text-left transition-all border ${
                isActive 
                  ? 'bg-primary/20 border-primary shadow-[0_0_20px_rgba(var(--color-primary),0.2)]' 
                  : 'glass border-white/5 hover:bg-white/5 hover:border-white/20'
              }`}
            >
              <div className={`p-3 rounded-xl ${isActive ? 'bg-primary text-white' : 'bg-white/5 text-white/50'}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`font-bold ${isActive ? 'text-white' : 'text-white/70'}`}>
                  {tab.label}
                </h3>
                <p className="text-xs text-white/50 mt-1 leading-relaxed">
                  {tab.desc}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Main Content Area */}
      <div className="glass rounded-3xl min-h-[500px] border border-white/10 p-6 md:p-10 relative overflow-hidden">
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none" />

        <AnimatePresence mode="wait">
          
          {activeTab === 'content' && (
            <motion.div 
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-6 relative z-10"
            >
              <div className="flex items-center gap-3 text-accent bg-accent/10 w-fit px-4 py-1.5 rounded-full text-sm font-semibold border border-accent/20">
                <BrainCircuit className="w-4 h-4" /> Contenido Académico - {currentClass.braddom_chapters}
              </div>
              <h2 className="text-3xl font-bold">{currentClass.unit_name}</h2>
              <Markdown content={currentClass.lesson_content} />
            </motion.div>
          )}

          {activeTab === 'practice' && (
            <motion.div 
              key="practice"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-6 relative z-10"
            >
              <h2 className="text-3xl font-bold">Taller Lógico Interactivo</h2>
              <Markdown content={currentClass.interactive_practice} />
              {(() => {
                const sim = simulationsData.find(s => s.classId === currentClass.id)
                return sim ? <SimulationEngine simulation={sim} /> : null
              })()}
            </motion.div>
          )}

          {activeTab === 'eval' && (
            <motion.div 
              key="eval"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-6 relative z-10"
            >
              <h2 className="text-3xl font-bold">Evaluación de Aprendizaje</h2>
              {(() => {
                const evalData = evaluationsData.find(e => e.classId === currentClass.id)
                return evalData ? <EvalEngine evaluation={evalData} onComplete={handleEvalComplete} /> : <Markdown content={currentClass.learning_eval} />
              })()}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
      
    </div>
  )
}
