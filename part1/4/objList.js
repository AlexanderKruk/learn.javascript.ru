var list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

printListIteracition(list);
printListRecursion(list);
printListRecursionRevert(list);
printListIterationRevert(list);

function printListIteration(list){
      var tmp = list;
      while(tmp.next != null){
          console.log(tmp.value);
          tmp = tmp.next;
      }
      console.log(tmp.value);
  }

function printListRecursion(list){
      if (list.next == null) return console.log(list.value);
      console.log(list.value);
      printListRecursion(list.next);
  } 

function printListRecursionRevert(list){
    if (list.next == null) return console.log(list.value);
    printListRecursionRevert(list.next);
    console.log(list.value);
}

function printListIterationRevert(list) {
    var arr = [];
    var i = 0;
    while(list.next != null){
        arr[i] = list.value;
        i++;
        list = list.next;
    }
    arr[i] = list.value;
    arr.reverse();
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}