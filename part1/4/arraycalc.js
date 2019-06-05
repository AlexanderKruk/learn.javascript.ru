var numArr = [];
var sum = 0;
do {
    var currNum = prompt("Введите число","0");
    numArr.push(+currNum);
} while(!(currNum === "" || isNaN(currNum) || currNum === null))

for (var i = 0; i < numArr.length; i++){
    sum += numArr[i];
}

alert(sum);