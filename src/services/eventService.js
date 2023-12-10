import axios from 'axios'

const baseURL = 'http://localhost:8000/api/event'

// eslint-disable-next-line import/prefer-default-export
export const getEvents = () => axios.get(`${baseURL}/get-all`)

