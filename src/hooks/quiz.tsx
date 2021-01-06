import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'

type QuizContext = {
  points: number
  currentQuestionIndex: number
  currentTries: number
  setPoints: (punctuation: number) => void
  setCurrentQuestionIndex: (currentQuestionIndex: number) => void
  setCurrentTries: (tries: number) => void
}

type QuizProviderProps = {
  children: ReactNode
}

const QuizContext = createContext<QuizContext | null>(null)

const QuizProvider = ({ children }: QuizProviderProps) => {
  const [points, setQuizPoints] = useState(0)
  const [currentQuestionIndex, setQuizCurrentQuestionIndex] = useState(0)
  const [currentTries, setQuizCurrentTries] = useState(0)

  const setPoints = useCallback((punctuation: number) => {
    setQuizPoints(punctuation)
  }, [])

  const setCurrentQuestionIndex = useCallback(
    (currentQuestionIndex: number) => {
      setQuizCurrentQuestionIndex(currentQuestionIndex)
    },
    []
  )

  const setCurrentTries = useCallback((tries: number) => {
    setQuizCurrentTries(tries)
  }, [])

  const value = useMemo(
    () => ({
      currentQuestionIndex,
      points,
      currentTries,
      setCurrentQuestionIndex,
      setPoints,
      setCurrentTries
    }),
    [
      points,
      setPoints,
      currentQuestionIndex,
      setCurrentQuestionIndex,
      currentTries,
      setCurrentTries
    ]
  )

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

function useQuiz(): QuizContext {
  const context = useContext(QuizContext)

  if (!context) throw new Error('useQuiz must be used in a QuizProvider')

  return context
}

export { QuizProvider, useQuiz }
