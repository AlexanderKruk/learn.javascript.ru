arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
console.log( arr ); // массив изменился: остались [3, 1]

function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++){
        if(arr[i] < a || arr[i] > b){
            arr.splice(i, 1);
            i--;
        }
    }
}