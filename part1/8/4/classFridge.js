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
    }

    this.getFood = function() {
        return food.slice();
    }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

console.log( fridge.getFood() );