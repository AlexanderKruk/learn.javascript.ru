var obj = {
    className: 'open menu'
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

console.log( obj.className ); // "open menu new me"

function addClass(obj, name){
    var arr = obj.className ? obj.className.split(' ') : [];
    if(arr.indexOf(name) == -1) {
        arr.push(name)
    }
    obj.className = arr.join(' ');
}