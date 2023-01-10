var arr = [1, [2, [3, 4]], 5];

function flatten(arr) {
    return arr.toString().split(',').map(item => +item) 
}

console.log(flatten(arr));