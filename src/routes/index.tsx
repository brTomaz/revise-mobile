import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Welcome, Main } from '@/screens'
import theme from '@/styles/theme'

const App = createStackNavigator()

const headerOptionsStyles = {
  cardStyle: { backgroundColor: theme.colors.mainBg },
  headerShown: false
}
const AppRoutes = () => (
  <App.Navigator initialRouteName="Welcome">
    <App.Screen
      options={headerOptionsStyles}
      name="Welcome"
      component={Welcome}
    />
    <App.Screen options={headerOptionsStyles} name="Main" component={Main} />
  </App.Navigator>
)

export default AppRoutes
