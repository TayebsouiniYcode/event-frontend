import axios from 'axios'

const API_URL = 'http://localhost:8000/api/reservation/'

// eslint-disable-next-line import/prefer-default-export
export const makeReservation = reservation => axios.post(`${API_URL}checkout`, reservation)

// eslint-disable-next-line camelcase
export const getReservationByUserId = user_id => axios.get(`${API_URL}get-by-user`, { params: { user_id } })
