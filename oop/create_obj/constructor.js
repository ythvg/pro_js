 // 构造函数模式
 function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    }
}
var person1 = new Person('Jim', 24, 'developer');
console.log(person1.constructor === Person);
console.log(person1 instanceof Person);
