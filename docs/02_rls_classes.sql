-- Habilitar RLS en la tabla classes por seguridad
ALTER TABLE classes ENABLE ROW LEVEL SECURITY;

-- 1. Permitir que cualquier persona pueda VER (leer) las clases
CREATE POLICY "Permitir lectura publica de clases" 
ON classes FOR SELECT 
TO public 
USING (true);

-- 2. Permitir que usuarios autenticados puedan INSERTAR clases
CREATE POLICY "Permitir insercion a usuarios autenticados" 
ON classes FOR INSERT 
TO authenticated 
WITH CHECK (true);

-- 3. Permitir que usuarios autenticados puedan ACTUALIZAR clases
CREATE POLICY "Permitir actualizacion a usuarios autenticados" 
ON classes FOR UPDATE 
TO authenticated 
USING (true);
