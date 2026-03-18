'use client'

import { useState, useEffect, useTransition } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Users, Layers, BarChart3, Plus, Trash2, Eye, EyeOff,
  Clock, CheckCircle2, BookOpen, AlertTriangle, Search, UserPlus
} from 'lucide-react'
import {
  createStudent, deleteStudent, getStudents,
  getSessionSettings, toggleSessionVisibility,
  getAllActivitySummary
} from './actions'

type Tab = 'sessions' | 'students' | 'tracking'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>('sessions')

  const tabs = [
    { id: 'sessions' as Tab, label: 'Sesiones', icon: Layers, desc: 'Activar / Ocultar' },
    { id: 'students' as Tab, label: 'Estudiantes', icon: Users, desc: 'Crear y Gestionar' },
    { id: 'tracking' as Tab, label: 'Seguimiento', icon: BarChart3, desc: 'Actividad y Notas' },
  ]

  return (
    <div className="flex flex-col gap-8 py-8">
      {/* Header */}
      <div className="glass p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-4 transition">
          <ArrowLeft className="w-4 h-4" /> Volver al Dashboard
        </Link>
        <h1 className="text-3xl font-extrabold text-white">
          Panel de <span className="animated-gradient-text">Super Admin</span>
        </h1>
        <p className="text-white/60 mt-1">Gestión de sesiones, estudiantes y seguimiento de actividad.</p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className={`glass p-5 rounded-2xl flex items-center gap-4 border transition-all ${
              activeTab === tab.id
                ? 'border-primary/50 bg-primary/10 shadow-[0_0_20px_rgba(var(--color-primary),0.15)]'
                : 'border-white/5 hover:border-white/20'
            }`}>
            <div className={`p-3 rounded-xl ${activeTab === tab.id ? 'bg-primary/20' : 'bg-white/5'}`}>
              <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'text-primary' : 'text-white/40'}`} />
            </div>
            <div className="text-left">
              <p className="font-bold text-white">{tab.label}</p>
              <p className="text-xs text-white/50">{tab.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'sessions' && <SessionsPanel key="sessions" />}
        {activeTab === 'students' && <StudentsPanel key="students" />}
        {activeTab === 'tracking' && <TrackingPanel key="tracking" />}
      </AnimatePresence>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════
// SESSIONS PANEL
// ═══════════════════════════════════════════════════════════════
function SessionsPanel() {
  const [sessions, setSessions] = useState<{ id: number; title: string; is_visible: boolean }[]>([])
  const [loading, setLoading] = useState(true)
  const [pending, startTransition] = useTransition()

  useEffect(() => {
    getSessionSettings().then(res => {
      setSessions(res.data || [])
      setLoading(false)
    })
  }, [])

  const handleToggle = (classId: number, currentVisible: boolean) => {
    setSessions(prev => prev.map(s => s.id === classId ? { ...s, is_visible: !currentVisible } : s))
    startTransition(async () => {
      await toggleSessionVisibility(classId, !currentVisible)
    })
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      className="glass p-6 rounded-2xl">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Layers className="w-5 h-5 text-primary" /> Visibilidad de Sesiones
      </h2>

      {loading ? (
        <div className="text-center py-12 text-white/50">Cargando sesiones...</div>
      ) : (
        <div className="flex flex-col gap-2">
          {sessions.map(session => (
            <div key={session.id}
              className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                session.is_visible ? 'border-white/10 bg-white/[0.02]' : 'border-red-500/20 bg-red-500/5 opacity-60'
              }`}>
              <div className="flex items-center gap-3">
                <span className="bg-primary/20 text-primary px-2.5 py-1 rounded-lg text-xs font-bold font-mono">
                  {session.id}
                </span>
                <span className={`text-sm font-medium ${session.is_visible ? 'text-white/90' : 'text-white/40 line-through'}`}>
                  {session.title || `Sesión ${session.id}`}
                </span>
              </div>
              <button onClick={() => handleToggle(session.id, session.is_visible)} disabled={pending}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  session.is_visible
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20'
                    : 'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20'
                }`}>
                {session.is_visible ? <><Eye className="w-4 h-4" /> Visible</> : <><EyeOff className="w-4 h-4" /> Oculta</>}
              </button>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
// STUDENTS PANEL
// ═══════════════════════════════════════════════════════════════
function StudentsPanel() {
  const [students, setStudents] = useState<Array<{ id: string; email: string; full_name: string; created_at: string }>>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [pending, startTransition] = useTransition()

  const loadStudents = async () => {
    setLoading(true)
    const res = await getStudents()
    setStudents(res.data || [])
    setLoading(false)
  }

  useEffect(() => { loadStudents() }, [])

  const handleCreate = async (formData: FormData) => {
    startTransition(async () => {
      const result = await createStudent(formData)
      if (result.error) {
        setMessage({ type: 'error', text: result.error })
      } else {
        setMessage({ type: 'success', text: 'Estudiante creado exitosamente' })
        setShowForm(false)
        loadStudents()
      }
      setTimeout(() => setMessage(null), 4000)
    })
  }

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`¿Eliminar permanentemente a ${name}?`)) return
    startTransition(async () => {
      const result = await deleteStudent(id)
      if (result.error) {
        setMessage({ type: 'error', text: result.error })
      } else {
        setMessage({ type: 'success', text: 'Estudiante eliminado' })
        loadStudents()
      }
      setTimeout(() => setMessage(null), 4000)
    })
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      className="glass p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" /> Estudiantes
          <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/50 ml-2">{students.length}</span>
        </h2>
        <button onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-primary/80 transition">
          <UserPlus className="w-4 h-4" /> Nuevo Estudiante
        </button>
      </div>

      {/* Messages */}
      <AnimatePresence>
        {message && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className={`p-3 rounded-xl mb-4 text-sm font-medium border ${
              message.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'
            }`}>
            {message.text}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Create Form */}
      <AnimatePresence>
        {showForm && (
          <motion.form initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            action={handleCreate}
            className="bg-white/[0.03] border border-white/10 rounded-xl p-5 mb-6 flex flex-col gap-4 overflow-hidden">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Plus className="w-4 h-4 text-accent" /> Crear Estudiante
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-white/50 uppercase tracking-wider mb-1 block">Nombre Completo</label>
                <input name="fullName" required placeholder="Juan Pérez"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50 focus:outline-none" />
              </div>
              <div>
                <label className="text-xs text-white/50 uppercase tracking-wider mb-1 block">Correo Electrónico</label>
                <input name="email" type="email" required placeholder="juan@correo.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50 focus:outline-none" />
              </div>
              <div>
                <label className="text-xs text-white/50 uppercase tracking-wider mb-1 block">Contraseña</label>
                <input name="password" type="text" required placeholder="clave123" minLength={6}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-primary/50 focus:outline-none font-mono" />
              </div>
            </div>
            <div className="flex gap-3">
              <button type="submit" disabled={pending}
                className="bg-accent text-black font-bold px-6 py-2.5 rounded-xl text-sm hover:scale-105 transition-transform disabled:opacity-50">
                {pending ? 'Creando...' : 'Crear Estudiante'}
              </button>
              <button type="button" onClick={() => setShowForm(false)}
                className="text-white/50 hover:text-white text-sm transition">Cancelar</button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Students Table */}
      {loading ? (
        <div className="text-center py-12 text-white/50">Cargando estudiantes...</div>
      ) : students.length === 0 ? (
        <div className="text-center py-12 text-white/40">
          <Users className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p>No hay estudiantes registrados</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-white/50 font-medium">Nombre</th>
                <th className="text-left py-3 px-4 text-white/50 font-medium">Email</th>
                <th className="text-left py-3 px-4 text-white/50 font-medium">Registrado</th>
                <th className="text-right py-3 px-4 text-white/50 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {students.map(s => (
                <tr key={s.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                  <td className="py-3 px-4 text-white font-medium">{s.full_name || '—'}</td>
                  <td className="py-3 px-4 text-white/70">{s.email}</td>
                  <td className="py-3 px-4 text-white/50">{new Date(s.created_at).toLocaleDateString('es-CL')}</td>
                  <td className="py-3 px-4 text-right">
                    <button onClick={() => handleDelete(s.id, s.full_name || s.email)} disabled={pending}
                      className="text-red-400/60 hover:text-red-400 transition p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════════
// TRACKING PANEL
// ═══════════════════════════════════════════════════════════════
function TrackingPanel() {
  const [summary, setSummary] = useState<Array<{
    id: string; full_name: string; email: string;
    totalTimeSeconds: number; sessionsVisited: number;
    practiceCompleted: number; evalsCompleted: number; avgEvalScore: number | null;
    progress: Array<{ class_id: number; lesson_time_spent_seconds: number; practice_completed: boolean; eval_completed: boolean; eval_score: number | null; updated_at: string }>
  }>>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    getAllActivitySummary().then(res => {
      setSummary(res.data || [])
      setLoading(false)
    })
  }, [])

  const formatTime = (secs: number) => {
    if (secs < 60) return `${secs}s`
    const m = Math.floor(secs / 60)
    const h = Math.floor(m / 60)
    if (h > 0) return `${h}h ${m % 60}m`
    return `${m}m`
  }

  const filtered = summary.filter(s =>
    s.full_name?.toLowerCase().includes(search.toLowerCase()) ||
    s.email?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      className="glass p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary" /> Seguimiento de Actividad
        </h2>
        <div className="relative">
          <Search className="w-4 h-4 text-white/30 absolute left-3 top-1/2 -translate-y-1/2" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar..."
            className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:border-primary/50 focus:outline-none w-56" />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-white/50">Cargando datos...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 text-white/40">
          <BarChart3 className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p>{search ? 'Sin resultados' : 'Sin datos de actividad aún'}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map(student => (
            <div key={student.id} className="border border-white/10 rounded-xl overflow-hidden">
              <button onClick={() => setExpanded(expanded === student.id ? null : student.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-white/[0.02] transition">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {(student.full_name || '?')[0].toUpperCase()}
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-white">{student.full_name}</p>
                    <p className="text-xs text-white/50">{student.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-xs">
                  <div className="flex items-center gap-1.5 text-white/50">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-mono">{formatTime(student.totalTimeSeconds)}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/50">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{student.sessionsVisited}/16</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/50">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{student.evalsCompleted} evals</span>
                  </div>
                  {student.avgEvalScore !== null && (
                    <div className={`font-bold font-mono px-2 py-0.5 rounded-lg ${
                      student.avgEvalScore >= 50 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                    }`}>
                      {student.avgEvalScore.toFixed(0)} pts
                    </div>
                  )}
                </div>
              </button>

              <AnimatePresence>
                {expanded === student.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden">
                    <div className="px-4 pb-4 border-t border-white/5">
                      {student.progress.length === 0 ? (
                        <p className="text-sm text-white/40 py-4 text-center">Sin actividad registrada</p>
                      ) : (
                        <table className="w-full text-xs mt-3">
                          <thead>
                            <tr className="text-white/40">
                              <th className="text-left py-2">Sesión</th>
                              <th className="text-center py-2">Tiempo</th>
                              <th className="text-center py-2">Práctica</th>
                              <th className="text-center py-2">Evaluación</th>
                              <th className="text-right py-2">Última Actividad</th>
                            </tr>
                          </thead>
                          <tbody>
                            {student.progress.sort((a, b) => a.class_id - b.class_id).map(p => (
                              <tr key={p.class_id} className="border-t border-white/5">
                                <td className="py-2 text-white/80">Sesión {p.class_id}</td>
                                <td className="py-2 text-center font-mono text-white/60">{formatTime(p.lesson_time_spent_seconds || 0)}</td>
                                <td className="py-2 text-center">
                                  {p.practice_completed
                                    ? <CheckCircle2 className="w-4 h-4 text-green-400 inline" />
                                    : <span className="text-white/30">—</span>}
                                </td>
                                <td className="py-2 text-center">
                                  {p.eval_completed
                                    ? <span className={`font-bold font-mono ${(p.eval_score || 0) >= 50 ? 'text-green-400' : 'text-red-400'}`}>
                                        {p.eval_score}/70
                                      </span>
                                    : <span className="text-white/30">—</span>}
                                </td>
                                <td className="py-2 text-right text-white/40">{new Date(p.updated_at).toLocaleDateString('es-CL')}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
