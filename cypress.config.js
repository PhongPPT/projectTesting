// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

// cypress.config.js or cypress.config.ts
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // your Vite dev server URL
    setupNodeEvents(on, config) {
      // you can add custom plugins or listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // location of your test files
    supportFile: "cypress/support/e2e.js", // optional, leave as default unless needed
  },
});

