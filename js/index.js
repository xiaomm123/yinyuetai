// JavaScript Document

$(function (){
	$('.home').hover(function (){
		$('.home').css('background','#000');
		$('.pos1').stop().slideDown();
		
		$('.home i').addClass('active');
	},function (){
		$('.home').css('background','');
		$('.pos1').stop().slideUp();
		$('.home i').removeClass('active');
	});
	
	$('.mv').hover(function (){
		$('.mv').css('background','#000');
		$('.pos2').stop().slideDown()
		$('.mv i').addClass('active');
	},function (){
		$('.mv').css('background','');
		$('.pos2').stop().slideUp();
		$('.mv i').removeClass('active');
	});
	
	$('.music').hover(function (){
		$('.music').css('background','#000');
		$('.pos3').stop().slideDown()
		$('.music i').addClass('active');
	},function (){
		$('.music').css('background','');
		$('.pos3').stop().slideUp();
		$('.music i').removeClass('active');
	});
	
	$('.v').hover(function (){
		$('.v').css('background','#000');
		$('.pos4').stop().slideDown()
		$('.v i').addClass('active');
	},function (){
		$('.v').css('background','');
		$('.pos4').stop().slideUp();
		$('.v i').removeClass('active');
	});
	
	$('.use').hover(function (){
		$('.use').css('background','#000');
		$('.pos5').stop().slideDown();
		$('.use i').addClass('active');
	},function (){
		$('.use').css('background','');
		$('.pos5').stop().slideUp();
		$('.use i').removeClass('active');
	});
	
	$('.show').hover(function (){
		$('.show').css('background','#000');
		$('.pos6').stop().slideDown();
		$('.show i').addClass('active');
	},function (){
		$('.show').css('background','');
		$('.pos6').stop().slideUp();
		$('.show i').removeClass('active');
	});
	
	$('.fan').hover(function (){
		$('.fan').css('background','#000');
		$('.pos7').stop().slideDown();
		$('.fan i').addClass('active');
	},function (){
		$('.fan').css('background','');
		$('.pos7').stop().slideUp();
		$('.fan i').removeClass('active');
	});
	
	$('.search').toggle(function (){
		$('.search').addClass('active');
		$('.search_box').css('background','#f00;');
		$('.search_pos').slideDown()
	},function (){
		$('.search').removeClass('active');
		$('.search_box').css('background','#000;');
		$('.search_pos').slideUp();
	});
	
	
	$('.btn span').mouseover(function (){
		$('.btn span').removeClass('active');
		$(this).addClass('active');
		$('.banner li').hide()
		$('.banner li').eq($(this).index()).show();
	});
	
	
	$('.btn1 li a').click(function (){
		$('.btn1 li a').removeClass('active');
		$('.btn1 li a').removeClass('hover');
		$(this).addClass('active')
		$('.tab1').hide();
		$('.tab1').eq($(this).index()).show();
	});
	
	$('.btn1 li a').hover(function (){
		$(this).addClass('hover')
		$(this).removeClass('active')
	},function(){
		$('.btn1 li a').removeClass('hover')
	});
	
	$('.btn1 li ').click(function (){
		
		$('.tab1').hide();
		$('.tab1').eq($(this).index()).show();
	});
	
	
	
	
	
	
	
	$('.btn2 li a').click(function (){
		$('.btn2 li a').removeClass('active');
		$('.btn2 li a').removeClass('hover');
		$(this).addClass('active')
		$('.tab2').hide();
		$('.tab2').eq($(this).index()).show();
	});
	
	$('.btn2 li a').hover(function (){
		$(this).addClass('hover')
		$(this).removeClass('active')
	},function(){
		$('.btn2 li a').removeClass('hover')
	});
	
	$('.btn2 li ').click(function (){
		
		$('.tab2').hide();
		$('.tab2').eq($(this).index()).show();
	});
	
	
	/点击显示/
	
	$('.main_list_f').toggle(function (){
		$('.main_list_f').removeClass('active')
		$('.main_list_pos').stop().slideUp()
	},function (){
		$('.main_list_f').addClass('active')
		$('.main_list_pos').stop().slideDown()
	})
	
	
	
	
	$('.all_main_nav .li1').hover(function (){
		$('.all_main_nav_pos').show();
		$(this).addClass('active')
	},function (){
		$('.all_main_nav_pos').hide()
		$(this).removeClass('active')
	})
});
			


















































