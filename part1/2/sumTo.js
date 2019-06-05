function sumToLoop(num){
    var sum = 0;
    for(var i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}

function sumToRecursion(num){
    if(num == 1) return 1;
    return num + sumToRecursion(num - 1); 
}

function sumToProgression(num){
    return ((2 + (num - 1)) / 2) * num;
}


console.log(sumToLoop(100));
console.log(sumToRecursion(100));
console.log(sumToProgression(100));
