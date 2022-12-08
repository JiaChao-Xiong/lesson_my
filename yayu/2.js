function add(a,b) {
    return a + b;
}
// fn 是等待着被优化的函数
// 闭包 函数内部还有函数
function memorize(f) {
    // 缓存结果 {} key
    // 
    // console.log(fn, args);
    var cache = {
        // key 字符串
        // "lu": "抖音"
    };
    return function() {
        // console.log("我是inner function", cache.lu);
        // console.log( Array.prototype.join.call(arguments, ","),'///')
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        console.log(key);
        if (key in cache) { // in json 运算符
            console.log('缓存了');
            return cache[key] //没有运行 f
        }else {
            console.log("add...");
            // cache[key] = f(arguments);
            // apply call 都可以运行函数，手动指定this
            // apply 数组集合，作为f 的参数  0.
            return cache[key] = f.apply(this, arguments);
            // cache[key] = f.call(this, ...arguments)
        }
        // else return cache[key] = f.apply(this, arguments)
    }
}
// 函数运行完后就就销毁
// 函数进入执行栈 创建函数作用域
var memorizeAdd = memorize(add)  // 运行才会生成闭包函数
// 出栈 ? 内存的回收 cache 没有了 但却没有， cache 被接下来的函数引用着
memorizeAdd(1, 2); // 运行时可以找到生成时上下文环境中的变量
memorizeAdd(1, 2);