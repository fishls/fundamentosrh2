'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Zap, Calculator, Brain, FlaskConical } from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────
export type QuizOption = { label: string; correct?: boolean }
export type QuizItem = {
  question: string
  options: QuizOption[]
  explanation: string
}

export type DecisionStep = {
  prompt: string
  choices: { label: string; feedback: string; correct?: boolean; nextStep?: number }[]
}

export type MatchPair = { left: string; right: string }

export type CalcField = { label: string; unit: string; defaultValue: number }
export type CalcResult = { label: string; formula: string }

export type SimulationDef = {
  classId: number
  title: string
} & (
  | { type: 'quiz'; items: QuizItem[] }
  | { type: 'decision_tree'; steps: DecisionStep[] }
  | { type: 'matching'; pairs: MatchPair[]; instruction: string }
  | { type: 'calculator'; fields: CalcField[]; results: CalcResult[]; description: string }
)

// ─── Quiz Component ──────────────────────────────────────────
function QuizSimulation({ items }: { items: QuizItem[] }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = items[current]

  const handleSelect = (idx: number) => {
    if (selected !== null) return
    setSelected(idx)
    if (q.options[idx].correct) setScore(s => s + 1)
  }

  const handleNext = () => {
    if (current < items.length - 1) {
      setCurrent(c => c + 1)
      setSelected(null)
    } else {
      setFinished(true)
    }
  }

  const handleReset = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    const pct = Math.round((score / items.length) * 100)
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-6 py-10">
        <div className={`text-7xl font-black ${pct >= 70 ? 'text-green-400' : 'text-orange-400'}`}>{pct}%</div>
        <p className="text-xl font-semibold text-white">{score} de {items.length} correctas</p>
        <p className="text-white/60">{pct >= 70 ? '¡Excelente dominio del tema!' : 'Revisa el contenido e intenta de nuevo.'}</p>
        <button onClick={handleReset} className="flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-6 py-3 rounded-xl font-bold hover:bg-primary/30 transition-colors">
          <RotateCcw className="w-4 h-4" /> Reiniciar
        </button>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-mono text-white/50">Pregunta {current + 1} / {items.length}</span>
        <span className="text-sm font-bold text-accent">{score} correctas</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div className="h-full bg-primary rounded-full" animate={{ width: `${((current + 1) / items.length) * 100}%` }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          <h4 className="text-lg font-bold text-white mb-5">{q.question}</h4>
          <div className="flex flex-col gap-3">
            {q.options.map((opt, idx) => {
              const isSelected = selected === idx
              const isCorrect = opt.correct
              let style = 'border-white/10 hover:border-white/30 hover:bg-white/5'
              if (selected !== null) {
                if (isCorrect) style = 'border-green-500/50 bg-green-500/10'
                else if (isSelected && !isCorrect) style = 'border-red-500/50 bg-red-500/10'
                else style = 'border-white/5 opacity-50'
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={selected !== null}
                  className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${style}`}
                >
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold text-white/70 shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-white/90 text-sm">{opt.label}</span>
                  {selected !== null && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-400 ml-auto shrink-0" />}
                  {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-400 ml-auto shrink-0" />}
                </button>
              )
            })}
          </div>

          {selected !== null && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 p-4 rounded-xl bg-accent/10 border border-accent/20 text-sm text-white/80">
              <strong className="text-accent">Explicación:</strong> {q.explanation}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {selected !== null && (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={handleNext}
          className="self-end flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/80 transition-colors">
          {current < items.length - 1 ? 'Siguiente' : 'Ver Resultado'} <ChevronRight className="w-4 h-4" />
        </motion.button>
      )}
    </div>
  )
}

// ─── Decision Tree Component ─────────────────────────────────
function DecisionTreeSimulation({ steps }: { steps: DecisionStep[] }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null)
  const [history, setHistory] = useState<{ step: number; choice: number }[]>([])

  const step = steps[currentStep]

  const handleChoice = (idx: number) => {
    if (selectedChoice !== null) return
    setSelectedChoice(idx)
    setHistory(h => [...h, { step: currentStep, choice: idx }])
  }

  const handleAdvance = () => {
    const choice = step.choices[selectedChoice!]
    if (choice.nextStep !== undefined && choice.nextStep < steps.length) {
      setCurrentStep(choice.nextStep)
      setSelectedChoice(null)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setSelectedChoice(null)
    setHistory([])
  }

  const choice = selectedChoice !== null ? step.choices[selectedChoice] : null
  const canAdvance = choice?.nextStep !== undefined && choice.nextStep < steps.length

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2 text-sm text-white/50 font-mono">
        <Brain className="w-4 h-4" /> Paso {currentStep + 1} de {steps.length}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          <h4 className="text-lg font-bold text-white mb-5">{step.prompt}</h4>
          <div className="flex flex-col gap-3">
            {step.choices.map((c, idx) => {
              const isSelected = selectedChoice === idx
              let style = 'border-white/10 hover:border-primary/50 hover:bg-white/5'
              if (selectedChoice !== null) {
                if (isSelected && c.correct) style = 'border-green-500/50 bg-green-500/10'
                else if (isSelected && !c.correct) style = 'border-orange-500/50 bg-orange-500/10'
                else style = 'border-white/5 opacity-40'
              }
              return (
                <button key={idx} onClick={() => handleChoice(idx)} disabled={selectedChoice !== null}
                  className={`p-4 rounded-xl border text-left transition-all text-sm text-white/90 ${style}`}>
                  {c.label}
                </button>
              )
            })}
          </div>

          {selectedChoice !== null && choice && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className={`mt-5 p-4 rounded-xl border text-sm ${choice.correct ? 'bg-green-500/10 border-green-500/20 text-green-300' : 'bg-orange-500/10 border-orange-500/20 text-orange-300'}`}>
              {choice.feedback}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-3">
        {canAdvance && (
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={handleAdvance}
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/80 transition-colors">
            Siguiente paso <ChevronRight className="w-4 h-4" />
          </motion.button>
        )}
        {history.length > 0 && (
          <button onClick={handleReset} className="flex items-center gap-2 text-white/50 hover:text-white px-4 py-3 rounded-xl transition-colors">
            <RotateCcw className="w-4 h-4" /> Reiniciar
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Matching Component ──────────────────────────────────────
function MatchingSimulation({ pairs, instruction }: { pairs: MatchPair[]; instruction: string }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const allRevealed = revealed.size === pairs.length

  const toggleReveal = (idx: number) => {
    setRevealed(prev => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <p className="text-white/70 text-sm">{instruction}</p>
      <div className="flex flex-col gap-3">
        {pairs.map((pair, idx) => (
          <button key={idx} onClick={() => toggleReveal(idx)}
            className={`flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${revealed.has(idx) ? 'border-accent/40 bg-accent/10' : 'border-white/10 hover:border-white/30'}`}>
            <span className="font-bold text-white min-w-[200px] text-sm">{pair.left}</span>
            <ChevronRight className="w-4 h-4 text-white/30 shrink-0" />
            <span className={`text-sm transition-all ${revealed.has(idx) ? 'text-accent font-semibold' : 'text-white/20 blur-sm select-none'}`}>
              {pair.right}
            </span>
          </button>
        ))}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-green-400 font-semibold text-sm mt-2">
          ✅ Todas las relaciones reveladas
        </motion.div>
      )}
    </div>
  )
}

// ─── Calculator Component ────────────────────────────────────
function CalculatorSimulation({ fields, results, description }: { fields: CalcField[]; results: CalcResult[]; description: string }) {
  const [values, setValues] = useState<Record<string, number>>(() => {
    const obj: Record<string, number> = {}
    fields.forEach((f, i) => { obj[`f${i}`] = f.defaultValue })
    return obj
  })

  const computeResult = (formula: string): string => {
    try {
      let expr = formula
      fields.forEach((f, i) => {
        expr = expr.replace(new RegExp(`\\$${i}`, 'g'), String(values[`f${i}`]))
      })
      // Safe eval for simple math
      const result = Function('"use strict"; return (' + expr + ')')()
      return typeof result === 'number' ? result.toFixed(1) : String(result)
    } catch {
      return '—'
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <p className="text-white/70 text-sm">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((f, i) => (
          <div key={i} className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">{f.label}</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={values[`f${i}`]}
                onChange={e => setValues(v => ({ ...v, [`f${i}`]: parseFloat(e.target.value) || 0 }))}
                className="w-full bg-black/30 border border-white/10 rounded-xl py-3 px-4 text-white font-mono focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <span className="text-white/40 text-sm font-mono min-w-[40px]">{f.unit}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
        <h5 className="text-sm font-bold text-primary mb-3 flex items-center gap-2"><Calculator className="w-4 h-4" /> Resultados</h5>
        <div className="flex flex-col gap-2">
          {results.map((r, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-sm text-white/70">{r.label}</span>
              <span className="text-lg font-bold font-mono text-accent">{computeResult(r.formula)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Main Engine ─────────────────────────────────────────────
export function SimulationEngine({ simulation }: { simulation: SimulationDef }) {
  const iconMap = {
    quiz: Zap,
    decision_tree: Brain,
    matching: FlaskConical,
    calculator: Calculator,
  }
  const Icon = iconMap[simulation.type]

  return (
    <div className="mt-6 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border border-white/10 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
        <div className="p-2.5 bg-primary/20 rounded-xl">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-white">{simulation.title}</h3>
          <p className="text-xs text-white/50">
            {simulation.type === 'quiz' && 'Selección múltiple con retroalimentación'}
            {simulation.type === 'decision_tree' && 'Árbol de decisión clínica'}
            {simulation.type === 'matching' && 'Relación de conceptos'}
            {simulation.type === 'calculator' && 'Calculadora interactiva'}
          </p>
        </div>
      </div>

      {simulation.type === 'quiz' && <QuizSimulation items={simulation.items} />}
      {simulation.type === 'decision_tree' && <DecisionTreeSimulation steps={simulation.steps} />}
      {simulation.type === 'matching' && <MatchingSimulation pairs={simulation.pairs} instruction={simulation.instruction} />}
      {simulation.type === 'calculator' && <CalculatorSimulation fields={simulation.fields} results={simulation.results} description={simulation.description} />}
    </div>
  )
}
