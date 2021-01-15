import React from 'react'
import 'jest-styled-components'

import { Statement } from '@/components'
import { renderWithTheme } from '@/helpers'
import theme from '@/styles/theme'

describe('<Statement />', () => {
  it('should render with correct styles', () => {
    const { getByText } = renderWithTheme(<Statement text="any text" />)

    const text = getByText(/any text/)

    expect(text).toHaveStyle({
      fontFamily: theme.fonts.bold,
      color: theme.colors.black,
      fontSize: 16
    })
  })
})
