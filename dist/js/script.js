$(document).ready(function(){
    $('.carousel').slick({
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/prev-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/next-arrow.png"></button>',
        dots: true,
        speed: 400
      });

      $('div.solutions__tabs').on('click', 'div:not(.solutions__tab_active)', function() {
        $(this)
          .addClass('solutions__tab_active').siblings().removeClass('solutions__tab_active')
          .closest('.container').find('div.solutions__content').removeClass('solutions__content_active').eq($(this).index()).addClass('solutions__content_active');
      });
  });