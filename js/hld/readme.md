# 红绿灯
    1. 时间切换
        setTimeout
    2. console.log('红灯')
        保障执行的顺序:
        then

- promise 实例化后会立即执行 传过来的函数，称为executor

1. Promise 类
    class Promise {

    }
2. 传一个executor 函数，并且立即执行
    constructor executor
3. executor 异步任务，提供resolve 或reject的能力
    - resolve this.status pending => fulfilled
    - then Promise 就得添加一个方法
4. 如何封装 resolve 函数
    then 函数，把它存到
    this.onResolvedCallback = cb;
    resolve  this.status = 'fulfilled'
    this.onResolvedCallback(data);