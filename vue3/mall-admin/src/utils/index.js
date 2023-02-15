export const getPageTitle = (pathName) => {
    const data = {
        login: '登录',
        introduce: '系统介绍',
        add: '添加商品'
    }
    return data[pathName] || ''
}

export const getLocal = (name) => {
    return localStorage.getItem(name) || ''
}