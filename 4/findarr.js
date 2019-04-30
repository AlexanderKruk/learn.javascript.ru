arr = ["test", 2, 1.5, false];

console.log(find(arr, "test"))
console.log(find(arr, 2))
console.log(find(arr, 1.5))
console.log(find(arr, 0))

function find(arr, value){
    var place = -1;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === value) {
            place = i;
        }
    }
    return place;    
}