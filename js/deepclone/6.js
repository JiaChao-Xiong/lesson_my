// commone.js
const clone = require('./clone');
// import from
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};

const obj = clone(target);
console.log(obj);