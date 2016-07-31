$(document).ready(function() {

  $('.js-gallery').slick();

  $('.js-review-gallery').on('init', function() {
    $('.js-review-gallery .item').matchHeight();
  });

  $('.js-review-gallery').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScrol: 1
        }
      }
    ]
  });

  $('.js-tab').click(function(e) {
    e.preventDefault();

    var slider = $(this).data('tab');
    $(this).closest('.tabs').find('.js-review-gallery').removeClass('active').end().find('.js-tab.active').removeClass('active');
    $(this).addClass('active');
    $('#' + slider).addClass('active');

  });

  $('[data-href]').click(function(e) {
    e.preventDefault();
    var link = $(this).data('href');
    if (!$('.' + link).length) return;
    var top = $('.' + link).offset().top;
    $('body').animate({scrollTop: top}, 1500);
  })

  $('.js-calc-show').click(function(e) {
    e.preventDefault();

    if ($('.calc-block').is(':visible')) return;

    var $self = $(this);
      $('.calc-block').slideDown()
      var top = $('.' + $self.data('href')).offset().top;
      $('body').animate({scrollTop: top}, 300);
  });

  $('.js-menu').click(function() {
    $(this).closest('.header-menu').find('ul').slideToggle();
  });

});