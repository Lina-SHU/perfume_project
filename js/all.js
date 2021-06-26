$(document).ready(function () {
  $('.burgerList').click(function (e) {
    e.preventDefault();
    $('.menu').toggleClass('active');
  });
});