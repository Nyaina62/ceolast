$(document).ready(function(){
    $('.secteur').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:false
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