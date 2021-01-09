import React from 'react'
import '@testing-library/jest-native'
import { fireEvent } from '@testing-library/react-native'

import { Answer } from '@/components'
import { renderWithTheme } from '@/helpers'
import theme from '@/styles/theme'

jest.mock('../../../../node_modules/react-native-toast-message/src/index')

describe('<Answer />', () => {
  it('should render the Answer with white color before clicking', () => {
    const { getByText } = renderWithTheme(
      <Answer text="any text" correctAnswerIndex={1} answerIndex={2} />
    )

    const answer = getByText(/any text/)

    expect(answer).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render the Answer with error color if a wrong option is pressed', () => {
    const { getByText } = renderWithTheme(
      <Answer text="any text" correctAnswerIndex={1} answerIndex={2} />
    )

    const answer = getByText(/any text/)

    fireEvent.press(answer)

    expect(answer).toHaveStyle({
      color: theme.colors.error
    })
  })
})
