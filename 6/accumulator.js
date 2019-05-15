function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function(a) {
        this.value += a;
    }
}

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(5); // прибавит ввод prompt к текущему значению
accumulator.read(10); // прибавит ввод prompt к текущему значению
console.log( accumulator.value ); // выведет текущее значение