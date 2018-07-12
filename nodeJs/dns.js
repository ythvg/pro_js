const dns = require('nodeJs/dns');

// 本地host有影响
dns.lookup('www.qq.com', { all: true }, (err, address, family) => {
    console.log('IP address: %j, family: IPv%s', address, family);
});

// 本地host无影响
dns.resolve4('www.qq.com', (err, addresses) => {
    console.log('IP address: ', addresses);
});
