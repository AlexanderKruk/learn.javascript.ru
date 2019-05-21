function User() {
    var firstName = "";
    var surname = "";

    this.setFirstName = function(value) {
        firstName = value;
    };

    this.setSurname = function(value) {
        surname = value;
    }

    this.getFullName = function() {
        return `${firstName} ${surname}`;
    }
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

console.log(user.getFullName());