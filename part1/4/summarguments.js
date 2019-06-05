console.log(sum());
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

function sum(){
    var summ = 0;
    for (var i = 0; i < arguments.length; i++){
        summ += arguments[i];
    }
    return summ;
}