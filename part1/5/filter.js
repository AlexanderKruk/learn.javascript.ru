function filter(arr, func){
    var result = [];
    arr.forEach((item) => {
        if (func(item)) {
            result.push(item);
        }
    });
    return result;
}

function inBetween(a, b){
    return function(x) {
        return x >= a && x <= b;
    };
}

function inArray(array) {
    return function(x) {
        return array.indexOf(x) != -1 ? true : false;
    }
}

/* .. ваш код для filter, inBetween, inArray */
var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2