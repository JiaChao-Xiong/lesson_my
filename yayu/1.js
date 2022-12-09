// 1 + 1 = 2 不用再计算
function add(a,b) {
    return a + b;
}

// 假设 memorize 可以实现函数记忆
// memorize 函数 () add ->
var memorizeAdd = memorize(add);
memorizeAdd(1, 1)