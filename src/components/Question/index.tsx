import React, { useState, useEffect } from 'react'
import { Animated } from 'react-native'

import Answer from '@/components/Answer'
import Statement from '@/components/Statement'
import { sleep, configureTransition } from '@/helpers'
import * as Styles from './styles'

type QuestionProps = {
  info: string
  statement: string
  answers: string[]
  correctAnswer: number
}

enum Transition {
  Starting = 'Starting',
  Completed = 'Completed'
}

const Question = ({
  info,
  statement,
  answers,
  correctAnswer
}: QuestionProps) => {
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
        delay: 500,
        useNativeDriver: true
      }).start()
    }
    configTransition()
  })

  return (
    <Styles.Wrapper>
      {transition === Transition.Completed && (
        <Animated.View>
          <Styles.InfoWrapper>
            <Styles.Info source={{ html: info }} />
          </Styles.InfoWrapper>
          <Styles.AnswerAndStatementWrapper>
            <Styles.StatementWrapper>
              <Statement text={statement} />
            </Styles.StatementWrapper>
            {answers.map((answer, index) => (
              <Styles.AnswerWrapper key={answer}>
                <Answer
                  text={answer}
                  answerIndex={index}
                  correctAnswerIndex={correctAnswer - 1}
                />
              </Styles.AnswerWrapper>
            ))}
          </Styles.AnswerAndStatementWrapper>
        </Animated.View>
      )}
    </Styles.Wrapper>
  )
}

export default Question
