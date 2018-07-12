console.log('\x41');
console.log(parseInt(0x41));
console.log('\u03a3');
console.log('\u03a3'.length);
console.log('方'.length);
var num = 10;

// 转换为字符串
console.log(num.toString());
console.log(true.toString());
console.log(num.toString(2));
console.log(num.toString(16));

console.log(String(null));;
console.log(String(undefined));;

// 包装类型方法
// 字符方法
var stringValue = 'hello world';
console.log(stringValue.charAt(1));
console.log(stringValue.charCodeAt(1));
console.log(stringValue[1]);

// 字符串操作方法
console.log(stringValue.slice(3, 7));
console.log(stringValue.substring(3, 7));
console.log(stringValue.substr(3, 7));

// 字符串位置方法 indexOf() lastIndexOf()
var stringValue = 'Lorem ipsum dolor ist amet, consectetur adipisicing elit';
var positions = new Array();
var pos = stringValue.indexOf('e');

while (pos > -1) {
    positions.push(pos);
    pos = stringValue.indexOf('e', pos + 1);
}
console.log(positions);

// trim() 方法
// 字符串大小写转转方法 toLowerCase() toUpperCase()

// 字符串的模式匹配方法
var text = 'cat, bat, sat, fat';
var pattern = /.at/;
var matches = text.match(pattern);
console.log(matches[0]);
console.log(matches.index);
console.log(pattern.lastIndex);

console.log(text.search(/at/));

var result = text.replace('at', 'ond');
console.log(result);
result = text.replace(/at/g, 'ond');
console.log(result);

result = text.replace(/(.at)/g, 'word ($1)');
console.log(result);

function htmlEscape(text) {
    return text.replace(/[<>"&]/g, function(match, pos, originalText) {
        switch (match) {
            case '<': 
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp';
            case '"':
                return '$quot;';
        }
    });
}
console.log(htmlEscape('<p class="greeting"> Hello world! </p>'));

var colorText = 'red, blue, green, yellow';
console.log(colorText.split(','));
console.log(colorText.split(',', 2));
console.log(colorText.split(/[^\,]+/));

console.log(String.fromCharCode(104, 101, 108, 108, 111));