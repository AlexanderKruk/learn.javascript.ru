var arr = [5, 2, 1, -10, 8];

arr.sort(compareNumeric);
console.log( arr ); // 8, 5, 2, 1, -10

function compareNumeric(a, b){
    return b - a;
}