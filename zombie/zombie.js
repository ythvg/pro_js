const Browser = require('zombie');

const browser = new Browser();
browser.visit('https://www.baidu.com', function() {
    console.log(b.html());
    
});