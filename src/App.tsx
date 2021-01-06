import 'react-native-gesture-handler'

import React from 'react'
import { Platform, StatusBar, UIManager } from 'react-native'
import { ThemeProvider } from 'styled-components'
import Toast from 'react-native-toast-message'

import theme from '@/styles/theme'
import AppRoutes from '@/routes'
import AppProvider from './hooks'

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const App = () => (
  <ThemeProvider theme={theme}>
    <AppProvider>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <AppRoutes />
    </AppProvider>
    <Toast ref={(ref) => Toast.setRef(ref)} />
  </ThemeProvider>
)

export default App
