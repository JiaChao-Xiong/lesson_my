# SPA 优质的现代用户体验
1. 不要通过a标签跳转页面白一下
    click event.preventDefault() 默认行为
    index.html#page1 index.html#page2 index.html#page3
    url hash 部分  不会刷新页面
    不同url 匹配不同资源
    url 会变
2. url 的hash部分改变 请求新的内容
    并且页面不会刷新

3. url 分成一下几部分
    js url 属于  BOM    location对象
    http://127.0.0.1:5500/router/hash/index.html'
    location.protocol  http: -> https
    location.host 127.0.0.1:5500 domain port
        location.hostname
        location.port
    location.pathname
    location.search
    location.hash  改变时  不会去刷新
