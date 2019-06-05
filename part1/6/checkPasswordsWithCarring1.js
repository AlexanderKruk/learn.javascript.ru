"use strict";

function ask(question, answer, ok, fail) {
  var result = '12345';
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  // метод для вызова из ask
  loginDone: function(result) {
    console.log( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
  },

  checkPassword: function() {
    ask("Ваш пароль?", this.password,
      function() {
        this.loginDone(true);
      }.bind(this),
      function() {
        this.loginDone(false);
      }.bind(this)
    );
  }
};

var vasya = user;
user = null;
vasya.checkPassword();