import axios from 'axios'

const baseURL = 'http://localhost:8000/api'
const baseURLRegister = 'http://localhost:8000/api'

export const login = async (email, password) => {
  const response = await axios.post(`${baseURL}/auth/login`, { email, password })
  return response.data
}

export const register = async payload => {
  const response = await axios.post(`${baseURLRegister}/register`, payload)
  return response.data
}

export default {
  login,
  register,
}
