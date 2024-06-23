$(document).ready(function(){
  var currentIndex = 0;
  var slides = $('.slider-image');
  var totalSlides = slides.length;
  var slideWidth = slides.eq(0).width();
  var interval = setInterval(nextSlide, 2000);

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
    clearInterval(interval);
    showSlide(currentIndex - 1);
  });

  $('#next-btn').click(function() {
    clearInterval(interval);
    showSlide(currentIndex + 1);
  });

  // Адаптация при изменении размера окна
  $(window).on('resize', function() {
    slideWidth = slides.eq(0).width();
    showSlide(currentIndex);
  });

  // Отключение автоматического слайдшоу при изменении размера окна (не обязательно, но полезно)
  $(window).on('resize', function() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 2000);
  });

});
