$(function(){

  $('.menu > li').click(function(){
      h = $(this).find('ul').outerHeight();
      div_h = $(this).find('div').outerHeight();
      // $('.menu div').animate({height:0},500)
      // $(this).find('div').animate({height:h},500)
      if(div_h > 0){
        $('.menu div').stop().animate({height:0},500)
      }else{
        $('.menu div').stop().animate({height:0},500)
        $(this).find('div').stop().animate({height:h},500)
      }
  })
  //만얃에 내가 li를클릭했는데 그 자식중에 div가 높이가 0보다클땐 닫아준다
  //그렇지않다면 열어준다


  var controller = new ScrollMagic.Controller();


      var tween1 = TweenMax.fromTo(".txt_ani", 0.6, {
        x:'-20%'
      }, {
        x:'40%'
      })

      var scene = new ScrollMagic.Scene({
          triggerElement: ".event",
          duration: "100%"
      })
      .setTween(tween1)
      .addTo(controller)






      var tween2 = TweenMax.fromTo(".contact > p", 0.6, {
        y:'-20%'
      }, {
        y:'40%'
      })

      var scene = new ScrollMagic.Scene({
          triggerElement: ".contact",
          duration: "100%"
      })
      .setTween(tween2)
      .addTo(controller)







      var tween2 = TweenMax.fromTo(".newitem .info", 0.6, {
        y:'-20%'
      }, {
        y:'40%'
      })

      var scene = new ScrollMagic.Scene({
          triggerElement: ".newitem",
          duration: "100%"
      })
      .setTween(tween2)
      .addTo(controller)


      $('footer h4').click(function(){
        $('.info_more').toggleClass('on')
      })

      

})
