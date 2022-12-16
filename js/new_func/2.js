// 立即执行函数
// window
(()=>{
     // 不会分配this 给他，
    console.log(this);
})()