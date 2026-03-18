-- =============================================
-- ADMIN BACKEND SCHEMA UPDATES
-- Run this ENTIRE script in Supabase SQL Editor
-- Dashboard > SQL Editor > New Query > Paste > Run
-- =============================================

-- 1. Fix role check constraint (drop old, add new including 'admin')
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_role_check;
ALTER TABLE profiles ADD CONSTRAINT profiles_role_check CHECK (role IN ('student', 'instructor', 'admin'));

-- 2. Add visibility column to classes
ALTER TABLE classes ADD COLUMN IF NOT EXISTS is_visible BOOLEAN DEFAULT TRUE;

-- 3. Update all existing classes to visible
UPDATE classes SET is_visible = TRUE WHERE is_visible IS NULL;

-- 4. Set admin role for admin@rehabstudio.com
UPDATE profiles SET role = 'admin' WHERE email = 'admin@rehabstudio.com';

-- 5. Enable RLS on classes table  
ALTER TABLE classes ENABLE ROW LEVEL SECURITY;

-- 6. Drop existing policies to avoid conflicts (safe to run multiple times)
DROP POLICY IF EXISTS "Estudiantes ven su propio progreso" ON class_progress;
DROP POLICY IF EXISTS "Estudiantes actualizan su propio progreso" ON class_progress;
DROP POLICY IF EXISTS "Admins leen todos los perfiles" ON profiles;
DROP POLICY IF EXISTS "Admins leen todo el progreso" ON class_progress;
DROP POLICY IF EXISTS "Estudiantes insertan su propio progreso" ON class_progress;
DROP POLICY IF EXISTS "Todos leen clases visibles" ON classes;
DROP POLICY IF EXISTS "Admins actualizan clases" ON classes;

-- 7. Create RLS policies
-- Profiles: users see own + admins see all
CREATE POLICY "Perfiles: lectura" ON profiles FOR SELECT
  USING (auth.uid() = id OR EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'admin'));

-- Progress: users see own + admins see all
CREATE POLICY "Progreso: lectura" ON class_progress FOR SELECT
  USING (auth.uid() = student_id OR EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'admin'));

CREATE POLICY "Progreso: insertar" ON class_progress FOR INSERT
  WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Progreso: actualizar" ON class_progress FOR UPDATE
  USING (auth.uid() = student_id);

-- Classes: all see visible + admins see all
CREATE POLICY "Clases: lectura" ON classes FOR SELECT
  USING (is_visible = TRUE OR EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'admin'));

CREATE POLICY "Clases: actualizar" ON classes FOR UPDATE
  USING (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'admin'));
