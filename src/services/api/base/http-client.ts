import { API_URL } from '@env'
import axios from 'axios'

const REVISE_BASE_URL = `${API_URL}`

export const httpClient = axios.create({
  baseURL: REVISE_BASE_URL
})
