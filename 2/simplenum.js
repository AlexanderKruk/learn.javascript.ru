var numbers = "";
first: for(var i = 2; i <= 50; i++){
    for(var j = 2; j < i - 1; j++){
        if(i != j && i % j == 0) continue first;
    }
    numbers += i + ", ";
}
alert(numbers);