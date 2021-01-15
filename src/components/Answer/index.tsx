import React, { useState } from 'react'

import { getPoints, showToast } from '@/helpers'
import { useQuiz } from '@/hooks/quiz'
import { State, AnswerProps } from './protocols'
import * as Styles from './styles'

const Answer = ({ text, answerIndex, correctAnswerIndex }: AnswerProps) => {
  const [state, setState] = useState(State.Unavailable)
  const {
    currentTries,
    points,
    setPoints,
    setCurrentTries,
    setCurrentQuestionIndex,
    currentQuestionIndex
  } = useQuiz()

  const updateQuizContext = (pointsEarned: number) => {
    setPoints(pointsEarned + points)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setCurrentTries(0)
  }

  const handlePress = () => {
    setCurrentTries(currentTries + 1)

    const isWrongAnswer = answerIndex !== correctAnswerIndex

    if (isWrongAnswer) {
      setState(State.Wrong)
    } else {
      setState(State.Correct)
      const pointsEarned = getPoints(currentTries)

      showToast(
        'success',
        `Ganhou ${pointsEarned} ponto(s)`,
        `Acertou na ${currentTries + 1}ª tentativa`
      )

      updateQuizContext(pointsEarned)
    }
  }

  return (
    <Styles.Wrapper
      onPress={handlePress}
      disabled={state !== State.Unavailable}
    >
      <Styles.Text state={state}>{text}</Styles.Text>
    </Styles.Wrapper>
  )
}

export default Answer
