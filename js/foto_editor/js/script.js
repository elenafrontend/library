
/*5.  фильтр ещё не выбран и к фото не применён

Сначала включим фильтр toaster и применим его к фотографии. Для этого:

- находим кнопку с классом toaster и добавляем к ней класс active

var control = document.querySelector('button.toaster');

if (control) {
	control.classList.add('active');
} 

- применяем фильтр к фото - объявляем переменную и добавляем класс фильтра

var photo = document.querySelector('.photo');

if (photo) {
	photo.classList.add('toaster');
}*/


/*6. На предыдущем шаге мы «включили» фильтр toaster из исходного состояния, а сейчас переключим его на walden

- убираем класс active у button.toaster

var toasterControl = document.querySelector('button.toaster');

if (toasterControl) {
	toasterControl.classList.remove('active');
} 

var photo = document.querySelector('.photo');

- найдем кнопку walden, сделаем активной

var waldenControl = document.querySelector('button.walden');

if (waldenControl) {
	waldenControl.classList.add('active');
}

- убираем toaster у .photo и добавляем активный фильтр к фото

if (photo) {
	photo.classList.remove('toaster');
	photo.classList.add('walden');
}*/


/*9. немного улучшим наш код

в данном коде имя класса (toaster) повторяется 2 раза и при необходимости замены, менять надо будем в 2 местах!
var control = document.querySelector('button.toaster');
photo.classList.add('toaster');

- поэтому введем для этого класса переменную:

var filterName = 'toaster';

и заменим toaster в коде:

var control = document.querySelector('button.' + filterName);
if (control) {
  control.classList.add('active');
}

var photo = document.querySelector('.photo');
if (photo) {
  photo.classList.add(filterName);
}*/


/*10. Продолжим улучшать наш JavaScript. Теперь упакуем весь код, отвечающий за переключение фильтров, в функцию

function toggleFilter(filterName) {

	var control = document.querySelector('button.' + filterName);
	if (control) {
	  control.classList.add('active');
	}

	var photo = document.querySelector('.photo');
	if (photo) {
	  photo.classList.add(filterName);
	}
}

toggleFilter('walden');*/


/*11. Проблема: если вызвать созданную функцию несколько раз подряд с разными параметрами:

toggleFilter('toaster');
toggleFilter('kelvin');

То активными станут сразу несколько переключателей, а к фотографии применятся несколько фильтров одновременно.*/


/*12.-14. название фильтра мы можем хранить в data-атрибуте тега

- добавим data-атрибуты data-filter кнопкам и удалим текст внутри кнопок

<button class="walden" type="button" data-filter="walden"></button>

- найдем все кнопки 
var controls = document.querySelectorAll ('.toggle-controls button')

- у каждой из них через цикл (перебирая каждую) считаем значение data-атрибута и добавим значение в содержимое с помощью свойства innerHTML

for (var i = 0; i < controls.length; i++) {
	controls[i].innerHTML=controls[i].dataset.filter;
}*/


/*15.-16. исправляем проблему 11. 

- чтобы сделать неактивными нажатые ранее фильтры удаляем добавленные ранее классы перед добавлением нового
- удаляем все добавленные классы к фото, при этом объявление переменной photo необходимо перенести выше, поэтому 
выносим ее из функции наверх кода, таким образом ускоряя скрипт, чтобы не было поиска элемента .photo при каждом 
переключении фильтра

var controls = document.querySelectorAll('.toggle-controls button');
var photo = document.querySelector('.photo');

for (var i = 0; i < controls.length; i++) {
	controls[i].innerHTML=controls[i].dataset.filter;
}

function toggleFilter(filterName) {

	добавляем цикл, который пройдется по всем buttons и уберет у них класс active
	 
	for (var j = 0; j < controls.length; j++) {
		controls[j].classList.remove('active');
		в том же цикле, где сбрасывается класс active, можно у каждого переключателя брать название фильтра и 
	удалять этот класс у большого фото:
		photo.classList.remove(controls[j].dataset.filter);
	}

	var control = document.querySelector('button.' + filterName);
	if (control) {
	  control.classList.add('active');
	}
	
	if (photo) {
	  photo.classList.add(filterName);
	}
}

toggleFilter('toaster');
toggleFilter('kelvin');
toggleFilter('walden');
*/

/*17. теперь надо добавить возможность пользователю самому выбирать фильтр, кликая на него
	для этого добавляем метод addEventListener, который отслеживает события на стр и обрабатывает их

	button.addEventListener('click', function() {
		toggleFilter('button.dataset.filter');
	})

	Метод addEventListener был вызван у одного элемента, поэтому будут обрабатываться события только 
	этого элемента. Первый параметр задаёт тип события, второй — функцию-обработчик:
	- по клику на кнопку будет вызываться функция-обработчик без названия, которая вызывает функцию переключения
	фильтров*/

/*18. Мы добавили обработку клика для одного переключателя
	для того, чтобы добавить метод всем переключателям используем цикл

- создадим новую функцию на базe addEventListener, которая для найденного элемента будет добавлять ему
обработчик кликов мыши, в котором вызывается функция переключения фильтра

function clickControl(control) {
	control.addEventListener ('click', function() {
		toggleFilter(control.dataset.filter);
	})
}

- и чтобы добавить эту функцию щелчка всем кнопкам используем уже существующий выше цикл для всех контролов:*/

/*19. мы можем улучшить код: 
	в качестве параметра функции toggleFilter используется название фильтра, по которому
	каждый раз происходит поиск переключателя 
	- заменяем просто на control - те передаем сам элемент
	и теперь объявлять переменную control в самой функции toggleFilter уже не имеет смысла, тк мы передали 
	элемент через параметр control
	- и в photo заменяем filterName на control.dataset.filter*/

var controls = document.querySelectorAll('.toggle-controls button');
var photo = document.querySelector('.photo');

for (var i = 0; i < controls.length; i++) {
	controls[i].innerHTML=controls[i].dataset.filter;
	// вставляем функцию для клика сюда
	clickControl(controls[i]);
	// control = controls[i] т.е. как бы объявляем переменную - в данном случае параметром для функции будет элемент
}

function toggleFilter(control) {
	// мы сразу передали элемент

	for (var j = 0; j < controls.length; j++) {
		controls[j].classList.remove('active');
		photo.classList.remove(controls[j].dataset.filter);
	}

	// поэтому можем удалить его поиск внутри функции и сразу добавить класс
	// var control = document.querySelector('button.' + filterName);
	// if (control) {
	  control.classList.add('active');
	// }
	
	if (photo) {
	  photo.classList.add(control.dataset.filter);
	}
}

function clickControl(control) {
	control.addEventListener ('click', function() {
		toggleFilter(control);
	})
}

// добавим выбор фильтра по умолчанию
var defaultFilter = document.querySelector('button.toaster');
toggleFilter(defaultFilter);

/*22. мы добавили ползунок в верстку, теперь добавим возможность его двигать:
для этого:
- надо сдвинуть ползунок и менять ширину оригинального фото*/

// зададим переменные для этих двух элементов:
var separator = document.querySelector('.separator');
var original = document.querySelector('.photo-original');

// меняем значение ширины и координаты ч/з свойство style
if (original && separator) {
	separator.style.left = "80%";
	original.style.width = "80%";
}


