// 模块模式

var appliction = function() {

    var components = new Array();

    function BaseComponent() { };

    components.push(new BaseComponent());

    return {
        getComponentCount: function() {
            return components.length;
        },
        registerComponent: function(component) {
            if (typeof component === 'object') {
                components.push(component);
            }
        }
    };
}();
