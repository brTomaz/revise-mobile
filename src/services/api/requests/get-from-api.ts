import { httpClient } from '../base/http-client'

export const getFromAPI = async (endpoint: string) => {
  return httpClient
    .get(endpoint)
    .then((response) => response.data)
    .catch((error) => error.response)
}
