/**
 * 创建对象
 */

 // 工厂模式
 function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(thisl.anemn);
    }
}
