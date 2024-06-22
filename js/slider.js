$(document).ready(function(){
  var currentIndex = 0;
  var slides = $('.slider-image');
  var totalSlides = slides.length;
  var slideWidth = slides.eq(0).width(); // Ширина одного слайда
  var interval = setInterval(nextSlide, 2000); // Интервал в миллисекундах (2000 = 2 секунды)

  function showSlide(index) {
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }
    $('#slider-images').css('transform', 'translateX(' + (-index * slideWidth) + 'px)');
    currentIndex = index;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  $('#prev-btn').click(function() {
    clearInterval(interval); // Сбросить интервал при клике на предыдущий слайд
    showSlide(currentIndex - 1);
  });

  $('#next-btn').click(function() {
    clearInterval(interval); // Сбросить интервал при клике на следующий слайд
    showSlide(currentIndex + 1);
  });

  // Адаптация при изменении размера окна
  $(window).on('resize', function() {
    slideWidth = slides.eq(0).width(); // Обновляем ширину слайда при изменении размера окна
    showSlide(currentIndex); // Показываем текущий слайд с учетом новой ширины
  });

  // Отключение автоматического слайдшоу при изменении размера окна (не обязательно, но полезно)
  $(window).on('resize', function() {
    clearInterval(interval); // Сбросить интервал при изменении размера окна
    interval = setInterval(nextSlide, 2000); // Перезапуск интервала с новыми настройками
  });

});
