import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

async function check() {
  // Check classes table
  const { data: classes, error } = await supabase.from('classes').select('*').order('id');
  
  if (error) {
    console.error("❌ Error querying classes:", error.message);
    console.log("\n🔍 Possible cause: table 'classes' might not exist or is empty.");
    return;
  }

  console.log(`\n📋 Classes table has ${classes.length} records:`);
  if (classes.length === 0) {
    console.log("⚠️ La tabla 'classes' está VACÍA. Necesita ser poblada con las 16 sesiones.");
  } else {
    classes.forEach(c => console.log(`  #${c.id} | ${c.title} | is_visible: ${c.is_visible}`));
  }

  // Check if is_visible column exists
  if (classes.length > 0 && classes[0].is_visible === undefined) {
    console.log("\n⚠️ La columna 'is_visible' NO EXISTE. La migración admin no se ejecutó.");
  }
}

check();
