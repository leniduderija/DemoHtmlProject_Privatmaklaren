$(document).ready(function(){

	$('#refernces-carousel').owlCarousel({
	    // loop:true,
	    autoPlay: 7000,
	    singleItem: true,
	    // margin:10,
	    navigation:true,
	    navigationText: false
	});

	$('#partners-slider').owlCarousel({
	    // loop:true,
	    // margin:40,
	    navigation:false,
	    items: 6,
	    // responsive:{
	    //     0:{
	    //         items:3
	    //     },
	    //     600:{
	    //         items:4
	    //     },
	    //     1000:{
	    //         items:6
	    //     }
	    // }
	});

  // autoscroll 1px on load to trigger menu animation
  // $(window).scrollTop($(window).scrollTop()+1);

  /***************** Header BG Scroll ******************/

  $(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if($('.header .container').length){
        var headerSection = $('.header .container').offset().top;
      }
      
      // var sidemenu = jQuery('.blog-intro .rightcol').offset().top;
      var scrollTop = $(window).height() - headerSection;
      
      

      if (scroll >= headerSection) {
        $('.navbar-default').addClass('scrolled');
        // $('.navbar-default').css({
        //   "background": "#fff"
        // });        
      } else {
        $('.navbar-default').removeClass('scrolled');
        // $('.navbar-default').css({
        // 	"background": "transparent"
        // });
      }
    });
  });


	$(".open-panel").click(function(){
		$(".open-panel").toggleClass("clicked");
		$('.menu-holder').toggleClass("open");
		$('.menu-holder').removeClass("text-right");
		// $('.menu-holder').removeClass("pull-right");
	});

	$(".close-panel, .menu li a").click(function(){
		$(".open-panel").toggleClass("clicked");
		$('.menu-holder').removeClass("open");
	});
	if($('.menu-holder').hasClass('open')){
		console.log("has open");
		$('section').click(function(){
			console.log("clicked");
			$(".open-panel").toggleClass("clicked");
			$('.menu-holder').removeClass("open");
		});
	} else {
		console.log("no open");
	}


	// load more items
	var saleBoxCount = $('.sale-boxes-wrap .sale-box').size();
	var count = 3;
	$('.sale-boxes-wrap .sale-box:lt('+ count +')').show();
	$('.load-more').click(function(){
		count = (count + 3 <= saleBoxCount) ? count + 3 : saleBoxCount;
		$('.sale-boxes-wrap .sale-box:lt('+ count +')').show();
		if(count == saleBoxCount){
			$('.load-more').addClass('hide');
		}
	});
	

});