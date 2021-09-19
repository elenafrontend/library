let chat = document.querySelector('.chat-content');
// форма отправки сообщения
let chatForm = document.querySelector('.chat-form');
let formMessage = chatForm.querySelector('.chat-form-input');
// шаблон нового сообщения
let template = document.querySelector('#message-template').content;
let messageTemplate = template.querySelector('.chat-message');

// добавляем обработчик на отправку формы (вкл и по клику, и по клавише)
chatForm.addEventListener('submit', function(evt) {
  // Отменяем отправку формы по умолчанию
  evt.preventDefault();
  
  // Создаем новое сообщение в чате ч/з клонирование template 
  let newMessage = messageTemplate.cloneNode(true);
  let messageText = formMessage.value;
  let newMessageText= newMessage.querySelector('.chat-message-text');
  newMessageText.textContent = messageText;
  chat.appendChild(newMessage);
  
  //очищаем форму отправки после создания нового сообщения 
  formMessage.value = ''; 
  
  // добавляем обработчик на кнопку закрытия (крестик)
  let deleteButton = newMessage.querySelector('.chat-message-button');
  deleteButton.addEventListener('click', function() {
    newMessage.remove();
  })
})

/* 

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).
    
- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.

*/
