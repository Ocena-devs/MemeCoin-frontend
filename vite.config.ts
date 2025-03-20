import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 4000,
    host: true, // Ensures it listens on all network interfaces
    allowedHosts: ['thaicoin.fun'],
    strictPort: true
  },
  
});