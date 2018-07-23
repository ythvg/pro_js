
const promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('done'), 1000);
});

setTimeout(() => {
    console.log('init: state', promise.state);
    console.log('init: result', promise.result);
});

promise.then((res) => {
    console.log('end: state', this.state);
    console.log('end: result', this.result);
    console.log('end: res', res);
})
