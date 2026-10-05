import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default function () {
  return defineConfig({
    plugins: [
      vue(),
      tailwindcss(),
    ],
    // Match your exact GitHub repository name (e.g., '/code-and-craft/')
    base: '/code-and-craft/'
  })
}