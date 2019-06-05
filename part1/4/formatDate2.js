function formatDate(date) { /* ваш код */ }

console.log( formatDate(new Date(new Date - 1)) ); // "только что"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"


function formatDate(date){
    var curDate = new Date();
    let options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    var diff = Math.round((curDate - date) / 1000);
    if (diff < 1) {
        return "только что";
    } else if (diff < 60) {
        return diff + " сек. назад";
    } else if (diff < 3600) {
        return diff / 60 + " мин. назад";
    } else {
        return date.toLocaleString('en-us', options).replace(/[/]/g, '.').replace(/[,]/g, '');
    }
}