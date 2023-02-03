// 职责是数据接口
import axios from 'axios'  // 哇塞的ajax 库 
// xhr 缺点？ 不支持thenable 只支持回调函数  优点是 兼容性好 
// fetch 好处 thenable 缺点是 兼容性差

const instance = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/'
})

function getTopStories() {
    // console.log('getTopStories')
    // promise实例
    return instance.get('topstories.json?print=pretty')
}

function fetchItem(id) {
    return instance.get(`item/${id}.json?print=pretty`)
}

const API = {
    getTopStories: getTopStories,
    fetchItem: fetchItem
}

export default API