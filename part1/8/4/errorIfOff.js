function Machine(power) {
    this._power = power;
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };

    this.run
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    this.run = function() {
        if(!this._enabled){
            throw new Error("Ошибка, кофеварка выключена");
        }
        console.log("Кофе готов!");
    }
}

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.run(); // ошибка, кофеварка выключена!

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();