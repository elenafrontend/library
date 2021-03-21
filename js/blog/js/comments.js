let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');
let submitButton = document.querySelector('.submit-button');
let charCounter = document.querySelector('.char-counter');

// Добавляем новый комментарий
// добавляем обработчик событий на отправку формы
commentForm.onsubmit = function(evt) {
	// отменяем событие по умолчанию
	evt.preventDefault();
	// создаем новый комментарий
	let newComment = document.createElement('li');
	// добавляем класс
	newComment.classList.add('user-comment');
	//  значение, введенное пользователем
	newComment.textContent = commentField.value;
	// очищаем поле ввода
	commentField.value = '';
	// добавляем созданный элемент в список (лучше уже полностью сформированнй элемент)
	commentList.append (newComment);
	// обнуляем счетчик напечатанных символов
	charCounter.textContent = 0;
}


// Валидатор
// Обработчки при введении текста
commentField.oninput = function() {
	charCounter.textContent = commentField.value.length;
	// если введенных символов больше 142
	if(commentField.value.length > 142) {
		// добавляем стилизацию
		commentForm.classList.add('warning');
		// блокируем кнопку отправки
		submitButton.disabled = true;
	} else {
		// в обратном случае убираем стилизацию
		commentForm.classList.remove('warning');
		//  и блокировку кнопки
		submitButton.disabled = false;
	}
}



























// let commentForm = document.querySelector('.comment-form');
// let commentList = document.querySelector('.comment-list');
// let commentField = document.querySelector('.comment-field');
// let charCounter = document.querySelector('.char-counter');
// let submitButton = document.querySelector('.submit-button');

// commentForm.onsubmit = function (evt) {
//   evt.preventDefault();

//   let newComment = document.createElement('li');
//   newComment.classList.add('user-comment');
//   newComment.textContent = commentField.value;
//   commentField.value = '';
//   commentList.append(newComment);
//   charCounter.textContent = 0;
// };

// commentField.oninput = function () {
//   charCounter.textContent = commentField.value.length;

//   if (commentField.value.length > 142) {
//     commentForm.classList.add('warning');
//     submitButton.disabled = true;
//   } else {
//     commentForm.classList.remove('warning');
//     submitButton.disabled = false;
//   }
// };
