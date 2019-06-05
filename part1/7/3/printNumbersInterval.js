function printNumberInterval() {
    var i = 0;

    var timerId = setInterval(function() { 
        console.log(++i);
        if (i == 20) {
            clearInterval(timerId);
        } 
    }, 100);
}

printNumberInterval();