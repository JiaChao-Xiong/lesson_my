const clone = require('./clone');
// function clone(target) {
//     if (typeof target === 'object') {
//         let cloneTarget = {}; // 解决引用式赋值的问题
//         for (const key in target) {
//             cloneTarget[key] = clone(target[key])
//         }
//         return cloneTarget;
//     } else {
//         return target;
//     }
// }

const target = {
    field1: 1,
    field2: undefined,
    field3: 'ConardLi',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
};

const obj = clone(target);
obj.field4.child2.child2 = 'newchild2';
console.log(obj,target);