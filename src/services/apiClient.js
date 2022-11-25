import axios from 'axios'
import { getToken } from './storage/token'

const axiosClient = axios.create({
    baseURL: 'https://pluralcode.institute/pluralcode_apis/api/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

axiosClient.interceptors.request.use(
    async (config) => {
        const token = getToken()

        if (token) config.headers.Authorization = `Bearer ${token}`

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosClient