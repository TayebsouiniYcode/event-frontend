import axios from 'axios'


const baseURL = 'http://localhost:8000/api'

export const login = async (email, password) => {
  const response = await axios.post(`${baseURL}/auth/login`, { email, password })
  return response.data
}

const register = async (email, password) => {
    const response = await axios.post(`${baseURL}/auth/register`, { email, password })
    return response.data
}

export default {
  login,
  register,
}
