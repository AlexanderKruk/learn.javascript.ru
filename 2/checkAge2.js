function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
}
var age = prompt("Введите возраст","");
alert(checkAge(age));