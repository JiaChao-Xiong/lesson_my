import axios from './config.js'

export const login = (params) => {
    return axios.post('/adminUser/login', params)
}

export const getUserProfile = () => {
    return axios.get('/adminUser/profile')
}