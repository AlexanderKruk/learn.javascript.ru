function f(x) {
    return arguments.length ? 1 : 0;  
  }
  
  console.log(f(undefined)); // 1
  console.log(f()); // 0