var table = document.getElementById('bagua-table');
var tdEdit = false;
var tempTdInnerHtml;

table.onclick = function(e) {
  var td = e.target.closest('td');
  if(td && !td.classList.contains('edit-td') && !tdEdit){
    td.classList.add('edit-td');
    tdEdit = true;

    var textarea = document.createElement('textarea');
    var editControls = document.createElement('div');
    var buttonOk = document.createElement('button');
    var buttonCancel = document.createElement('button');

    editControls.classList.add('edit-controls');
    buttonOk.classList.add('button-ok');
    buttonCancel.classList.add('button-cancel');

    buttonOk.textContent = "OK";
    buttonCancel.textContent = "Cancel";

    editControls.appendChild(buttonOk);
    editControls.appendChild(buttonCancel);

    textarea.style.width = td.offsetWidth + 'px';
    textarea.style.height = td.offsetHeight + 'px';

    textarea.value = tempTdInnerHtml = td.innerHTML;
    textarea.classList.add('edit-area');
    while (td.firstChild) {
      td.removeChild(td.firstChild);
    }
    td.appendChild(textarea);
    td.appendChild(editControls);

    editControls.addEventListener('click', clickButtons);

    function clickButtons(e) {
      if(e.target.textContent == 'OK'){
        tdEdit = false;
        td.innerHTML = textarea.value;
        td.classList.remove('edit-td');
      } else if (e.target.textContent == 'Cancel') {
        tdEdit = false;
        td.innerHTML = tempTdInnerHtml;
        td.classList.remove('edit-td');
      }
    }
  }

}