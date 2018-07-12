// 递归

// 递归计算阶乘
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        num * factorial(num - 1);
    }
}

function factorial2(num) {
    if (num <= 1) {
        return 1;
    } else {
        num * arguments.callee(num - 1); // 严格模式不可用
    }
}

// 最好的方法： 命名函数表达式

var factorial = (function f(num) {
    if (num <=1 ) {
        return 1;
    } else {
        num * f(num - 1);
    }
})