function sumArgs() {
    return [].reduce.call(arguments,function(a, b) { return a + b;});
  }
  
 console.log( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива