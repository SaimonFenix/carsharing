$(function(){
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                infinite: true,
                dots: false,
              }
            },
            
          ]
    });
    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,       
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1141,
            settings: {
              infinite: true,
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 846,
            settings: {
              infinite: true,
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 585,
            settings: {
              infinite: true,
              slidesToShow: 1,
            }
          },
        ]
    });
    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });
});