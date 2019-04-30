// до вызова
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
multiplyNumeric(menu);
  

function multiplyNumeric(obj){
    for (var key in obj){
        if(isNumeric(obj[key])){
            obj[key] *= 2;
        }
    }
}

console.log(menu.width);
console.log(menu.height);
console.log(menu.title);


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}