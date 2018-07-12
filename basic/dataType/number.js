console.log('max value: ' + Number.MAX_VALUE);
console.log('min value: ' + Number.MIN_VALUE);
var result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(result);
console.log(isFinite(result));
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log('------------');
console.log('NaN == NaN: ' + (NaN == NaN));
console.log('isNaN(NaN): ' + isNaN(NaN));

// 转换为数字
console.log(Number('07'));
console.log(Number('0xf'));
console.log(Number('7dfa'));
console.log(Number(undefined));
console.log(Number(''));

console.log(parseInt('1234blue'));
console.log(parseInt(''));
console.log(parseInt('070', 8));
console.log(parseFloat('das'));
console.log(parseFloat(undefined));

// 包装类型方法
var num = 10;
console.log(num.toString(2));
console.log(num.toString(16));

console.log(num.toFixed(2));
console.log(num.toExponential());
console.log(num.toPrecision(5));