import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For custom domain (philtru.me), base should be '/'
// For GitHub Pages subdirectory (username.github.io/repo-name/), change to '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})

