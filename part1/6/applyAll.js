function applyAll() {
    arr = [].slice.call(arguments);
    func = arr.shift();
    return func.apply(this, arr);
}

console.log(applyAll(Math.max, 2, -2, 3));