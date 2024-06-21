import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite';

export default ( mode: string ) => {
  
  // Load app-level env vars to node-level env vars.
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return defineConfig({
    // To access env vars here use process.env.TEST_VAR
    plugins: [react()],
  });
}
