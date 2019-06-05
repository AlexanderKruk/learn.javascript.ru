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
    var self = this;
    ask("Ваш пароль?", this.password,
      function() {
        self.loginDone(true);
      },
      function() {
        self.loginDone(false);
      }
    );
  }
};

var vasya = user;
user = null;
vasya.checkPassword();