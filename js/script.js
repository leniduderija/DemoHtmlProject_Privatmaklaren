// jQueryEasing
jQuery.easing.jswing=jQuery.easing.easeOutExpo,jQuery.extend(jQuery.easing,{easeOutExpo:function(e,n,u,a,r){return n==r?u+a:a*(-Math.pow(2,-10*n/r)+1)+u}});
// enquire.js v2.1.1 - Awesome Media Queries in JavaScript
!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});
// jQuery.appear
!function(a){a.fn.appear=function(b,c){var d=a.extend({data:void 0,one:!0,accX:0,accY:0},c);return this.each(function(){var c=a(this);if(c.appeared=!1,!b)return c.trigger("appear",d.data),void 0;var e=a(window),f=function(){if(!c.is(":visible"))return c.appeared=!1,void 0;var a=e.scrollLeft(),b=e.scrollTop(),f=c.offset(),g=f.left,h=f.top,i=d.accX,j=d.accY,k=c.height(),l=e.height(),m=c.width(),n=e.width();h+k+j>=b&&b+l+j>=h&&g+m+i>=a&&a+n+i>=g?c.appeared||c.trigger("appear",d.data):c.appeared=!1},g=function(){if(c.appeared=!0,d.one){e.unbind("scroll",f);var g=a.inArray(f,a.fn.appear.checks);g>=0&&a.fn.appear.checks.splice(g,1)}b.apply(this,arguments)};d.one?c.one("appear",d.data,g):c.bind("appear",d.data,g),e.scroll(f),a.fn.appear.checks.push(f),f()})},a.extend(a.fn.appear,{checks:[],timeout:null,checkAll:function(){var b=a.fn.appear.checks.length;if(b>0)for(;b--;)a.fn.appear.checks[b]()},run:function(){a.fn.appear.timeout&&clearTimeout(a.fn.appear.timeout),a.fn.appear.timeout=setTimeout(a.fn.appear.checkAll,20)}}),a.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(b,c){var d=a.fn[c];d&&(a.fn[c]=function(){var b=d.apply(this,arguments);return a.fn.appear.run(),b})})}(jQuery);

/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);



$(document).ready(function(){

	if (navigator.appName == 'Microsoft Internet Explorer') {
        $('html').addClass('ie');
    }
	var isiPad = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) != null;
	if (isiPad == true) {
		$('html').addClass('ipad');
	}

	// JS media queries
	enquire.register("screen and (max-width: 768px)", [
		{ match : function() { $('body').addClass('mobRes'); $('body').removeClass('deskRes'); } }
	]);
	enquire.register("screen and (min-width: 769px)", [
		{ match : function() { $('body').removeClass('mobRes'); $('body').addClass('deskRes');} }
	]);


	$('#refernces-carousel').owlCarousel({
	    // loop:true,
	    autoPlay: false,
	    singleItem: true,
	    // margin:10,
	    navigation:true,
	    navigationText: false
	});

	$('#partners-slider').owlCarousel({
	    // loop:true,
	    // margin:40,
	    navigation:false,
	    items: 6
	});

  /***************** Header BG Scroll ******************/

  $(function() {
  	if($('body').hasClass('home')){
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
	 }
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
	
	$('section').click(function(){
		if($('.menu-holder').hasClass('open')){
			$(".open-panel").toggleClass("clicked");
			$('.menu-holder').removeClass("open");
		}
	});


	// load more items on homepage
	if($('.home').length){
		var saleBoxCount = $('.home .sale-boxes-wrap .sale-box').size();
		var count = 3;
		$('.sale-boxes-wrap .sale-box:lt('+ count +')').show();

		$('.load-more').click(function(){
			count = (count + 3 <= saleBoxCount) ? count + 3 : saleBoxCount;
			$('.sale-boxes-wrap .sale-box:lt('+ count +')').show();
			if(count == saleBoxCount){
				$('.load-more').addClass('hide');
			}
		});
	} else {
		var saleBoxCount = $('.listings .list-card').size();
		var count = 4;
		$('.listings .list-card:lt('+ count +')').show();

		$('.load-more').click(function(){
			count = (count + 4 <= saleBoxCount) ? count + 4 : saleBoxCount;
			$('.listings .list-card:lt('+ count +')').show();
			if(count == saleBoxCount){
				$('.load-more').addClass('hide');
			}
		});
	}

	// Set some heights
	$(window).resize( function(){
		calcWidth();
	});
	function calcWidth(){
		var winw = $(window).width();
		var winh = $(window).height();
		var headHeight = winh;
		
		if($('body').hasClass('deskRes')){
			var menuPosX = $('.menu-holder').position().left + 14;
			$('.secondary-nav').css('width', winw)
							.css('margin-left', -menuPosX);
		}
	}
	calcWidth();


});