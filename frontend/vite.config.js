import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname , "./src"),
    },
  },
  server: {
    proxy:{
      '/api': {
        target: '',
        changeOrigin: true,
        headers: {
          "Content-Type" : "application/json",
          Accept : "application/json",
        }

      }
    }
  }


})
