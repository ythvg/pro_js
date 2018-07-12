global.name = 'The global';

var object = {
    name: 'My Object',
    getNameFunc: function() {
        var that = this;
        return function() {
            // return this.name;
            return that.name;
        }
    }
}

console.log(object.getNameFunc()());
