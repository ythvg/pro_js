function Person(name) {
    this.getName = function() {
        return name;
    };
    this.setName = function(value) {
        name = value;
    } 
}

var person = new Person('Jim');
console.log(person.getName());
person.setName('Greg');
console.log(person.getName());
