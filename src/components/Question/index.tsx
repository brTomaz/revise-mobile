import React, { useState, useEffect } from 'react'
import { Animated } from 'react-native'

import Answer from '@/components/Answer'
import Statement from '@/components/Statement'
import * as Styles from './styles'

type QuestionProps = {
  info: string
  statement: string
  answers: string[]
  correctAnswer: number
}

const Question = ({
  info,
  statement,
  answers,
  correctAnswer
}: QuestionProps) => {
  const [animatedOpacity] = useState(new Animated.Value(0))

  const configTransition = (value: number) => {
    Animated.timing(animatedOpacity, {
      toValue: value,
      duration: 1000,
      delay: 1000,
      useNativeDriver: true
    }).start()
  }

  const fadeIn = () => configTransition(1)

  useEffect(() => {
    fadeIn()
  })

  return (
    <Styles.Wrapper>
      <Animated.View style={{ opacity: animatedOpacity }}>
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
    </Styles.Wrapper>
  )
}

export default Question
