import axios from './config.js'

export function getDetail(id) {
    return axios.get(`/goods/detail/${id}`)
}