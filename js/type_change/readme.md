- JS 类型知识点
    1. 7个基础数据 + 1个对象
    2. typeof
        instanceof  Object -> null
    3. 基于对象的面向对象? new  
        Constructor + prototype
    4. prototype    继承
    5. 类型转换 隐式 + 显示
    6. 0.1 + 0.2 != 0.3

- 请像学习this的规则一样，学习类型转换的规则
    有法可依 
- JS 弱类型语言，类型转换系统
    字符串
    布尔值
    字符型
    + ! * / === 隐式类型转换
- 由于js神奇的类型转换，建议，在代码里 不要用==
    js 推荐禁用== 使用===

- 显示类型转换
    String()
    Number()
    Boolean()
    类型转换了，但是没有调用以上方法，偷偷地换了，隐式类型转换
- + 小心，类型转换      字符串拼接  数值相加
    x + y
    + 左右两侧，任何一个是字符串，拼接  不是字符串的隐式类型转换为字符串
    如果左右任何一个是对象，这个对象(???)得到字符串，拼接，另一个转换为字符串
    变成数值类型 相加

- String() 强制类型的规则
    简单数据类型，和理解的一样 ''
    复杂数据类型 强制转换成字符串时?    好几个规则，各不相同
    - 对象字面量 [object Object]
    - 数组 ''  [1,2,3] '1,2,3'   [] + {}
        会调用原型链上的toString方法    结果返回

- Number() 强制类型转换的时候
    简单数据类型    Number(undefined)   NaN
        Symbol()  throw error     NaN typeof number

    复杂数据类型 -> Number      ToPrimitive
        复杂数据类型转变成基础数据类型
        1. 会先转换为基础类型   [1,2,3] => '1,2,3'
        valueOf方法 优先
        toString
        2. 再转换为number类型
            Number(简单数据类型 '')
