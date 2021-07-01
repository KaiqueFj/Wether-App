import axios from 'axios'
export const key = 'db9d7773'

const api = axios.create({
    baseURL: 'http://api.hgbrasil.com'
})

export default api