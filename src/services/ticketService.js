import axios from '@/libs/axios'

const baseURL = 'http://localhost:8000/api/ticket'

export const ajouterTicket = data => axios.post(`${baseURL}/create`, data)
