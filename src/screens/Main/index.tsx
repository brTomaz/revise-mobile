import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'

import { Logo, Question, QuizInfo } from '@/components'
import { TypeQuestion } from '@/domain/entities/question'
import { shuffleQuestions } from '@/helpers'
import { useQuiz } from '@/hooks/quiz'
import { getQuestionsFromAPI } from '@/services/api/usecases/get-questions'
import theme from '@/styles/theme'
import * as Styles from './styles'

enum State {
  Loading = 'Loading',
  Completed = 'Completed'
}

const Main = () => {
  const [state, setState] = useState(State.Loading)
  const [questions, setQuestions] = useState<TypeQuestion[]>([])
  const { points, currentQuestionIndex } = useQuiz()

  useEffect(() => {
    async function loadQuestions(): Promise<void> {
      const questions = await getQuestionsFromAPI()
      setQuestions(shuffleQuestions(questions))
      setState(State.Completed)
    }
    loadQuestions()
  }, [])

  if (state === State.Loading) {
    return (
      <Styles.LoaderWrapper>
        <ActivityIndicator size="large" color={theme.colors.secondary} />
      </Styles.LoaderWrapper>
    )
  } else {
    return (
      <Styles.ScrollScreen>
        <Styles.Wrapper>
          <Styles.Header>
            <QuizInfo
              topText="Questão"
              mainInfo={currentQuestionIndex + 1}
              bottomText={`de ${questions.length}`}
            />
            <Logo minimal />
            <QuizInfo
              topText="Pontuação"
              mainInfo={points}
              bottomText="pontos"
            />
          </Styles.Header>
          <Question
            key={questions[currentQuestionIndex].id}
            info={questions[currentQuestionIndex].info}
            statement={questions[currentQuestionIndex].statement}
            answers={questions[currentQuestionIndex].answers}
            correctAnswer={questions[currentQuestionIndex].correctAnswer}
          />
        </Styles.Wrapper>
      </Styles.ScrollScreen>
    )
  }
}

export default Main
