$(document).ready(function() {	
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		navigation: true,
		anchors:['page1', 'page2', 'page3', 'page4', 'page5','page6'],
		afterLoad: function(anchorLink, index){            
      var slice = anchorLink.slice(4);      
      if(index == 1){      
				$('.section.step1').find('h2').addClass('visible');			
				$('.section.step1').find('p').addClass('visible');			
      }; 
      if(index == slice){
        var classNum = ($('.gnb_background .eng').find('a').eq(index - 1));        
        console.log(classNum)
        $('.gnb_background .eng').find('a').removeClass('add-color');
        classNum.addClass('add-color');        
      }            
			if(index == 6){                
				$('.section.last_step').find('h2').addClass('fade_down');
				$('.section.last_step').find('.contact').addClass('fade_up');
      }else{				
				$('.section.last_step').find('h2').removeClass('fade_down');
				$('.section.last_step').find('.contact').removeClass('fade_up');
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
