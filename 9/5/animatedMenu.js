function AnimatingMenu(state) {
    Menu.apply(this, arguments);
}
  
AnimatingMenu.prototype = Object.create(Menu.prototype);

AnimatingMenu.STATE_ANIMATING = 2;
  
AnimatingMenu.prototype._stateAsString = function() {
switch (this._state) {
  case AnimatingMenu.STATE_ANIMATING:
    return 'анимация';
  
  default:
    return Menu.prototype._stateAsString.call(this); 
  }
};

AnimatingMenu.prototype.open = function() {
  this._state = AnimatingMenu.STATE_ANIMATING;

  var self = this;
  
  this._timer = setTimeout(function() {
  Menu.prototype.open.apply(self);
  }, 1000);
};

AnimatingMenu.prototype.close = function() {
  clearTimeout(this._timer);
  Menu.prototype.close.apply(this);
};

var menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() {
  menu.showState(); // открыто

  menu.close();
  menu.showState(); // закрыто (закрытие без анимации)
  }, 1000);