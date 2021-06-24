
var photos = [
  'gallery/laptop-large.jpg',
  'gallery/microphone-large.jpg',
  'gallery/keyboard-large.jpg',
  'gallery/signboard-large.jpg',
  'gallery/tree-large.jpg'
];


var thumbnails = document.querySelectorAll('.gallery__photo-preview');
var fullPhoto = document.querySelector('.full-photo');

var addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function () {
  fullPhoto.src = photo;
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i]);
}

/*
12.
После массива данных создайте переменную thumbnails, запишите в неё все элементы с классом gallery__photo-preview, найденные с помощью querySelectorAll
Ниже создайте переменную fullPhoto и запишите в неё изображение с классом full-photo, найденное с помощью querySelector

13.
После переменных напишите цикл for, который увеличивает счётчик i на единицу от 0 до длины коллекции thumbnails (не включая последнее значение).
Внутри цикла добавьте обработчик клика на текущий элемент массива thumbnails[i].
Внутри обработчика добавьте вывод в консоль строки 'Клик по картинке'.
Кликните по одной из миниатюр и загляните в консоль.

14.
В обработчике замените вывод строки в консоль на запись пути картинки в атрибут src: fullPhoto.src = photos[i].
Кликните на любую миниатюру в галерее.
Обратите внимание, что программа работает с ошибкой. Дальше мы разберёмся, почему так произошло.

15.
Внутри обработчика, в самом начале, выведите в консоль счётчик i.
На следующей строке выведите в консоль photos[i].
Кликните по двум любым миниатюрам и загляните в консоль

16.
пример замыкания

22.
Перед циклом объявите функцию addThumbnailClickHandler с двумя параметрами: thumbnail и photo.
В теле функции добавьте thumbnail обработчик клика.
Внутри этого обработчика выведите в консоль thumbnail, а на следующей строке выведите в консоль photo.
Замените весь код в теле цикла на вызов функции addThumbnailClickHandler с аргументами thumbnails[i], photos[i].
Кликните по двум любым миниатюрам.

23.
Замените код внутри обработчика на fullPhoto.src = photo;.
Кликните по одной из миниатюр.

*/