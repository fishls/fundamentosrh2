import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function run() {
  // Upsert classes
  const classesData = [
    { id: 1, unit_name: 'Unidad 1: Biomecánica', title: 'Introducción a la biomecánica en rehabilitación', braddom_chapters: 'Caps. 15, 17' },
    { id: 2, unit_name: 'Unidad 1: Biomecánica', title: 'Principios biomecánicos del movimiento humano', braddom_chapters: 'Caps. 11, 13, 15' },
    { id: 3, unit_name: 'Unidad 1: Biomecánica', title: 'Biomecánica de la columna y marcha', braddom_chapters: 'Caps. 10, 13, 33' },
    { id: 4, unit_name: 'Unidad 2: Terapias', title: 'Fundamentos del ejercicio terapéutico', braddom_chapters: 'Cap. 15' },
    { id: 5, unit_name: 'Unidad 2: Terapias', title: 'Prescripción básica de ejercicio en rehabilitación', braddom_chapters: 'Cap. 15' },
    { id: 6, unit_name: 'Unidad 2: Terapias', title: 'Terapias manuales en rehabilitación', braddom_chapters: 'Cap. 16' },
    { id: 7, unit_name: 'Unidad 2: Terapias', title: 'Medios físicos y modalidades terapéuticas', braddom_chapters: 'Cap. 17' },
    { id: 8, unit_name: 'Unidad 2: Terapias', title: 'Integración de terapias y examen parcial', braddom_chapters: 'Varios' },
    { id: 9, unit_name: 'Unidad 3: Órtesis y Prótesis', title: 'Fundamentos de órtesis', braddom_chapters: 'Caps. 11-13' },
    { id: 10, unit_name: 'Unidad 3: Órtesis y Prótesis', title: 'Órtesis de extremidades y columna', braddom_chapters: 'Caps. 11-13' },
    { id: 11, unit_name: 'Unidad 3: Órtesis y Prótesis', title: 'Fundamentos de prótesis', braddom_chapters: 'Caps. 9, 10' },
    { id: 12, unit_name: 'Unidad 3: Órtesis y Prótesis', title: 'Ayudas técnicas y sillas de ruedas', braddom_chapters: 'Caps. 14, 19' },
    { id: 13, unit_name: 'Unidad 4: Imagenología', title: 'Fundamentos imagenológicos en rehabilitación', braddom_chapters: 'Caps. 31, 33, 41, 43' },
    { id: 14, unit_name: 'Unidad 4: Imagenología', title: 'Imagenología clínica aplicada', braddom_chapters: 'Caps. 31, 33, 41, 43' },
    { id: 15, unit_name: 'Unidad 5: Electrodiagnóstico', title: 'Bases del electrodiagnóstico', braddom_chapters: 'Cap. 8, 8A' },
    { id: 16, unit_name: 'Unidad 5: Electrodiagnóstico', title: 'Interpretación e integración final', braddom_chapters: 'Cap. 8, 8A, 41' },
  ]

  const { error: upsertErr } = await supabase
    .from('classes')
    .upsert(classesData, { onConflict: 'id' })

  if (upsertErr) {
    console.log('Upsert result:', upsertErr.message)
  } else {
    console.log('✅ Classes upserted')
  }

  // Verify
  const { data, error } = await supabase.from('classes').select('id, title, is_visible').order('id')
  if (error) {
    console.log('Query error:', error.message)
  } else {
    console.log('✅ Verified:', data?.length, 'rows')
    if (data?.[0]) console.log('Sample:', JSON.stringify(data[0]))
  }
}

run().catch(console.error)
