let str = 'Breakfast at 09:00 in the room 123:456.';
let format = str.match(/\b\d\d:\d\d\b/)[0];
console.log(format);

console.log( "Breakfast at 09:00. Dinner at 21-30".match(/\b\d\d[:-]\d\d\b/g) )

console.log( "Hello!... How goes?.....".match(/\.{3,}/g) );

console.log("color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678".match(/#[A-Fa-f0-9]{6}/g));

console.log("123 456".match(/\d+? \d+?/g));

console.log(`... <!-- My -- comment
 test --> ..  <!----> ..`.match(/<!--[\s\S]*?-->/g));

console.log('<> <a href="/"> <input type="radio" checked> <b>'.match(/<[^<>]+>/g));

// capture group
console.log('Gogogo now!'.match(/(go)+/i));
console.log('Gogogo now!'.match(/(go)+?/ig));
console.log('<h1>Hello, world!</h1>'.match(/<(.*?)>/));
console.log("color: #3f3; background-color: #AA00ef; and: #abcd".match(/#([0-9a-f]{3}){1,2}/ig));
console.log("1.5 0 12. 123.4.".match(/\d+(\.\d+)*/g));

// find all numbers
console.log("-1.5 0 2 -123.4.".match(/-?\d+(\.\d+)*/g));
