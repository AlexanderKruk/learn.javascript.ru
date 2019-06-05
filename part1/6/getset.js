function User(fullName) {
    this.fullName = fullName;

    Object.defineProperty(this, "firstName", {
        get: function() {
            split = this.fullName.split(' ');
            return split[0]
        },

        set: function(value) {
            split = this.fullName.split(' ');
            split[0] = value;
            this.fullName = split.join(' ');
        }
    })

    Object.defineProperty(this, "lastName", {
        get: function() {
            split = this.fullName.split(' ');
            return split[1]
        },

        set: function(value) {
            split = this.fullName.split(' ');
            split[1] = value;
            this.fullName = split.join(' ');
        }
    })
  }
  
var vasya = new User("Василий Попкин");
console.log(vasya.firstName);
vasya.lastName = 'Сидоров';
console.log(vasya.fullName);
