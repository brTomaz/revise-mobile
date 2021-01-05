import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Logo from '@/components/Logo'
import { configureTransition, sleep } from '@/helpers'
import * as Styles from './styles'

enum State {
  Starting = 'Starting',
  Completed = 'Completed'
}

const Welcome = () => {
  const [transition, setTransition] = useState(State.Starting)

  const animatedOpacity = new Animated.Value(0)

  useEffect(() => {
    async function configTransition() {
      await sleep(500)
      await configureTransition(() => {
        setTransition(State.Completed)
      })

      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 500,
        delay: 500,
        useNativeDriver: true
      }).start()
    }
    configTransition()
  })

  return (
    <Styles.Wrapper>
      <Logo />
      {transition === State.Completed && (
        <Animated.View
          style={{
            opacity: animatedOpacity,
            height: '60%',
            width: '100%'
          }}
        >
          <Styles.Box>
            <Styles.Title>Consolide o seu conhecimento</Styles.Title>
            <Styles.NavigationButton>
              <Styles.ButtonText>Iniciar Questionário</Styles.ButtonText>
              <Styles.IconContainer>
                <Icon name="chevron-right-circle" size={24} color="#2DC2C3" />
              </Styles.IconContainer>
            </Styles.NavigationButton>
          </Styles.Box>
        </Animated.View>
      )}
    </Styles.Wrapper>
  )
}

export default Welcome
