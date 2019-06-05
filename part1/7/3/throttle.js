function throttle(func, delay) {

    var pause = false;
    var args;
    var self;
    return function wrapper() {

        if(pause){
            args = arguments;
            self = this;
            return;
        }

        func.apply(this, arguments);
        pause = true;

        setTimeout(function() {
            pause = false;
            if (args) {
                wrapper.apply(self, args);
                args = null;
                self = null;
            }
        }, delay)
    }
}


var f = function(a) {
    console.log(a)
};

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется