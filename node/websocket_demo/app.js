const WebSocket = require('ws') // 基于tcp/ip
const http = require('http') // node 内置的
// 在某个端口启动的程序
// ip 定位服务器  :3000 （某个进程） -> 某个程序
const wss = new WebSocket.Server({
    port: 3000
})
wss.on('connection', (ws) => { // ws 当前连接的对象
    ws.on('message', (message) => {
        // console.log(message,'///');
        let msgData = JSON.parse(message)
        console.log(msgData, '***');
        wss.clients.forEach(client => { // 向所有连接的客户端发送消息
            client.send(message)
        })
    })
})

