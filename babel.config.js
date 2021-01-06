// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@': path.join(__dirname, 'src')
        }
      }
    ],
    ['module:react-native-dotenv']
  ]
}
