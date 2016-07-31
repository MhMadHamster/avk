$(document).ready(function() {

  $.extend($.validator.messages, {
    required: 'Пожалуйста заполните это поле.',
    email: 'Неверный формат почты.'
  });

  $('.contact-form').submit(function(e) {
    e.preventDefault();

    if (!$('.contact-form').valid()) return false;

    console.log($(this).serializeArray());
  })

});