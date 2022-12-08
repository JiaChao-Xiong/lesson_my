function a() {
    let c = 1;
    return function b() {

    }
}

const funcB = a();
funcB(); // 运行时可以找到定义时上下文环境的变量