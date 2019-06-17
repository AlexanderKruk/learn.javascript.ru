let avatar = document.querySelector("#avatar");
let avatarFixed = document.querySelector("#avatarFixed")

window.onscroll = function() {
  let coords = avatar.getClientRects();
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  avatarFixed.style.visibility = coords[0].bottom + window.pageYOffset < scrolled ? "visible" : "hidden";
}