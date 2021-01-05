import React from 'react'
import 'react-native-gesture-handler'
import { Platform, UIManager } from 'react-native'
import { ThemeProvider } from 'styled-components'

import theme from '@/styles/theme'
import Welcome from '@/screens/Welcome'

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const App = () => (
  <ThemeProvider theme={theme}>
    <Welcome />
  </ThemeProvider>
)

export default App
