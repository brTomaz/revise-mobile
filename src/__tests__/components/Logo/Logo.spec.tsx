import React from 'react'
import { render } from '@testing-library/react-native'

import Logo from '@/components/Logo'

describe('<Logo />', () => {
  it('should render a complete Logo by default', () => {
    const { getByTestId } = render(<Logo />)

    const logo = getByTestId('logo')

    expect(logo).toBeTruthy()
    expect(logo).toMatchSnapshot()
  })

  it('should render a minimal Logo when this property is passed', () => {
    const { getByTestId } = render(<Logo minimal />)

    const minimalLogo = getByTestId('minimal-logo')

    expect(minimalLogo).toBeTruthy()
  })
})
