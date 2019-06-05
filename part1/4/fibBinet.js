console.log(fib(77));
console.log(fibBinet(77));

function fib(n) {
    var a = 1,
      b = 0,
      x;
    for (i = 0; i < n; i++) {
      x = a + b;
      a = b
      b = x;
    }
    return b;
  }

function fibBinet(n){
    return Math.round(Math.pow((1 + Math.sqrt(5))/2,n)/Math.sqrt(5))
}