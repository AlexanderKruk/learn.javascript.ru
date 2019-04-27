function pow(num,power){
    var result = 1;
    for (var i = 0; i < power; i++){
        result *= num;
    }
    return result;
}

var num = prompt("Enter num","");
do {
    var power = prompt("Enter power","");
} while(power < 0)
alert(pow(num,power));