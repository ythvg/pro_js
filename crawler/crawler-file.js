var Crawler = require("crawler");
var fs = require('fs');

var c = new Crawler({
    encoding:null,
    jQuery:false,// set false to suppress warning message.
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'
    },
    callback:function(err, res, done){
        if(err){
            console.error(err.stack);
        }else{
            fs.createWriteStream(res.options.filename).write(res.body);
        }
        
        done();
    }
});

c.queue({
    uri:"https://avatars3.githubusercontent.com/u/17926906?s=400&u=79c3b9d459c5f471b545c743dfec2509e0085628&v=4",
    filename:"avator.png"
});