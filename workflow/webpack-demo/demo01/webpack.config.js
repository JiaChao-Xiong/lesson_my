// node 的模块化 commonjs
console.log('webpack运行了');
module.exports = {
    // 入口
    entry: './main.js',
    output: {
        filename: './bundle.js'
    }
}