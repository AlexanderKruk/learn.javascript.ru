var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareObj);

// теперь people: [vovochka, masha, vasya]
console.log(people) // 6

function compareObj(a, b){
    return a.age - b.age;
}