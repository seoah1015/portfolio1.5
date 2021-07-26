$(function() {
    AOS.init();

    function scroll_header() {
      header = $('header').outerHeight();
      scroll = $(window).scrollTop();
      if(scroll > 0){
        $('header').addClass('on')
      }else{
        $('header').removeClass('on')
      }
    }
    scroll_header();

    $(window).scroll(function(){
      scroll_header();
    })

    $(function() {
        $('.menu_btn').click(function(){
            $('.menu_btninner').addClass('on')
        })

        $('.close').click(function(){
            $('.menu_btninner').removeClass('on')
        })
    })

  $('.menu > li').click(function(){
    h = $(this).find('ul').outerHeight();
    div_h = $(this).find('div').outerHeight();
    if(div_h > 0){
      $('.menu div').stop().animate({height:0},500)
    }else{
      $('.menu div').stop().animate({height:0},500)
      $(this).find('div').stop().animate({height:h},500)
    }
  })


  /*swiper 슬라이드*/
    var swiper = new Swiper('.swiper-container.main_vis', {
      pagination: {
        el: '.main_vis .swiper-pagination',
        dynamicBullets: true,
      },
    });


    var swiper = new Swiper('.swiper-container.select_pro', {
      slidesPerView: 2,
      spaceBetween: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.select_pro .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        376: {
          slidesPerView: 4,
          spaceBetween: 4,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 4,
        },
        760: {
          slidesPerView: 4,
          spaceBetween: 4,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 4,
        },
      }
    });
  /*tap*/
  $('.tab_list li').click(function(){
    $('.cd_intro > div').removeClass('on')
    $('#cd'+$(this).index()).addClass('on')
  })

  /*album 소개*/
  var controller = new ScrollMagic.Controller();


    var tween1 = TweenMax.fromTo(".bg_ani span", 0.6, {
      x:'20%'
    }, {
      x:'-20%'
    })

    var scene = new ScrollMagic.Scene({
        triggerElement: ".album_intro",
        duration: "100%",
        offset:150
    })
    .setTween(tween1)
    .addTo(controller)


    var tween2 = TweenMax.fromTo(".bg_ani2 span", 0.6, {
      x:'-40%'
    }, {
      x:'40%'
    })

    var scene = new ScrollMagic.Scene({
        triggerElement: ".album_intro",
        duration: "100%",
        offset:150
    })
    .setTween(tween2)
    .addTo(controller)


  });
