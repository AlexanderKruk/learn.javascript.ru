arr = [1, 2, 3, 4, 5];
arr2 = [-2,-1,0,1];
arr3 = [];
console.log(getSums(arr));
console.log(getSums(arr2));
console.log(getSums(arr3));


function getSums(arr) {
    var newArr = [];
    if (!arr.length) return newArr;
    
    newArr.push(arr.reduce(function(sum, current){
        newArr.push(sum);
        return sum + current
    }));
    return newArr;
}
