-- 1. Tabla de Perfiles Extendidos (Vinculada a auth.users de Supabase)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'student', CHECK (role IN ('student', 'instructor', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabla de Sesiones (Opcional en DB, pero útil para escalabilidad)
CREATE TABLE classes (
  id INT PRIMARY KEY, -- 1 a 16
  unit_name TEXT NOT NULL,
  title TEXT NOT NULL,
  braddom_chapters TEXT
);

-- 3. Tabla de Progreso Principal por Alumno y Clase (Consolidada)
CREATE TABLE class_progress (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  student_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  class_id INT REFERENCES classes(id) ON DELETE CASCADE,
  
  -- Componente 1: LessonContent
  lesson_completed BOOLEAN DEFAULT FALSE,
  lesson_time_spent_seconds INT DEFAULT 0,
  
  -- Componente 2: InteractivePractice
  practice_completed BOOLEAN DEFAULT FALSE,
  practice_score NUMERIC(5,2), -- Puntaje si aplica
  practice_data JSONB DEFAULT '{}'::jsonb, -- Almacena estado del taller lógico, respuestas, intentos
  
  -- Componente 3: LearningEval
  eval_completed BOOLEAN DEFAULT FALSE,
  eval_score NUMERIC(5,2), -- Puntaje final o nota obtenida
  eval_data JSONB DEFAULT '{}'::jsonb, -- Almacena respuestas del quiz o rúbrica de entrega
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Aseguramos que un alumno solo tenga un registro de progreso por cada clase
  UNIQUE(student_id, class_id)
);

-- Habilitación de Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_progress ENABLE ROW LEVEL SECURITY;

-- Políticas RLS básicas
-- (Los estudiantes solo pueden ver y actualizar su propio progreso)
CREATE POLICY "Estudiantes ven su propio progreso" 
  ON class_progress FOR SELECT 
  USING (auth.uid() = student_id);
  
CREATE POLICY "Estudiantes actualizan su propio progreso" 
  ON class_progress FOR UPDATE 
  USING (auth.uid() = student_id);
