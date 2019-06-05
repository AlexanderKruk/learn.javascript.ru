function debounce(func, delay) {
    var prev = null;
    return function () {
        var self = this;
        var args = arguments;
        if(prev) {
            clearTimeout(prev);
        }
        prev = setTimeout(function() {
            func.apply(self, args)
        }, delay)
    }
}

function f(x) {
    console.log(x)
}

let f1 = debounce(f, 1000);

f1(1); // вызов отложен на 1000 мс
f1(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// через 1 секунду будет выполнен вызов f(1)
