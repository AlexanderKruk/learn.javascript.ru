function CoffeeMachine(power, capacity) {
    
    var waterAmount = 0;
    var timeout = null;
    var WATER_HEAT_CAPACITY = 4200;

    function getBoilTime() {
        return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
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

coffeeMachine.setWaterAmount(450);
console.log(coffeeMachine.getWaterAmount());