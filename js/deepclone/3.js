function clone(target) {
    let cloneTarget = {}; // 新的内存
    for (const key in target) {  // 拷贝
        // target[key]类型，简单数据类型，浅
        // 复杂数据类型，引用式，递归
        cloneTarget[key] = target[key];
    }
    return cloneTarget;
};
const obj = {a:1, b: 2, c: 3, d: {e:5}}
const o = clone(obj);
o.b = 3;
obj.b.e = 6;
console.log(obj, o);
