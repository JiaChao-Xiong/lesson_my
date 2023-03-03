import axios from './config.js'

export const getSwiper = (params) => {
    return axios.get('/carousels', params)
}

export const addSwiperData = (params) => {
    return axios.post('carousels', params)
}