console.log(randMinMax(6,7));

function randMinMax(min,max){
    return Math.random() * (max - min) + min;
}