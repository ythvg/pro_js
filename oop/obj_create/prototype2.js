// 重写原型对象

function Person() {};

Person.prototype = {
    // constructor: Person,
    name: 'Nicholas', 
    age: 29,
    job: 'Software Engineer',
    sayName: function() {
        console.log(this.name);
    }
}

Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false, 
    value: Person
});

// 原生对象的原型
console.log(typeof Array.prototype.sort);
