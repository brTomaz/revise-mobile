import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Logo, NavigationButton } from '@/components'
import { configureTransition, sleep } from '@/helpers'
import { Transition } from './protocols'
import * as Styles from './styles'
import theme from '@/styles/theme'

const Welcome = () => {
  const [transition, setTransition] = useState(Transition.Starting)

  const animatedOpacity = new Animated.Value(0)

  useEffect(() => {
    async function configTransition() {
      await sleep(500)
      await configureTransition(() => {
        setTransition(Transition.Completed)
      })

      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start()
    }
    configTransition()
  })

  return (
    <Styles.Wrapper transition={transition}>
      <Logo />
      {transition === Transition.Completed && (
        <Animated.View
          style={{
            opacity: animatedOpacity,
            height: '60%',
            width: '100%'
          }}
        >
          <Styles.Box>
            <Styles.Title>Consolide o seu conhecimento</Styles.Title>
            <NavigationButton
              text="Iniciar Questionário"
              icon={
                <Icon
                  name="chevron-right-circle"
                  size={24}
                  color={theme.colors.secondary}
                />
              }
              navigateTo="Main"
            />
          </Styles.Box>
        </Animated.View>
      )}
    </Styles.Wrapper>
  )
}

export default Welcome
