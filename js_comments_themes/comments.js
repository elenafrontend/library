let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');

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
}