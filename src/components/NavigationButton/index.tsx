import React, { ReactNode } from 'react'
import { useNavigation } from '@react-navigation/native'

import * as Styles from './styles'

type NavigationButtonProps = {
  text: string
  icon: ReactNode
  navigateTo: string
  testID?: string
}

const NavigationButton = ({
  text,
  icon,
  navigateTo,
  testID
}: NavigationButtonProps) => {
  const navigation = useNavigation()

  async function handleNavigation(): Promise<void> {
    navigation.navigate(navigateTo)
  }

  return (
    <Styles.NavigationButton testID={testID} onPress={handleNavigation}>
      <Styles.ButtonText>{text}</Styles.ButtonText>
      <Styles.IconContainer>{icon}</Styles.IconContainer>
    </Styles.NavigationButton>
  )
}

export default NavigationButton
