module.exports = {
  preset: '@testing-library/react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    'jest-styled-components'
  ],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
