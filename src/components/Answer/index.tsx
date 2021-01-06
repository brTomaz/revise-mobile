import React, { useState } from 'react'
import Toast from 'react-native-toast-message'

import { useQuiz } from '@/hooks/quiz'
import * as Styles from './styles'
import { getPoints } from '@/helpers'

export type TextProps = {
  state: string
}

export enum State {
  Correct = 'Correct',
  Wrong = 'Wrong',
  Unavailable = 'Unavailable'
}

type AnswerProps = {
  text: string
  answerIndex: number
  correctAnswerIndex: number
}

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

  const handlePress = () => {
    setCurrentTries(currentTries + 1)

    if (answerIndex + 1 !== correctAnswerIndex) {
      setState(State.Wrong)
    } else {
      setState(State.Correct)
      const pointsEarned = getPoints(currentTries + 1)

      Toast.show({
        type: 'success',
        text1: `Ganhou ${pointsEarned} ponto(s)`,
        text2: `Acertou na ${currentTries + 1}ª tentativa`
      })

      setPoints(pointsEarned + points)
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setCurrentTries(0)
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
