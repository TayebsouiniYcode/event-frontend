import axios from 'axios'

const API_URL = 'http://localhost:8000/api/reservation/';

// eslint-disable-next-line import/prefer-default-export
export const makeReservation = reservation => {
  return axios.post(`${API_URL}checkout`, reservation)
};
