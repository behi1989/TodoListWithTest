import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    specPattern: '**/*.cy.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    specPattern: '**/*.cy.tsx',
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
