import axios from 'axios'

axios.defaults.baseURL = 'https://www.fastmock.site/mock/995214af813bc47208cf2fcb558907e6/mall'
// use  拦截
// 结果后，最外层data 自动脱落
// 请求拦截
// axios.interceptors.request.use()
// 响应拦截
// 一次配置， 不用再data.data
axios.interceptors.response.use((res) => {
    // console.log(res);
    return res.data
})

export default axios