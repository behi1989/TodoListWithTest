import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    specPattern: ['**/*.cy.{ts,tsx}'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    specPattern: ['**/*.cy.{ts,tsx}'],
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
