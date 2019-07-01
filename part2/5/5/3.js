function CustomSelect(options){
  var elem = options.elem;
  var selectedItem = {value: "..."};
  var allCustomSelect = Array.from(document.querySelectorAll(".customselect"));

  document.addEventListener('click', function(e) {
      e.stopImmediatePropagation();
      closeAllSelect();
      if(e.target.parentNode.classList && (e.target.parentNode.classList.contains('customselect') || e.target.tagName == "LI")){
        e.target.closest('div').classList.toggle('open');
        if(e.target.tagName == 'LI'){
          e.target.parentNode.parentNode.firstElementChild.textContent = e.target.textContent;
          selectedItem = e.target.dataset;
          e.target.closest('div').classList.toggle('open');
        }
  
        var widgetEvent = new CustomEvent("select", {
          bubbles: true,
          detail: getSelected()
        });
        elem.dispatchEvent(widgetEvent);
      } else {
        closeAllSelect();
      }
      function closeAllSelect() {
        allCustomSelect.forEach(function(item){
          if(item.classList.contains('open')){
            item.classList.remove('open');
          }
       })
      }
  })

  function getSelected() {
    return selectedItem;
  }
}