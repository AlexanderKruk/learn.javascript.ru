function fibRecursion(n) {
  if(n < 2) return 1;
  return fib(n-1) + fib(n-2);
}

function fibLoop(n) {
  var num1 = num2 = 1, temp = 0;
  for(var i = 2; i < n; i++){
    temp = num2;
    num2 += num1;
    num1 = temp;
    }
  return num2;
}

console.log(fibLoop(77));