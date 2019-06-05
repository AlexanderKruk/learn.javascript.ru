alert( isInteger(1) ); // true
alert( isInteger(1.5) ); // false
alert( isInteger(-0.5) ); // false


function isInteger(num) {
    if(num == (num ^ 0)) return true;
    return false;
}