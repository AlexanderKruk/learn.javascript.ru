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

    var oldDisable = this.disable;

    this.disable = function() {
        if(food.length > 0) {
            throw new Error("Ошибка в холодильнике есть еда");
        }
        oldDisable.apply(this);
    }

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
fridge.addFood("кус-кус");
fridge.disable();