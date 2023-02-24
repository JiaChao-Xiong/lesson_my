// 接口设计
// 假数据
import axios from './config.js'

export const  getProducts = () => {
    return axios.get('/products')
}
    

