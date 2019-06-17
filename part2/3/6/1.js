var elem = document.querySelector("#text");

if (elem.addEventListener) {
  if ('onwheel' in document) {
    // IE9+, FF17+, Ch31+
    elem.addEventListener("wheel", onWheel);
  } else if ('onmousewheel' in document) {
    // устаревший вариант события
    elem.addEventListener("mousewheel", onWheel);
  } else {
    // Firefox < 17
    elem.addEventListener("MozMousePixelScroll", onWheel);
  }
} else { // IE8-
  elem.attachEvent("onmousewheel", onWheel);
}

var scale = 1;

function onWheel(e) {
  scale  += e.deltaY > 0 ? 0.1 : -0.1
  elem.style.transform = elem.style.WebkitTransform = elem.style.MsTransform = `scale(${scale})`; 
}