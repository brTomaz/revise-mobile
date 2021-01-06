import React from 'react'

import { useQuiz } from '@/hooks/quiz'
import * as Styles from './styles'

const Results = () => {
  const { points } = useQuiz()
  return (
    <Styles.Wrapper>
      <Styles.Content>
        <Styles.Label>Total: </Styles.Label>
        <Styles.Total>{points}</Styles.Total>
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default Results
