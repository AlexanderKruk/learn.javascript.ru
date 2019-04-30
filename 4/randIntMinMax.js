console.log(randMinMax(1,3));

function randMinMax(min,max){
    return Math.floor(Math.random() * (max + 1 - min) + min);
}