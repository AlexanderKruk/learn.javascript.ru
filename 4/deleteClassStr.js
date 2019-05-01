var obj = {
    className: 'open menu'
};

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)

function removeClass(obj, str){
    var classNameStr = obj.className;
    var classNameArr = classNameStr.split(' ');
    do {
        var pos = classNameArr.indexOf(str);
        if (pos != -1){
            classNameArr.splice(pos, 1);
        }
    } while (pos != -1 )
    obj.className = classNameArr.join(" ");
}
