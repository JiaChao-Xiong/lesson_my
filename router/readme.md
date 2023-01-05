# 网站的核心?
    1. 内存你
        a

- 传统的网站开发
    - 使用MVVM 代替DOM 编程
        数据驱动的开发
    - 多个页面  Multiple Page Application
        1. 每个页面都是重复的完整html 结构
        2. 用户体验不太好，需要优化
            每个页面的请求过程都是一次http的请求响应过程
            完整的html
            请求响应需要一个事件  页面会白一下，页面加载慢
            有什么技术否方案  去优化
            SPA Single Page Application
            单页应用开发思维
            ajax  不跳转页面   vue data
            - SPA
            - ajax  js 动态的更新内容，后台去向服务器通信，获取新的内容
                不用单纯的借助 url 的切换，http 向服务器请求整个页面
