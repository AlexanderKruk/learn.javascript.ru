var date = new Date(2012,0,3);  // 3 января 2012
console.log(getWeekDay(date));  // Должно вывести 'вт'

function getWeekDay(date){
    var day = ["вс","пн","вт","ср","чт","пт","сб"];
    return day[date.getDay()];
}