// 动态原型模式

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    
    if (typeof this.sayName !== 'function') {
        Person.prototype.sayName = function() {
            console.log(this.name);
        }
    }

}

// 寄生构造函数模式
// 和工厂模式的唯一区别就是使用了new 关键字
function SpecialArray() {
    var values = new Array();
    values.push.apply(values, arguments);
    values.toPipedString = function() {
        return this.join('|');
    };
    return values;
}

var colors = new SpecialArray('red', 'blue', 'green');
console.log(colors.toPipedString());
console.log(colors instanceof SpecialArray);