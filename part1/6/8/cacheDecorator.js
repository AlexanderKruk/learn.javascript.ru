function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
    var cashArg = null;
    var result = null; 
    return function(a) {
        if (cashArg === a) {
            return result;
        } else {
            cashArg = a;
            result = f.call(this, a);
            return result;
        }
    }
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log( a == b ); // true (значение закешировано)

b = f(2);
console.log( a == b ); // false, другой аргумент => другое значение