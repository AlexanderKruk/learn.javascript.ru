function fromUsDate(usDate){
    return usDate.slice(3,5) + '.' + usDate.slice(0,2) + '.' + usDate.slice(6,8);
}


function formatDate(date) { 
    var type = typeof(date);
    var result = "";

    let options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
    };
    
    if (type === 'string'){
        result = date.slice(8,10) + '.' + date.slice(5,7) + '.' + date.slice(2,4);
    } else if ( type === 'number') {
        result = fromUsDate (new Date(date * 1000).toLocaleDateString("ru", options).replace(/[/]/g, '.'));
    } else if ( Array.isArray(date)) {
        date[1]++;
        result = fromUsDate(new Date(date.join()).toLocaleDateString("en-us", options).replace(/[/]/g, '.'));
    } else if ({}.toString.call(date).slice(8, -1) === "Date") {
        result = fromUsDate (date.toLocaleDateString("en-us", options).replace(/[/]/g, '.'));
    }

    return result
}

console.log( formatDate('2011-10-02') ); // 02.10.11
console.log( formatDate(1234567890) ); // 14.02.09
console.log( formatDate([2014, 0, 1]) ); // 01.01.14
console.log( formatDate(new Date(2014, 0, 1)) ); // 01.01.14