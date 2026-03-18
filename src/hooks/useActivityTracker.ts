'use client'

import { useEffect, useRef, useCallback } from 'react'

/**
 * Tracks time spent on a class session and sends it to class_progress.
 * Also provides methods to record practice and eval completions.
 */
export function useActivityTracker(classId: number) {
  const startTime = useRef(Date.now())
  const totalSeconds = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Accumulate time every 30 seconds
  useEffect(() => {
    startTime.current = Date.now()

    intervalRef.current = setInterval(() => {
      totalSeconds.current = Math.floor((Date.now() - startTime.current) / 1000)
    }, 1000)

    const handleBeforeUnload = () => {
      sendTimeUpdate()
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      sendTimeUpdate()
    }
  }, [classId])

  const sendTimeUpdate = useCallback(() => {
    const seconds = Math.floor((Date.now() - startTime.current) / 1000)
    if (seconds < 5) return // Don't log trivially short visits

    // Use sendBeacon for reliability during unload
    const formData = new FormData()
    formData.append('classId', String(classId))
    formData.append('field', 'lesson_time')
    formData.append('value', String(seconds))

    navigator.sendBeacon('/api/progress', new URLSearchParams({
      classId: String(classId),
      field: 'lesson_time',
      value: String(seconds),
    }))
  }, [classId])

  const trackPractice = useCallback(() => {
    fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ classId, field: 'practice', value: '{}' }),
    })
  }, [classId])

  const trackEval = useCallback((score: number, data: Record<string, unknown> = {}) => {
    fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ classId, field: 'eval', value: String(score), evalData: JSON.stringify(data) }),
    })
  }, [classId])

  return { trackPractice, trackEval }
}
