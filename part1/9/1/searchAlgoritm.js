var head = {
    glasses: 1
};
  
var table = {
    pen: 3
};
  
var bed = {
    sheet: 1,
    pillow: 2
};
  
var pockets = {
    money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

var data;

var now = perfomance.now();
for (var i = 0; i < 1000000; i++){
    data = pockets.glasses;  
}
console.log(perfomance.now() - now);

var now = Date.now();
for (var i = 0; i < 1000000; i++){
    data = head.glasses;  
}
console.log(Date.now() - now);