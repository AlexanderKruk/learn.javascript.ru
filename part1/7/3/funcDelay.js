function f(x) {
    console.log(x);
}

function delay(func, delay) {
    return function() {
        var self = this;
        var args = arguments;
        setTimeout(function() {
            func.apply(self, args);
        }, delay);
    };
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд