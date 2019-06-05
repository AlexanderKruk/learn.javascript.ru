function printNumberInterval() {
    var i = 0
    setTimeout(function iter() {
        console.log(++i); 
        if (i == 20) return;
        setTimeout(iter, 100);
    }, 100);
}

printNumberInterval();