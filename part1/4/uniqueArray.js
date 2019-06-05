function unique(arr) {
    var temp = arr.slice();
    for (var i = 0; i < temp.length; i++) {
            var found = -1;
            do {
                var found = temp.indexOf(temp[i], i + 1)
                if(found != -1) {
                    temp.splice(found, 1);
                }
            } while (found != -1);
    }
    return temp;
    }
  
var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];
 
console.log(unique(strings));
console.log(strings);