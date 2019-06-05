function Machine(power) {
    this._power = power;
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    console.log(this._enabled);
    console.log(this._power);
}

var coffeeMachine = new CoffeeMachine(10000);