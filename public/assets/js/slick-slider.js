$(document).ready(function(){
    $('.secteur').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });


  $(document).ready(function(){
    $('.sld-video').slick({
    //   dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      adaptiveHeight: true
    });
  });

  $(document).ready(function(){
    $('.banner-background').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  });

 