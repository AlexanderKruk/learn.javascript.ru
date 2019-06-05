var calculator = {
    a: 0,
    b: 0,
    read: function(){
        this.a = 5;
        this.b = 10;
    },
    sum: function(){
        return this.a + this.b;
    },
    mul: function() {
        return this.a * this.b;
    }
  }
  
  calculator.read();
  console.log( calculator.sum() );
  console.log( calculator.mul() );