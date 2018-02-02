/**
 * 面向对象的程序设计
 */

// 数据属性
var person = {};
Object.defineProperty(person, 'name', {
    writable: false,
    value: 'Jim'
});
person.name = 'Greg';
console.log(person.name);

Object.defineProperty(person, 'age', {
    configurable: false,
    value: 24
});
delete person.age;
delete person.name;
console.log(person.name);
console.log(person.age);

// 访问器属性
var book = {
    _year: 2004,
    edition: 1
};
Object.defineProperty(book, 'year', {
    get: function() {
        return this._year;
    },
    set: function(newValue) {
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});
book.year = 2005;
console.log(book.edition);
console.log(book);

// 定义多个属性
var book1 = {};
Object.defineProperties(book1, {
    _year: {
        writable: true,
        value: 2004
    },
    edition: {
        writable: true,
        value: 1
    },
    year: {
        get: function() {
            return this._year;
        },
        set: function(newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});

// 读取数据的属性
var descriptor = Object.getOwnPropertyDescriptor(book1, '_year');
console.log(descriptor);
descriptor = Object.getOwnPropertyDescriptor(book1, 'year');
console.log(descriptor);
