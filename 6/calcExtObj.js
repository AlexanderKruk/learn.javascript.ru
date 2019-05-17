function Calculator() {
    
    var methods = {
        "-": function(a, b){
            return a - b;
        },
        "+": function(a, b){
            return a + b
        }
    }

    this.calculate = function(str) {
        var arr = str.split(' ');
        var a = +arr[0];
        var opp = arr[1]
        var b = +arr[2];

        if (!methods[opp] || isNaN(a) || isNaN(b)){
            return NaN
        }
        
        return methods[opp](a, b);
    }

    this.addMethod = function(opp, func){
        methods[opp] = func;
    }
}

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("6 / 3");
console.log( result ); // 8