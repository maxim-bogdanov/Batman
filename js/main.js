$(document).ready(function () {
  let tabsItem = $('.tabs-item');
  tabsItem.on('click', function(event){
    event.preventDefault();
    let activeContent = $(this).attr('href');
    $('.active-link').toggleClass('active-link');
    $('.visible').toggleClass('visible');
    $(activeContent).toggleClass('visible');
    $(this).toggleClass('active-link');
  });
  $('.button-check').on('click', function(event){
    event.preventDefault();
    $('.button-check').toggleClass('button-color');
  });
  $('.search-button').on('click', function(event){
    event.preventDefault();
  });
});