import axios from 'axios'

const astronomyAPI = axios.create({
  baseURL: ''
  // baseURL: 'https://astronomy.p.rapidapi.com/'
})

export default astronomyAPI