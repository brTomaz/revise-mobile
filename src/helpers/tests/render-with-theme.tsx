import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { render } from '@testing-library/react-native'

import { QuizProvider } from '@/hooks/quiz'
import theme from '@/styles/theme'
import Toast from 'react-native-toast-message'

const renderWithTheme = (children: ReactNode) =>
  render(
    <ThemeProvider theme={theme}>
      <QuizProvider>{children}</QuizProvider>
    </ThemeProvider>
  )

export default renderWithTheme
