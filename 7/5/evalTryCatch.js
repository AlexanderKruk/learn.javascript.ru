var str = "";
var i = true;

function evalTry() {
    try {
        str = prompt("Введите выражение", "");
        if (isNaN(eval(str))) {
            console.log("OK");
            throw e;
        }
        alert(eval(str));
        return 0;
    } catch (e) {
        alert(`Error ${e.cause} повторите ввод`);
        return 1;
    }
}

while(i) {
 i = evalTry(); 
}

