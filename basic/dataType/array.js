console.log(Object.prototype.toString.call([]));
console.log(Array.isArray([]));

var colors = ['red', 'blue', 'green'];
console.log(colors.toString());
console.log(colors.valueOf());

console.log(colors.join('||'));

// 转换方法
/*
    toString()  toLocaleString() valueOf()
*/

// 栈方法
/*
    push() pop()
*/

// 队列方法
/*
    push() shift()
*/

// 重排序方法
var values = [0, 5, 1, 15, 10];
values.reverse();
console.log(values);
values.sort();
console.log(values);

function compare(v1, v2) {
    return v1 - v2;
}
values.sort(compare);
console.log(values);

// 操作方法
console.log(colors.concat('yellow', ['black', 'brown']));
console.log(colors.slice(1, 2));

var removed = colors.splice(0, 1); // 删除
console.log(colors);
console.log(removed);

removed = colors.splice(1, 0, 'yellow', 'orange'); // 插入
console.log(colors);
console.log(removed);

removed = colors.splice(1, 1, 'red', 'purple'); // 替换

// 位置方法
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(numbers.indexOf(4));
console.log(numbers.lastIndexOf(4));

// 迭代方法
var everyResult = numbers.every(function(item, index, array) {
    return item > 2;
});
console.log(everyResult);
var someResult = numbers.some(function(item, index, array) {
    return item > 2;
});
console.log(someResult);
var filterResult = numbers.filter(function(item, index, array) {
    return item > 2;
});
console.log(filterResult);
var mapResult = numbers.map(function(item, index, array) {
    return item * 2;
});
console.log(mapResult);
numbers.forEach(function(item, index, array) {
    
});

// 归并方法
values = [1, 2, 3, 4, 5];
var sum  = values.reduce(function(prev, cur, index, array) {
    return prev + cur;
}, 10);
console.log(sum);