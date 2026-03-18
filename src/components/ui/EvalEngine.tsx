'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Timer, Trophy, AlertTriangle, Lock } from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────
export type EvalOption = { label: string; correct?: boolean }
export type EvalQuestion = {
  question: string
  options: EvalOption[]
  explanation: string
}

export type EvalDef = {
  classId: number
  title: string
  questions: EvalQuestion[]
}

const POINTS_PER_QUESTION = 10
const TIME_LIMIT_SECONDS = 60
const QUESTIONS_PER_ATTEMPT = 7
const MAX_ATTEMPTS = 2

// ─── Helpers ─────────────────────────────────────────────────
/** Fisher-Yates shuffle (immutable) */
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/** Pick `count` random items from array */
function pickRandom<T>(arr: T[], count: number): T[] {
  return shuffle(arr).slice(0, count)
}

/** LocalStorage key for attempts */
function getAttemptsKey(classId: number, userId?: string): string {
  return `eval_attempts_c${classId}${userId ? `_u${userId}` : ''}`
}

function getAttempts(classId: number): { count: number; bestScore: number } {
  if (typeof window === 'undefined') return { count: 0, bestScore: 0 }
  try {
    const raw = localStorage.getItem(getAttemptsKey(classId))
    if (raw) return JSON.parse(raw)
  } catch {}
  return { count: 0, bestScore: 0 }
}

function saveAttempt(classId: number, score: number): { count: number; bestScore: number } {
  const prev = getAttempts(classId)
  const next = { count: prev.count + 1, bestScore: Math.max(prev.bestScore, score) }
  try {
    localStorage.setItem(getAttemptsKey(classId), JSON.stringify(next))
  } catch {}
  return next
}

// ─── Timer Hook ──────────────────────────────────────────────
function useTimer(isActive: boolean, onExpire: () => void) {
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_SECONDS)

  const reset = useCallback(() => {
    setTimeLeft(TIME_LIMIT_SECONDS)
  }, [])

  useEffect(() => {
    if (!isActive) return
    if (timeLeft <= 0) { onExpire(); return }
    const interval = setInterval(() => setTimeLeft(t => t - 1), 1000)
    return () => clearInterval(interval)
  }, [isActive, timeLeft, onExpire])

  return { timeLeft, reset }
}

// ─── Main Component ──────────────────────────────────────────
export function EvalEngine({ evaluation, onComplete }: { evaluation: EvalDef; onComplete?: (score: number) => void }) {
  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [timedOut, setTimedOut] = useState(false)
  const [attemptInfo, setAttemptInfo] = useState<{ count: number; bestScore: number }>({ count: 0, bestScore: 0 })

  // Load attempt data on mount
  useEffect(() => {
    setAttemptInfo(getAttempts(evaluation.classId))
  }, [evaluation.classId])

  const isLocked = attemptInfo.count >= MAX_ATTEMPTS

  // Select random 7 questions and shuffle their options once per attempt
  const selectedQuestions = useMemo(() => {
    if (!started) return []
    const count = Math.min(QUESTIONS_PER_ATTEMPT, evaluation.questions.length)
    const picked = pickRandom(evaluation.questions, count)
    // Shuffle the options for each question
    return picked.map(q => ({
      ...q,
      options: shuffle(q.options),
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, evaluation.questions])

  const total = selectedQuestions.length
  const maxScore = total * POINTS_PER_QUESTION

  const [answers, setAnswers] = useState<(number | null)[]>([])

  // Reset answers when questions change
  useEffect(() => {
    if (started && total > 0) {
      setAnswers(Array(total).fill(null))
    }
  }, [started, total])

  const q = selectedQuestions[current]

  const handleExpire = useCallback(() => {
    if (selected === null) {
      setTimedOut(true)
      setAnswers(prev => { const n = [...prev]; n[current] = -1; return n })
    }
  }, [selected, current])

  const { timeLeft, reset: resetTimer } = useTimer(started && !finished && selected === null && !timedOut, handleExpire)

  const handleSelect = (idx: number) => {
    if (selected !== null || timedOut) return
    setSelected(idx)
    setAnswers(prev => { const n = [...prev]; n[current] = idx; return n })
    if (q.options[idx].correct) setScore(s => s + POINTS_PER_QUESTION)
  }

  const handleNext = () => {
    if (current < total - 1) {
      setCurrent(c => c + 1)
      setSelected(null)
      setTimedOut(false)
      resetTimer()
    } else {
      setFinished(true)
    }
  }

  // Report score and save attempt when finished
  useEffect(() => {
    if (finished && onComplete) {
      const updated = saveAttempt(evaluation.classId, score)
      setAttemptInfo(updated)
      onComplete(score)
    }
  }, [finished, score, onComplete, evaluation.classId])

  const handleRestart = () => {
    // Refresh attempt info
    const info = getAttempts(evaluation.classId)
    setAttemptInfo(info)
    if (info.count >= MAX_ATTEMPTS) return

    setCurrent(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
    setStarted(false)
    setAnswers([])
    setTimedOut(false)
    resetTimer()
  }

  // ─── Locked Screen ────────────────────────────────────────
  if (isLocked && !started) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10 border border-white/10 rounded-2xl p-8 md:p-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="p-4 bg-red-500/20 rounded-2xl">
            <Lock className="w-10 h-10 text-red-400" />
          </div>
          <h3 className="text-2xl font-black text-white">{evaluation.title}</h3>
          <div className="flex flex-col gap-3 text-white/60 text-sm">
            <p>🔒 Has alcanzado el <strong className="text-red-400">máximo de {MAX_ATTEMPTS} intentos</strong></p>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-white/80 font-bold text-lg">
                Mejor puntaje: <span className="text-primary">{attemptInfo.bestScore}</span>
                <span className="text-white/40">/{QUESTIONS_PER_ATTEMPT * POINTS_PER_QUESTION}</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // ─── Welcome Screen ──────────────────────────────────────
  if (!started) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-primary/10 via-transparent to-accent/10 border border-white/10 rounded-2xl p-8 md:p-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="p-4 bg-primary/20 rounded-2xl">
            <Trophy className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-black text-white">{evaluation.title}</h3>
          <div className="flex flex-col gap-2 text-white/60 text-sm">
            <p>📝 <strong className="text-white/80">{QUESTIONS_PER_ATTEMPT} preguntas</strong> seleccionadas al azar del banco</p>
            <p>⏱️ <strong className="text-white/80">{TIME_LIMIT_SECONDS} segundos</strong> por pregunta</p>
            <p>🏆 Cada pregunta vale <strong className="text-white/80">{POINTS_PER_QUESTION} puntos</strong> (máx. {QUESTIONS_PER_ATTEMPT * POINTS_PER_QUESTION} pts)</p>
            <p>🔄 Las preguntas y opciones se barajarán aleatoriamente</p>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-sm">
            <span className="text-white/50">Intentos: </span>
            <span className={`font-bold ${attemptInfo.count >= MAX_ATTEMPTS - 1 ? 'text-orange-400' : 'text-white/80'}`}>
              {attemptInfo.count}/{MAX_ATTEMPTS}
            </span>
            {attemptInfo.bestScore > 0 && (
              <span className="text-white/40 ml-3">| Mejor: <span className="text-primary font-bold">{attemptInfo.bestScore} pts</span></span>
            )}
          </div>
          <button onClick={() => { setStarted(true); resetTimer() }}
            className="mt-4 bg-primary text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-primary/80 transition-all hover:scale-105 active:scale-95">
            Comenzar Evaluación
          </button>
        </div>
      </motion.div>
    )
  }

  // ─── Results Screen ───────────────────────────────────────
  if (finished) {
    const pct = Math.round((score / maxScore) * 100)
    const correctCount = answers.filter((a, i) => a !== null && a !== -1 && selectedQuestions[i].options[a].correct).length
    let grade = ''; let gradeColor = ''
    if (pct >= 90) { grade = 'Sobresaliente'; gradeColor = 'text-green-400' }
    else if (pct >= 70) { grade = 'Aprobado'; gradeColor = 'text-blue-400' }
    else if (pct >= 50) { grade = 'Insuficiente'; gradeColor = 'text-orange-400' }
    else { grade = 'Reprobado'; gradeColor = 'text-red-400' }

    const canRetry = attemptInfo.count < MAX_ATTEMPTS

    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-primary/10 via-transparent to-accent/10 border border-white/10 rounded-2xl p-8">
        <div className="flex flex-col items-center gap-6 text-center mb-8">
          <div className={`text-7xl font-black ${gradeColor}`}>{score}<span className="text-2xl text-white/40">/{maxScore}</span></div>
          <p className={`text-xl font-bold ${gradeColor}`}>{grade}</p>
          <p className="text-white/60">{correctCount} de {total} respuestas correctas</p>
          <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-sm">
            <span className="text-white/50">Intentos usados: </span>
            <span className={`font-bold ${!canRetry ? 'text-red-400' : 'text-white/80'}`}>
              {attemptInfo.count}/{MAX_ATTEMPTS}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-8">
          {selectedQuestions.map((question, i) => {
            const ans = answers[i]
            const isTimedOut = ans === -1
            const isCorrect = ans !== null && ans !== -1 && question.options[ans].correct
            const correctIdx = question.options.findIndex(o => o.correct)
            return (
              <div key={i} className={`p-4 rounded-xl border text-sm ${isCorrect ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
                <div className="flex items-start gap-3">
                  {isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" /> : <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />}
                  <div className="flex-1">
                    <p className="text-white/90 font-medium mb-1">{i + 1}. {question.question}</p>
                    {isTimedOut && <p className="text-orange-400 text-xs">⏱️ Tiempo agotado</p>}
                    {!isCorrect && <p className="text-green-400/80 text-xs">✅ Respuesta correcta: {question.options[correctIdx]?.label}</p>}
                    <p className="text-white/50 text-xs mt-1">💡 {question.explanation}</p>
                  </div>
                  <span className={`font-bold font-mono ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    {isCorrect ? `+${POINTS_PER_QUESTION}` : '0'}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center">
          {canRetry ? (
            <button onClick={handleRestart}
              className="flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-8 py-3 rounded-xl font-bold hover:bg-primary/30 transition-colors">
              <RotateCcw className="w-4 h-4" /> Reintentar ({MAX_ATTEMPTS - attemptInfo.count} intento{MAX_ATTEMPTS - attemptInfo.count !== 1 ? 's' : ''} restante{MAX_ATTEMPTS - attemptInfo.count !== 1 ? 's' : ''})
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-red-500/10 text-red-400/80 border border-red-500/20 px-8 py-3 rounded-xl font-bold">
              <Lock className="w-4 h-4" /> Sin intentos restantes
            </div>
          )}
        </div>
      </motion.div>
    )
  }

  // ─── Question Screen ──────────────────────────────────────
  if (!q) return null

  const timerPct = (timeLeft / TIME_LIMIT_SECONDS) * 100
  const timerColor = timeLeft > 30 ? 'bg-green-500' : timeLeft > 10 ? 'bg-orange-500' : 'bg-red-500'
  const answered = selected !== null || timedOut

  return (
    <div className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border border-white/10 rounded-2xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-mono text-white/50">Pregunta {current + 1} / {total}</span>
        <span className="text-sm font-bold text-accent">{score} pts</span>
      </div>

      {/* Timer Bar */}
      <div className="flex items-center gap-3 mb-6">
        <Timer className={`w-4 h-4 shrink-0 ${timeLeft <= 10 && !answered ? 'text-red-400 animate-pulse' : 'text-white/50'}`} />
        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${answered ? 'bg-white/20' : timerColor}`}
            animate={{ width: answered ? '0%' : `${timerPct}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className={`text-sm font-mono w-8 text-right ${timeLeft <= 10 && !answered ? 'text-red-400 font-bold' : 'text-white/50'}`}>
          {answered ? '—' : timeLeft}
        </span>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1.5 mb-6">
        {selectedQuestions.map((_, i) => {
          let dotColor = 'bg-white/10'
          if (i < current || (i === current && answered)) {
            const a = answers[i]
            if (a === -1) dotColor = 'bg-orange-500'
            else if (a !== null && selectedQuestions[i].options[a].correct) dotColor = 'bg-green-500'
            else if (a !== null) dotColor = 'bg-red-500'
          }
          if (i === current && !answered) dotColor = 'bg-primary'
          return <div key={i} className={`h-1.5 flex-1 rounded-full ${dotColor} transition-colors`} />
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
          <h4 className="text-lg font-bold text-white mb-5">{q.question}</h4>

          {timedOut && !selected && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-3 mb-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm">
              <AlertTriangle className="w-4 h-4 shrink-0" /> ¡Tiempo agotado! No se asignaron puntos.
            </motion.div>
          )}

          <div className="flex flex-col gap-3">
            {q.options.map((opt, idx) => {
              const isSelected = selected === idx
              const isCorrect = opt.correct
              let style = 'border-white/10 hover:border-white/30 hover:bg-white/5'
              if (answered) {
                if (isCorrect) style = 'border-green-500/50 bg-green-500/10'
                else if (isSelected && !isCorrect) style = 'border-red-500/50 bg-red-500/10'
                else style = 'border-white/5 opacity-50'
              }
              return (
                <button key={idx} onClick={() => handleSelect(idx)} disabled={answered}
                  className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all ${style}`}>
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold text-white/70 shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-white/90 text-sm">{opt.label}</span>
                  {answered && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-400 ml-auto shrink-0" />}
                  {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-400 ml-auto shrink-0" />}
                </button>
              )
            })}
          </div>

          {answered && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="mt-5 p-4 rounded-xl bg-accent/10 border border-accent/20 text-sm text-white/80">
              <strong className="text-accent">Explicación:</strong> {q.explanation}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {answered && (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={handleNext}
          className="mt-6 self-end flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/80 transition-colors">
          {current < total - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'} <ChevronRight className="w-4 h-4" />
        </motion.button>
      )}
    </div>
  )
}
