# restfull api

- 前后端分离，restfull api 是接口定义的标准
- resource 资源
    一切皆资源 如何暴露这些资源？
    1. 每个资源都有独立的链接
    2. api 地址设计规则
        http://localhost:3000/posts   +Get(HTTP Method的语义)  资源的读操作
        http://localhost:3000/posts/1 读id 1 的文章
        新增内容  post
        http://localhost:3000/posts  POST(新增) {}
        获取第一篇文章的所有评论？
        http://localhost:3000/posts/:id/comments

    - 修改第二篇文章的标题
        http://localhost:3000/posts/:id  PUT替换  PATCH局部更新
        资源 名词    对资源的操作  动词

    - 删除一个评论？
        http://localhost:3000/comments/:id  DEL