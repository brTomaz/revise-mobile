import React from 'react'

import { Question } from '@/components'
import { renderWithTheme } from '@/helpers'
import { mockQuestion } from '@/__mocks__/mock-question'

describe('<Question />', () => {
  jest.useFakeTimers('legacy')

  it('should match to snapshot', async () => {
    const { id, info, statement, answers, correctAnswer } = mockQuestion

    const { toJSON } = renderWithTheme(
      <Question
        key={id}
        info={info}
        statement={statement}
        answers={answers}
        correctAnswer={correctAnswer}
      />
    )

    expect(toJSON()).toMatchSnapshot()
  })
})
