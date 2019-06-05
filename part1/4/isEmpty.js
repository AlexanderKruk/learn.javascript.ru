function isEmpty(obj) {
    var count = 0;
    for (var key in obj){
        count++;
    }
    return !count;
}
  
  var schedule = {};
  
  console.log( isEmpty(schedule) );
  
  schedule["8:30"] = "подъём";
  
  console.log( isEmpty(schedule) );