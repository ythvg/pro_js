 // 原型模式
 function Person() {};
 Person.prototype.name = 'Nicholas';
 Person.prototype.age = 29;
 Person.prototype.job = 'Software Engineer';
 Person.prototype.sayName = function() {
     console.log(this.name);
 }
 var person1 = new Person();
 person1.name = 'Jim'
 person1.sayName();
 function hasPrototypeProperty(object, name) {
     return !object.hasOwnProperty(name) && (name in object);
 }
 console.log(hasPrototypeProperty(person1, 'name'));
 // 得到可通过对象访问的、可枚举的属性
 for (var i in person1) {
     console.log(i);
 }
 console.log('---');
 // 返回实例的所有可枚举属性
 console.log(Object.keys(person1));
 // 得到实例所有属性名（包括不可枚举的）
 console.log(Object.getOwnPropertyNames(Person.prototype));
 