"use strict";

function ask(question, answer, ok, fail) {
  var result = '12345';
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  loginOk: function() {
    console.log( this.login + ' вошёл в сайт' );
  },

  loginFail: function() {
    console.log( this.login + ': ошибка входа' );
  },

  checkPassword: function() {
    ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
  }
};

var vasya = user;
user = null;
vasya.checkPassword();