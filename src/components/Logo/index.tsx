import React from 'react'
import { Image } from 'react-native'

import logo from '@/assets/images/logo.png'
import logoFirstLetter from '@/assets/images/logo-first-letter.png'

type LogoProps = {
  minimal?: boolean
}

const Logo = ({ minimal = false }: LogoProps) =>
  minimal ? (
    <Image source={logoFirstLetter} testID="minimal-logo" />
  ) : (
    <Image source={logo} testID="logo" />
  )

export default Logo
