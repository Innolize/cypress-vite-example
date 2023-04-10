import path from 'path'
import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'

const __dirname = path.resolve()

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    setupNodeEvents(on) {
      on(
        'file:preprocessor',
        vitePreprocessor(path.resolve(__dirname, './vite.config.ts'))
      )
    },
    supportFile: false,
  },
})
