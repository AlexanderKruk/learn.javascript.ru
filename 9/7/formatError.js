function FormatError(message) {
    this.name = "Format Error";
    this.message = message;

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);  
    } else {
        this.stack = (new Error()).stack;
    }
}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;

var err = new FormatError("ошибка форматирования");

console.log( err.message ); // ошибка форматирования
console.log( err.name ); // FormatError
console.log( err.stack ); // стек на момент генерации ошибки

console.log( err instanceof SyntaxError ); // true