function makeBuffer() {
    
    var text = "";

    function buffer(value){     
        return value !== undefined ? text += value : text;
    }

    buffer.clear = function() {
        text = "";
    }

    return buffer;
};

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не сьест");
console.log(buffer());
buffer.clear();
console.log(buffer());