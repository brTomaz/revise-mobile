import React from 'react'
import * as Styles from './styles'

type QuizInfoProps = {
  mainInfo: number
  topText: string
  bottomText: string
}

const QuizInfo = ({ mainInfo, topText, bottomText }: QuizInfoProps) => (
  <Styles.Wrapper>
    <Styles.Text>{topText}</Styles.Text>
    <Styles.MainInfo>{mainInfo}</Styles.MainInfo>
    <Styles.Text>{bottomText}</Styles.Text>
  </Styles.Wrapper>
)

export default QuizInfo
