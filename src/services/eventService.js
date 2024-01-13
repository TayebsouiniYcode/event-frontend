import axios from 'axios'

const baseURL = 'http://localhost:8000/api/event'

export const getEvents = () => axios.get(`${baseURL}/get-all`)

export const getEventsByUser = user_id => axios.get(`${baseURL}/getEventByUserId`, { params: { user_id } })

export const createEvent = data => axios.post(`${baseURL}/create`, data)

export const getEvent = id => axios.get(`${baseURL}/${id}`)

export const deleteEvent = id => axios.delete(`${baseURL}/delete/${id}`)

export const updateEvent = data => axios.put(`${baseURL}/update`, data)
