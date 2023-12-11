import axios from 'axios'

const epicAPI = axios.create({
  baseURL: 'https://epic.gsfc.nasa.gov/api/natural/date/'
})

export default epicAPI