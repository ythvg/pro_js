// 组合使用构造函数模式和原型模式

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['Shelby', 'Court'];
}

Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log(this.name);
    }
}