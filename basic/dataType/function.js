// 作为值的函数
var data = [{name: 'Zachary', age: 28}, {name: 'Nicholas', age: 29}];
data.sort(createComparisonFunction('name'));
console.log(data[0].name);

function createComparisonFunction(propertyName) {
    return function(obj1, obj2) {
        var value1 = obj1[propertyName];
        var value2 = obj2[propertyName];
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}

// 函数内部属性
function outer() {
    inner();
}

function inner() {
    // console.log(inner.caller);
    console.log(arguments.callee.caller);
}

outer();

// 函数属性和方法 apply() call() bind
function sum (num1, num2) {
    return num1 + num2;
}
console.log(sum.length);
console.log(sum.toString());
console.log(sum.toLocaleString());
console.log(sum.valueOf());

global.color = 'red';
var o = { color: 'blue' };
function sayColor() {
    console.log(this.color);
}
var objSayColor = sayColor.bind(o);
objSayColor();
