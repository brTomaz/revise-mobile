/* eslint-disable @typescript-eslint/no-empty-function */
import { LayoutAnimation, Platform } from 'react-native'

export default function configureTransition(onConfigured = () => {}) {
  const animation = LayoutAnimation.create(
    750,
    LayoutAnimation.Types.easeInEaseOut,
    LayoutAnimation.Properties.opacity
  )

  const promise = new Promise((resolve) => {
    if (Platform.OS === 'android') {
      LayoutAnimation.configureNext(animation)
      setTimeout(resolve, 750)
    } else {
      LayoutAnimation.configureNext(animation, () => {})
    }
  })

  onConfigured()

  return promise
}
