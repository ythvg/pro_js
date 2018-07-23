let str = 'Breakfast at 09:00 in the room 123:456.';
let format = str.match(/\b\d\d:\d\d\b/)[0];
console.log(format);

let reg = /\b\d\d[:-]\d\d\b/g;
console.log( "Breakfast at 09:00. Dinner at 21-30".match(reg) )