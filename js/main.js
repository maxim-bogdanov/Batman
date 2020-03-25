$(function(){

  $('.slider').slick({
    dots: true,
    arrows: false,
    vertical: true,
    dotsClass: 'header-dots',
    // swipeToSlide: true,
    // verticalSwiping: true,
    autoplay: 2000
  });

  $('.menu-btn').on('click', function(){
    $('.menu ul').slideToggle();
    $('.menu-btn__line').toggleClass('active-btn__line');
  });

});