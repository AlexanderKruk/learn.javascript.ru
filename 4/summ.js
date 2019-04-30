var num1 = getNum("Введите первое число.");
var num2 = getNum("Введите второе число.");
alert(num1 + num2);

function getNum(text){
    do {
        var num = prompt(text,"");
    } while (!(!isNaN(parseFloat(num)) && isFinite(num)))
    return +num;
}