var date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 января 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 января 2014)

function getDateAgo(date, days){
    var newDate = new Date(date);
    newDate.setDate(date.getDate() - days)
    return newDate.getDate();
}