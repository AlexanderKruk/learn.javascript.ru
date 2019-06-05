var d = new Date(2014, 0, 30); // 30 января 2014
console.log(formatDate(d)); // '30.01.14'

function formatDate(date){
    let options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
    };
    return date.toLocaleString('en-us', options).replace(/[/]/g, '.')
}   