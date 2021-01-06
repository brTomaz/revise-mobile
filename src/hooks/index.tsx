import { NavigationContainer } from '@react-navigation/native'
import React, { ReactNode } from 'react'
import { QuizProvider } from './quiz'

type AppProviderProps = {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => (
  <QuizProvider>
    <NavigationContainer>{children}</NavigationContainer>
  </QuizProvider>
)

export default AppProvider
