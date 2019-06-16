document.onmousedown = function(e) {
  var object = e.target;
  var width = document.body.clientWidth;
  var height = document.body.clientHeight;
  console.log(width);
  if(object.classList.contains("draggable")) {
    var coords = getCoords(object);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    console.log(coords);
  
    object.style.position = 'absolute';
    document.body.appendChild(object);
    moveAt(e);
  
    function moveAt(e){
      if (e.pageX - shiftX < coords.width / 2) {
        object.style.left = '0px';
      } else if (e.pageX - shiftX > width - coords.width) {
        object.style.left = width - coords.width;
      } else {
        object.style.left = e.pageX - shiftX + 'px';
      }
      if(e.pageY - shiftX < coords.height / 2){
        object.style.top = '0px'
      } else if (e.pageY - shiftY > height - coords.height) {
        object.style.top = height - coords.height / 2 + 'px';
      } else {
        object.style.top = e.pageY -shiftY + 'px';
      }
      object.scrollIntoView(top);
    }
  
    document.onmousemove = function(e) {
      moveAt(e);
    };
  
    document.onmouseup = function() {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }
  
  object.ondragstart = function() {
    return false;
  };
  
  function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset,
      height: box.height,
      width: box.width
    };
  }
}

