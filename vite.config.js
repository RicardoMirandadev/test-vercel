import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import {resolve} from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build:{
    rollupOptions:{
        imput:{
            main: resolve(__dirname, 'index.html'),
            prueba: resolve(__dirname, prueba.html)
        }
    }
  }
})
