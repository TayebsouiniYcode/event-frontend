// eslint-disable-next-line camelcase,import/no-extraneous-dependencies
import jwt_decode from 'jwt-decode'

const getNameFromToken = () => {
  const token = localStorage.getItem('accessToken')
  if (!token) return null
  const decoded = jwt_decode(token)
  return decoded.name
}

export default {
    getNameFromToken,
}
