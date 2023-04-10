import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'
import { config } from 'dotenv'

config()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.PORT as string),
  },
  plugins: [react(), eslint()],
})
