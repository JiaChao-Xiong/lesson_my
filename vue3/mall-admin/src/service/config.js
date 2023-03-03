import axios from 'axios'
import { getLocal } from '@/utils'

axios.defaults.baseURL = 
    'http://backend-api-02.newbee.ltd/manage-api/v1/'
axios.defaults.headers['token'] = getLocal('token') || ''

axios.interceptors.response.use(res => {
    // code,
    // message
    // data: {
    //     data:
    // }
    return res.data
})

export default axios
