function CoffeeMachine(power) {
    
    this.waterAmount = 0;
    
    var timeout = null;
    var WATER_HEAT_CAPACITY = 4200;

    function getBoilTime() {
        return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

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

var coffeeMachine = new CoffeeMachine(100);

coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop();