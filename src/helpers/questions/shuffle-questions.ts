import { TypeQuestion } from '@/domain/entities/question'

export default function shuffleQuestions(questions: TypeQuestion[]) {
  return [...questions].sort(() => Math.random() - 0.5)
}
