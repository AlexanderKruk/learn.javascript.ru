function CoffeeMachine(power, capacity) {
    
    var waterAmount = 0;
    var timeout = null;
    var WATER_HEAT_CAPACITY = 4200;

    function getBoilTime() {
        return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.waterAmount = function(amount) {
        
        if (!arguments.length) return waterAmount;
        
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.stop = function() {
        clearTimeout(timeout);
    }

    function onReady() {
        console.log('Кофе готов!');
    }

    this.run = function() {
        timeout = setTimeout(onReady, getBoilTime());
    };
};

var coffeeMachine = new CoffeeMachine(1000, 500);

coffeeMachine.waterAmount(450);
console.log(coffeeMachine.waterAmount());

