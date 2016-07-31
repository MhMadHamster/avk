$(document).ready(function() {

  $('.calc-block input:not(#corp_count)').mask('000 000 000', {placeholder: ' ', reverse: true});
  $('.calc-wrapper input#result').mask('000 000 000', {placeholder: ' ', reverse: true});
  $('.calc-block input#corp_count').mask('000', {placeholder: ' ', reverse: true});

  $('.calc-block input:not(#result)').on('input', function() {
    recalculate();
  });

  recalculate();

  function recalculate() {
    var lpo = parseInt($('#lpo').val().replace(/ /g, '')) * -1;
    var modSalary = parseInt($('#mod_salary').val().replace(/ /g, '')) * -1 * 12;
    var photoSalary = parseInt($('#photo_salary').val().replace(/ /g, '')) * -1 * 12;
    var corpCount = parseInt($('#corp_count').val().replace(/ /g, '')) * 12;
    var corpPrice = parseInt($('#corp_price').val().replace(/ /g, '')) * corpCount;
    var markPrice = parseInt($('#mark_price').val().replace(/ /g, '')) * -1;
    var otherPrice = parseInt($('#other_price').val().replace(/ /g, '')) * -1;

    $('.calc-wrapper #result').val(lpo + modSalary + photoSalary + corpPrice + markPrice + otherPrice);
    $('.calc-wrapper #result').trigger('input');
  }

});