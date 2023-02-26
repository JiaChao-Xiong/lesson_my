function sum(a, b) {
    let args = Array.prototype.concat.apply([], arguments);
    // reduce  pre + cur
    // return 
    // const result = 0;
    // for (let item of args) {
    //     result += item
    // }
    // return result 
    // 数组变成一个值
    return args.reduce((sum, cur) => sum + cur, 0)
}
console.log(sum(7, 8))