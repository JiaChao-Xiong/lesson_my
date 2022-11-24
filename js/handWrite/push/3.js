// pop  
// 返回被弹出元素的值
const arr = [1,2,3];
// console.log(arr.pop());
// console.log(arr);
// 变量的类型由值决定
Array.prototype.pop = function() {
    // 拿到最后的元素
    let temp = this[this.length-1];
    this.length--;
    // 返回
    return temp;
}
console.log(arr.pop())
console.log(arr)