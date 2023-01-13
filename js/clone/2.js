let obj = {
    a: 1,
    b: 'hello',
    c: function() {
        console.log('------');
    }
}

console.log(JSON.parse(JSON.stringify(obj)));