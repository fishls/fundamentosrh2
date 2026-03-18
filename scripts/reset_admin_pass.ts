import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

async function resetAdminPassword() {
  const newPassword = 'Admin123456!';
  
  const { data, error } = await supabase.auth.admin.updateUserById(
    '0ea5e121-d4a0-4b0b-b323-d0c125800e89',
    { password: newPassword }
  );

  if (error) {
    console.error("❌ Error reseteando contraseña:", error.message);
    return;
  }
  console.log("✅ Contraseña reseteada exitosamente.");

  // Verify login works now
  const testClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { error: signInError } = await testClient.auth.signInWithPassword({
    email: 'admin@rehabstudio.com',
    password: newPassword
  });
  
  if (signInError) {
    console.log(`❌ Login aún falla: ${signInError.message}`);
  } else {
    console.log("✅ Login verificado — admin@rehabstudio.com / Admin123456! funciona.");
  }
}

resetAdminPassword();
