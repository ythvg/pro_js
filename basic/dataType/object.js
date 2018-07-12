var o = new Object();
o.name = 'jim';
console.log(o.__proto__.isPrototypeOf(o));
console.log(o.constructor);
console.log(o.hasOwnProperty('name'));
console.log(o.propertyIsEnumerable('name'));

// valueOf() toString() 区别
console.log((2).valueOf() === 2);
console.log((2).toString() === 2);
console.log(true.valueOf() === true);
console.log(true.toString() === true);

var d = new Date();
console.log(d.valueOf());
console.log(d.toString());
console.log(d.toLocaleString());

// 使用对象字面量封装多个可选参数
function displayInfo(args) {
    var output = '';
    if (typeof args.name === 'string') {
        output += 'Name: ' + args.name + '\n';
    }
    if (typeof args.age === 'number') {
        output += 'Age: ' + args.age + '\n';
    }
    console.log(output);
}
displayInfo({
    name: 'jim',
    age: 22
});
