import axios from './config.js' // axios 配置文件

export function getHomeData() {
    return axios.get('/index-infos')
}