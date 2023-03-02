# 前端工程化

- npm init vite  发生了什么?
    使用vite工程化套件完成了项目创建的流程
    - src 是开发目录
        - main.js 入口文件
            - import  es6
    - index.html #root 挂载点
    - serve  3000 index.html 首页

- webpack 
    - npm init -y 
        node 后端项目 工程化依赖后端 不是浏览器端 而是服务器端
    - npm i webpack  webpack5
        企业级的工程化套件
    - webpack.config.js
        配置文件

- npm run build
    启动webpack  webpack --mode=development
- 根目录找webpack.config.js 按配置进行