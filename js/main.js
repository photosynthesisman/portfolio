$(document).ready(function() {	
	
	$('#fullpage').fullpage({		
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		navigation: true,
		anchors:['page1', 'page2', 'page3', 'page4', 'page5','page6'],
		afterLoad: function(anchorLink, index){   
			$('.section').find('.number_wrap').find('h2').removeClass('visible');	         			
			$('.section').find('h3').removeClass('width');	
			$('.section.step1').find('h2').removeClass('visible');		
			$('.section.step1').find('p').removeClass('visible');		
			$('.link_button').removeClass('hover');
      var slice = anchorLink.slice(4);    			
      $('.go-top').click(function(){
        $.fn.fullpage.moveTo(1);     
      })									
			let counters = $('.txt_wrap').find('.eng.num').eq(index - 2);			

      if(index == 1){      						
				$('.section.step1').find('p').addClass('visible');												
      }
      if(index == slice){		
				$('.section').eq(index-1).find('h2').addClass('visible');							
				$('.section').eq(index-1).find('h3').addClass('width');	
				$('.section').eq(index-1).find($('.link_button')).addClass('hover');						
        var classNum = ($('.gnb_background .eng').find('a').eq(index - 1));                
				$('.gnb_background .eng').find('a').removeClass('add-color');
        classNum.addClass('add-color');    				
				
				let targetNum = counters.attr('data-num');     		 
				function numberAnimate(){
					var num = 0;					
					var speed = 130;        
					var animateTimer = setInterval(function(){
							++num;
							counters.text(num); 
							if(num == targetNum){
									clearInterval(animateTimer);
							}
					},speed);   
				}	
				numberAnimate();					
			}										
			if(index == 7){                
        $('.section.last_step').addClass('visible');
				$('.section.last_step').find('h2').addClass('fade_down');
				$('.section.last_step').find('.contact').addClass('fade_up');
      }else{				
        $('.section.last_step').removeClass('visible');
				$('.section.last_step').find('h2').removeClass('fade_down');
				$('.section.last_step').find('.contact').removeClass('fade_up');
      };		
		}		
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);

	function link_hover(){
		$('.link_button').mouseover(function(){
			$(this).addClass('hover');
		})
		$('.link_button').mouseleave(function(){
			$(this).removeClass('hover');
		})
	}

	function dim_click(){
		$('.gnb_dim').click(function(e){
			e.preventDefault();
			$('.menu_list').removeClass('close');
			$('.gnb_background').removeClass('fadeIn');		
			$(this).removeClass('block');
		})
	}

	function button_change(){
		$('.menu_list').click(function(e){
			e.preventDefault();		
			if($(this).hasClass('close')){
				$(this).removeClass('close');
				$('.gnb_background').removeClass('fadeIn');			
				$('.gnb_dim').removeClass('block');			
			}else{
				$(this).addClass('close');		
				$('.gnb_background').addClass('fadeIn');			
				$('.gnb_dim').addClass('block');			
			}
		});	
	}

  function gnb_button() {
		$('.gnb .menu_list').mouseover(function(){
			if(!$(this).hasClass('close')){
				$(this).addClass('move')				
			}
		})
		$('.gnb .menu_list').mouseleave(function(){
			if(!$(this).hasClass('close')){
			$(this).removeClass('move')
			}
		})
	}
	dim_click();
	link_hover();
	gnb_button();
	button_change();	
});
