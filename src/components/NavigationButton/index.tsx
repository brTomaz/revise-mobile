import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

import * as Styles from './styles'

type NavigationButtonProps = {
  text: string
  navigateTo: string
}

const NavigationButton = ({ text, navigateTo }: NavigationButtonProps) => {
  const navigation = useNavigation()

  async function handleNavigation(): Promise<void> {
    navigation.navigate(navigateTo)
  }

  return (
    <Styles.NavigationButton onPress={handleNavigation}>
      <Styles.ButtonText>{text}</Styles.ButtonText>
      <Styles.IconContainer>
        <Icon name="chevron-right-circle" size={24} color="#2DC2C3" />
      </Styles.IconContainer>
    </Styles.NavigationButton>
  )
}

export default NavigationButton
