function Machine(power) {
    this._power = power;
    this._enabled = false;
  
    var self = this;
  
    this.enable = function() {
      self._enabled = true;
    };
  
    this.disable = function() {
      self._enabled = false;
    };
  }

function Fridge(power) {
    Machine.apply(this, arguments);
    
    var food = [];

    this.addFood = function() {
        if(!this._enabled) {
            throw new Error('Холодильник выключен!');
        }
        if(food.length + arguments.length > power / 100) {
            throw new Error('Нету места')
        }
        food.push(...arguments);
    };

    this.getFood = function() {
        return food.slice();
    };

    this.filterFood = function(func) {
        return food.filter(func);
    };

    this.removeFood = function(item) {
        var searchIndex = food.findIndex(i => i.title === item);
        if(searchIndex != -1) {
            food.splice(searchIndex, 1);
        }
    };
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
console.log( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

dietItems.forEach(function(item) {
    console.log( item.title ); // сок, зелень
    fridge.removeFood(item.title);
});

console.log( fridge.getFood().length );