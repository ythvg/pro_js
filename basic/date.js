
var someDate = new Date(Date.parse('May 25, 2004'));
//  等价于 new Date('May 25, 2004');
console.log(someDate);
var y2k = new Date(Date.UTC(2000, 0));
console.log(y2k);
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
console.log(allFives);
// 当前时间戳
console.log(Date.now());
console.log(+new Date());

// 日期格式化方法
var now = new Date();
console.log(now.toString());
console.log(now.toLocaleString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toUTCString());

// 日期/时间组件方法
console.log(now.getTime());
console.log(now.getMilliseconds());
console.log(now.getUTCMilliseconds());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTimezoneOffset());

//东八区快8个小时
console.log(now.toString());
console.log(now.toUTCString());