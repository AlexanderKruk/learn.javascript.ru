var browser = prompt("Введите браузер","");

if (browser == 'IE') {
    alert('O, да у вас IE!');
} else if ( browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari' 
    || browser == 'Opera'){
    alert('Да, и эти браузеры мы поддерживаем');
} else {
    alert('Мы надеемся, что и вашем браузере все ок!');
}