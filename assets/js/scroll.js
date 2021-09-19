// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

console.log('1. вёрстка валидная +10 (ошибок нет)\n2. вёрстка семантическая +20 (10 тегов есть)\n3. для оформления СV используются css-стили +10\n4. контент размещается в блоке, который горизонтально центрируется на странице +10\n5. вёрстка адаптивная +10\n6. есть адаптивное бургер-меню +10\n7. на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10\n8. контакты для связи и перечень навыков оформлены в виде списка ul > li +10\n9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10\n10. CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10\n11. CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10\n12. CV выполнено на английском языке +10\n13. выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10\n14. дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10')