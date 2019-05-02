console.log(getSecondsToTomorrow());

function getSecondsToTomorrow(){
    var curDate = new Date();
    return 86400 - (curDate.getHours() * 3600 + curDate.getMinutes() * 60 + curDate.getSeconds());
}