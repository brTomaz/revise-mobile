import React from 'react'

import * as Styles from './styles'

type StatementProps = {
  text: string
}

const Statement = ({ text }: StatementProps) => (
  <Styles.Wrapper>
    <Styles.Text>{text}</Styles.Text>
  </Styles.Wrapper>
)

export default Statement
