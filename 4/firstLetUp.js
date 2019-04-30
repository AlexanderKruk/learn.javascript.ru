function ucFirst(text){
    if(text == "") return "";
    return text[0].toUpperCase() + text.slice(1)  
  }
console.log(ucFirst('вася'));