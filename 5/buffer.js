function makeBuffer() {
    var text = "";
    return function(value){     
        return value !== undefined ? text += value : text;
    }
};

var buffer = makeBuffer();

buffer(0);
buffer(1);
buffer(0);

console.log(buffer());