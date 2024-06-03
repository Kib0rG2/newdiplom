$(document).ready(function(){
  var currentIndex = 0;
  var slides = $('.slider-image');
  var totalSlides = slides.length;
  var interval = setInterval(nextSlide, 5000); // Интервал в миллисекундах (5000 = 5 секунд)

  function showSlide(index) {
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }
    $('#slider-images').css('transform', 'translateX(' + (-index * 500) + 'px)');
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
});
