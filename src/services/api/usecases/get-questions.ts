import { getFromAPI } from '../requests/get-from-api'

export const getQuestionsFromAPI = async () => {
  return await getFromAPI('/questions')
}
