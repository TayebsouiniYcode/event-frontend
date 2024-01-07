import axios from 'axios'

const baseURL = 'http://localhost:8000/api/'

// eslint-disable-next-line import/prefer-default-export
export const ajouterTexte = async texte => {
  console.log(texte)
  const response = await axios.post(`${baseURL}event/addtext`, texte)
  return response.data
}
