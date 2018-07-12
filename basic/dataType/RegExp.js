// RegExp实例属性
var pattern1 = /\[bc\]at/i;

console.log(pattern1.global);
console.log(pattern1.ignoreCase);
console.log(pattern1.lastIndex);
console.log(pattern1.multiline);
console.log(pattern1.source);

// RegExp实例方法
var text = 'mom and dad and baby';
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);
console.log(matches.index);
console.log(matches.input);
console.log(matches);

var text = 'cat, bat, sat, fat';
var pattern1 = /.at/;
var matches = pattern1.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern1.lastIndex);

matches = pattern1.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern1.lastIndex);

var pattern2 = /.at/g
var matches = pattern2.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern2.lastIndex);

matches = pattern2.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern2.lastIndex);

var text = '000-00-0000';
var pattern = /\d{3}-\d{2}-\d{4}/;
if (pattern.test(text)) {
    console.log('The pattern was matched');
}


// RegExp的构造函数属性
var text = 'this has been a short summer';
var pattern = /(.)hort/g;

if (pattern.test(text)) {
    console.log(RegExp.input);
    console.log(RegExp.leftContext);
    console.log(RegExp.rightContext);
    console.log(RegExp.lastMatch);
    console.log(RegExp.lastParen);
}