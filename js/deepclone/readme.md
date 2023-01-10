- 当对象是数组的时候，可以使用slice(0),或者concat()
    实现拷贝是可行的  浅拷贝
    deepClone
- {} for key   拷贝
- 深维 没那么简单
    JSON.parse(JSON.stringify()) 比较简单 能实现的深拷贝
- 也有些缺点，回到拷贝的根上去