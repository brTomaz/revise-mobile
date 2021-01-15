export enum State {
  Correct = 'Correct',
  Wrong = 'Wrong',
  Unavailable = 'Unavailable'
}

export type AnswerProps = {
  text: string
  answerIndex: number
  correctAnswerIndex: number
}
