function Calculator() {
    var a = 0;
    var b = 0;

    this.read = function(a, b) {
        this.a = a;
        this.b = b;
    }

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }
}

var calculator = new Calculator();
calculator.read(5, 10);

console.log( "Сумма=" + calculator.sum() );
console.log( "Произведение=" + calculator.mul() );