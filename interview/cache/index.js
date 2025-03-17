const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer((req, res) => {
    if (path.normalize(decodeURI(req.url)) !== decodeURI(req.url)) {
        res.statusCode = 403;
        res.end();
        return;
    }
    if (req.url == '/') {
        // // 首页 html index.html
        // fs.readFile('./index.html', 'utf-8', (err, data) => {
        //     // node 异步无阻塞
        //     // 默认第一个参数为err
        //     if (err) {
        //         res.end('出错了')
        //         return
        //     }
        //     // console.log(data);
        //     res.end(data)
        // })
        // Async 异步  Sync 同步 阻塞
        // const data = fs.readFileSync('./index.html', 'utf8')
        // console.log(data);
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res)
        return
    }
    // res.end('hello world')
    // console.log(req.url);
    let abs = path.join(__dirname, req.url)
    // 文件或目录信息
    fs.stat(abs, (err, stat) => {
        if (err) {
            res.statusCode = 404
            res.end('Not Found')
            return 
        }
        // linux 文件和文件夹都是fs 一样的，区别是头信息 是否是文件
        if (stat.isFile()) {
            // res.setHeader('Expires', new Date(Date.now() + 200000).toGMTString())
            res.setHeader('Cache-Control', 'max-age=20')
            fs.createReadStream(abs).pipe(res)
        }
    })
    
})

server.listen(3000)