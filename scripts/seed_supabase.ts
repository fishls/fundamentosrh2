import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { classesData } from '../docs/classes_data';

// Cargamos variables de entorno (útil si se ejecuta desde consola Node)
config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Si tienes SUPABASE_SERVICE_ROLE_KEY, la usará para saltarse el RLS.
// Si no, intentará usar la clave anónima (funcionará si preparaste la política que te di antes para public o si desactivaste RLS temporalmente).
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Faltan las variables de entorno NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY en .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedClasses() {
  console.log('🚀 Iniciando sincronización de clases en Supabase...');
  
  for (const cls of classesData) {
    console.log(`⏳ Subiendo Clase ${cls.id}: ${cls.title}...`);
    
    const { error } = await supabase
      .from('classes')
      .upsert({
        id: cls.id,
        unit_name: cls.unit_name,
        title: cls.title,
        braddom_chapters: cls.braddom_chapters,
        lesson_content: cls.lesson_content,
        interactive_practice: cls.interactive_practice,
        learning_eval: cls.learning_eval
      }, { onConflict: 'id' });
      
    if (error) {
      console.error(`❌ Error guardando Clase ${cls.id}:`, error.message);
    } else {
      console.log(`✅ Clase ${cls.id} guardada exitosamente.`);
    }
  }
  
  console.log('🎉 Sincronización completada!');
}

seedClasses();
