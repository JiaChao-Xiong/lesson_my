const obj = {a:1, b:2, c:3, e: {f:4}}
// const o = obj; // 赋值 -> 拷贝
// const o = {} // 新的内存
// for (let key in obj) {
//     o[key] = obj[key]
// }
// console.log(o);
// o.a = 2;
// console.log(obj,o);
const o = JSON.parse(JSON.stringify(obj)); // 序列化的过程  深拷贝的最简单使用方式
// console.log(typeof o);\
o.a = 2;
o.e.f = 6
console.log(o,obj);