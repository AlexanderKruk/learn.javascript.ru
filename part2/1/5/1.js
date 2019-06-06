// Все элементы label внутри таблицы. Должно быть 3 элемента.
table = document.querySelector('table');
table.querySelectorAll('label');

//Первую ячейку таблицы (со словом "Возраст").
table.rows[0].cells[0]

//Вторую форму в документе.
document.querySelectorAll('form')[1]

//Форму с именем search, без использования её позиции в документе.
document.querySelectorAll('form [name=search]');

//Элемент input в форме с именем search. Если их несколько, то нужен первый.
document.querySelector('form [name=search]')

// Элемент с именем info[0], без точного знания его позиции в документе.
document.getElementsByName('info[0]');

// Элемент с именем info[0], внутри формы с именем search-person.
document.querySelector('form[name="search-person"] [name="info[0]"]');
