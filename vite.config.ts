import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'
import { config } from 'dotenv'
import istanbul from 'vite-plugin-istanbul'

config()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.PORT),
  },
  plugins: [
    react(),
    eslint(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
})
