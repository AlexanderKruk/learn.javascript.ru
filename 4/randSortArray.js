var arr = [1, 2, 3, 4, 5];

arr.sort(function() {
    return Math.random() - 0.5;
  });

console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
