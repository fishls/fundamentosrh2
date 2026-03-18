import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Cargar variables de entorno
config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("❌ Error: Se requiere SUPABASE_SERVICE_ROLE_KEY en .env.local para esta operación.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function createSuperAdmin(email: string, pass: string, name: string) {
  console.log(`🚀 Intentando crear Super Admin: ${email}...`);

  // 1. Crear el usuario en Auth
  const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
    email,
    password: pass,
    email_confirm: true,
    user_metadata: { full_name: name }
  });

  if (authError) {
    if (authError.message.includes("already registered")) {
        console.log("ℹ️ El usuario ya existe en Auth. Intentando promoverlo...");
        const { data: existingUser } = await supabase.from('profiles').select('id').eq('email', email).single();
        if (existingUser) {
            const { error: updateError } = await supabase
                .from('profiles')
                .update({ role: 'admin' })
                .eq('id', existingUser.id);
            
            if (updateError) console.error("❌ Error al promover:", updateError.message);
            else console.log("✅ Usuario promovido a Admin con éxito.");
        }
    } else {
        console.error("❌ Error creando usuario:", authError.message);
    }
    return;
  }

  console.log("✅ Usuario creado en Auth.");

  // 2. El trigger (si existiera) o el proceso manual para el perfil
  const { error: profileError } = await supabase
    .from('profiles')
    .update({ role: 'admin' })
    .eq('id', authUser.user.id);

  if (profileError) {
    console.error("❌ Error actualizando rol en el perfil:", profileError.message);
  } else {
    console.log("🎉 Super Admin configurado exitosamente!");
  }
}

// Datos por defecto (Puedes cambiarlos o pasarlos por argumentos)
const adminEmail = process.argv[2] || "admin@rehabstudio.com";
const adminPass = process.argv[3] || "Admin123456!";
const adminName = "Super Administrador";

createSuperAdmin(adminEmail, adminPass, adminName);
