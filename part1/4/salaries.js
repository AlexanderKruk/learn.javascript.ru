"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

console.log(summ(salaries));
console.log(getNameWithBiggestNum(salaries));

function summ(obj){
    var sum = 0;
    for (var key in obj){
        sum += obj[key];    
    }
    return sum
}

function getNameWithBiggestNum(obj){
  var name = "нет сотрудиников"
  var count = 0;
  
  for(var key in obj){
    if(obj[key] > count){
      name = key;
      count = obj[key];
    }
  }
  return name;
}
