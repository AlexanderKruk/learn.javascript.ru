console.log( getLastDayOfMonth(2012, 1) )

function getLastDayOfMonth(year, month){
    var date = new Date(year, month + 1)
    date.setDate(date.getDate() - 1)
    return date.getDate();
}