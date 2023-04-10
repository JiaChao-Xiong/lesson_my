# 前端性能优化最重要 -- 缓存

- 静态资源缓存
    304 Not Modified

- 第一次访问某站
    200 返回资源  花费时间
    走缓存


- node 的理解
    1. 如何返回 html 模板?
        硬盘里 fs  读出来   字符串
        fs.resdFile 异步的，不会阻塞node 的单线程  node 的eventloop
        同样硬件能力下 多让一些用户访问 服务器价格便宜
        index.js 内存 -> fs(I/O) -> 硬盘 -> 回调函数 -> 第一个参数是err(文件路径不存在,固态硬盘和机械硬盘的区别w),
        第二参数为数据 
    
    2. readFileSync 同步，不太常用，性能不太好
    3. 流的概念
        二进制文件的处理思想
        fs.createReadStream()

- 图片格式
    jpg png (透明)
    webp 同样的清晰度，体积只有1/2 1/3

- 缓存
    1. 服务器端要开启缓存  强缓存
        - 返回资源的同时，Expires 过期时间 HTTP 1.0 setHeader('Expires', 时间)
            本地缓存这个图片的时候，Exipres 写入
        - 再次请求  前端缓存就挡道  有没有缓存
            本地时钟和缓存的Expires 时间比较  强制走缓存  或走后端
        - 本地时钟不正确 Expires 不正确
    2. HTTP 1.1 更新  Cache-Control  相对时间
        maxAge 倒计时 

- 强缓存
    expires  http 1.0
    cache-control max-age

- 缓存过期了怎么办？一定要重新请求吗？
    强缓存过期 但是服务器文件变了或者没变

- 协商缓存
    Last-Modified + If-Modified-Since
    Etag + If-None-Match