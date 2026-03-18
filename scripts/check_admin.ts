import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config({ path: '/home/ralco/Antigravity/fundamentosrh2025/.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

async function check() {
  // 1. List auth users
  const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
  if (listError) { console.error("❌ Error listando usuarios:", listError.message); return; }
  
  console.log(`\n📋 Usuarios en Auth (${users.length}):`);
  users.forEach(u => console.log(`  - ${u.email} | id: ${u.id} | confirmed: ${!!u.email_confirmed_at}`));
  
  const adminUser = users.find(u => u.email === 'admin@rehabstudio.com');
  
  if (!adminUser) {
    console.log("\n⚠️ admin@rehabstudio.com NO existe en Auth.");
  } else {
    console.log(`\n✅ admin@rehabstudio.com encontrado en Auth. ID: ${adminUser.id}`);
    
    // Try to sign in to verify password works
    const testClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { error: signInError } = await testClient.auth.signInWithPassword({
      email: 'admin@rehabstudio.com',
      password: 'Admin123456!'
    });
    if (signInError) {
      console.log(`❌ Login falló: ${signInError.message}`);
    } else {
      console.log("✅ Login exitoso con Admin123456!");
    }
  }

  // 2. Check profiles table
  const { data: profiles, error: profError } = await supabase.from('profiles').select('*');
  if (profError) { console.error("❌ Error profiles:", profError.message); return; }
  
  console.log(`\n📋 Perfiles (${profiles.length}):`);
  profiles.forEach(p => console.log(`  - ${p.email} | role: ${p.role} | id: ${p.id}`));
}

check();
