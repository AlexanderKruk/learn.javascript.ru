var date = new Date(2012, 0, 3);  // 3 янв 2012
console.log(getWeekDay(date)); // вторник, выведет 2

function getLocalDay(date){
    var day = [7, 1, 2, 3, 4, 5, 6];
    return day[date.getDay()];
}