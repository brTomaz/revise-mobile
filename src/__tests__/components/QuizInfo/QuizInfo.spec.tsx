import React from 'react'
import 'jest-styled-components'

import { QuizInfo } from '@/components'
import { renderWithTheme } from '@/helpers'
import theme from '@/styles/theme'

describe('<QuizInfo />', () => {
  it('should render with correct styles', () => {
    const { getByText } = renderWithTheme(
      <QuizInfo
        topText="any top text"
        mainInfo={2}
        bottomText="any bottom text"
      />
    )

    const topText = getByText(/any top text/)
    const mainInfo = getByText(/2/)
    const bottomText = getByText(/any bottom text/)

    const textStyles = {
      fontFamily: theme.fonts.regular,
      fontSize: 16,
      color: theme.colors.white
    }

    expect(topText).toHaveStyle(textStyles)

    expect(bottomText).toHaveStyle(textStyles)

    expect(mainInfo).toHaveStyle({
      fontFamily: theme.fonts.light,
      fontSize: 32,
      color: theme.colors.secondary
    })
  })
})
