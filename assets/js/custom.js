$(function(){


        $('.menu_btn').click(function(){
          if($(this).hasClass('close')){
            $(this).removeClass('close')
            $('.menu').removeClass('on')
          }else{
            $('.menu').addClass('on');
            $('.menu_btn').addClass('close');
          }

        })

        $('main').scroll(function(){
          console.log('1')
          alert('a');
        })


// contact 내용 복사하기
    $('.footer .contact a').click(function(){
		var text = $(this).html();
		text = text.replace(/ - /gi, "");
		$('#clip_target').val(text);
		$('#clip_target').select();

		try{
			document.execCommand("copy");
		} catch(err) {
			alert('err');
		}
	});



});
