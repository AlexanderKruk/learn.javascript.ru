console.log(getSecondToday())

function getSecondToday(){
    var curDate = new Date();
    return curDate.getHours() * 3600 + curDate.getMinutes() * 60 + curDate.getSeconds();
}