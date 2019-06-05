function f(a, b) {
    console.log( a + b );
}

Function.prototype.defer = function(ms) {
    var f = this;
    return function () {
        var arg = arguments;
        var context = this;
        setTimeout(function() {
            f.apply(context, arg)
        }, ms);
    }
}

f.defer(1000)(1, 2);

