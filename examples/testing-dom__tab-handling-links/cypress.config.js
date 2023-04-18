const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "5z4k89",
  fixturesFolder: false,
  e2e: {
    baseUrl: 'http://localhost:7078',
    supportFile: false,
  },
})
