const { defineConfig } = require('eslint/config')
const rnConfig = require('@react-native/eslint-config')

module.exports = defineConfig([
  rnConfig,
  {
    ignores: ['node_modules/', 'android/', 'ios/'],
  },
])
