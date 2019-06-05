console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');

function camelize(text){
    var arr = text.split("-");
    for(var i = 1; i < arr.length; i++){
       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join("");
}