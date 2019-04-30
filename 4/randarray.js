var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
console.log(arr[rand(0,arr.length-1)]);

function rand(min, max){
    return min + Math.floor(Math.random() * (max + 1 - min));
}