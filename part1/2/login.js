var login = prompt("Кто пришел?","");
if(login == "Админ"){
    var password = prompt("Пароль?");
    if (password == "Черный Властелин"){
        alert("Добро Пожаловать!");
    } else if (password == null){
        alert("Вход отменен")
    } else {
        alert("Пароль неверен");
    } 
} else if (login == null) {
    alert("Вход отменен");
} else {
    alert("Я вас не знаю");
}