$(document).ready(function() {	
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		navigation: true,
		anchors:['page1', 'page2', 'page3', 'page4', 'page5'],
		afterLoad: function(anchorLink, index){            
            if(index == 1){
                $('.gnb_background .page1').css('color', '#00b4ff;');
				$('.section.step1').find('h2').addClass('visible');			
				$('.section.step1').find('p').addClass('visible');			
            }else if(index != 1){
				$('.gnb_background .page1').css('color', '#000;'); 
				$('.section.step1').find('h2').removeClass('visible');									                                                                              
				$('.section.step1').find('p').removeClass('visible');									                                                                              
            };
			if(index == 2){
                $('.gnb_background .page2').css('color', '#00b4ff;');
            }else{
				$('.gnb_background .page2').css('color', '#000;');                                                                                                         
            };
			if(index == 3){
                $('.gnb_background .page3').css('color', '#00b4ff;');
            }else{
				$('.gnb_background .page3').css('color', '#000;');                                                                                                         
            };
			if(index == 4){
                $('.gnb_background .page4').css('color', '#00b4ff;');
            }else{
				$('.gnb_background .page4').css('color', '#000;');                                                                                                         
            };
			if(index == 5){
                $('.gnb_background .page5').css('color', '#00b4ff;');
				$('.section.step5').find('h2').addClass('fade_down');
				$('.section.step5').find('.contact').addClass('fade_up');
            }else{
				$('.gnb_background .page5').css('color', '#000;');
				$('.section.step5').find('h2').removeClass('fade_down');
				$('.section.step5').find('.contact').removeClass('fade_up');
            };		
		}		
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);

	$('.menu_list').click(function(e){
		e.preventDefault();		
		if($(this).hasClass('close')){
			$(this).removeClass('close');
			$('.gnb_background').animate({
				left:"100%"				
			}, 1000)
		}else{
			$(this).addClass('close');		
			$('.gnb_background').animate({
				left:"60%"				
			}, 1000)
		}
	});	
});

$(document).click(function(e) {
  if(!$('.menu_list').has(e.target).length && $('.menu_list').hasClass('close')==true ){
    $('.menu_list').removeClass('close');
    $('.gnb_background').animate({
      left:"100%"				
    }, 1000)
  } 
  });