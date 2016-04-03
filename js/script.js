// jQueryEasing
jQuery.easing.jswing=jQuery.easing.easeOutExpo,jQuery.extend(jQuery.easing,{easeOutExpo:function(e,n,u,a,r){return n==r?u+a:a*(-Math.pow(2,-10*n/r)+1)+u}});
// enquire.js v2.1.1 - Awesome Media Queries in JavaScript
// !function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});

/* MediaMatch v.2.0.2 - Testing css media queries in Javascript. Authors & copyright (c) 2013: WebLinc, David Knight. */

window.matchMedia||(window.matchMedia=function(c){var a=c.document,w=a.documentElement,l=[],t=0,x="",h={},G=/\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,H=/^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,y=0,A=function(b){var z=-1!==b.indexOf(",")&&b.split(",")||[b],e=z.length-1,j=e,g=null,d=null,c="",a=0,l=!1,m="",f="",g=null,d=0,f=null,k="",p="",q="",n="",r="",k=!1;if(""===
b)return!0;do{g=z[j-e];l=!1;if(d=g.match(G))c=d[0],a=d.index;if(!d||-1===g.substring(0,a).indexOf("(")&&(a||!d[3]&&c!==d.input))k=!1;else{f=g;l="not"===d[1];a||(m=d[2],f=g.substring(c.length));k=m===x||"all"===m||""===m;g=-1!==f.indexOf(" and ")&&f.split(" and ")||[f];d=g.length-1;if(k&&0<=d&&""!==f){do{f=g[d].match(H);if(!f||!h[f[3]]){k=!1;break}k=f[2];n=p=f[5];q=f[7];r=h[f[3]];q&&(n="px"===q?Number(p):"em"===q||"rem"===q?16*p:f[8]?(p/f[8]).toFixed(2):"dppx"===q?96*p:"dpcm"===q?0.3937*p:Number(p));
k="min-"===k&&n?r>=n:"max-"===k&&n?r<=n:n?r===n:!!r;if(!k)break}while(d--)}if(k)break}}while(e--);return l?!k:k},B=function(){var b=c.innerWidth||w.clientWidth,a=c.innerHeight||w.clientHeight,e=c.screen.width,j=c.screen.height,g=c.screen.colorDepth,d=c.devicePixelRatio;h.width=b;h.height=a;h["aspect-ratio"]=(b/a).toFixed(2);h["device-width"]=e;h["device-height"]=j;h["device-aspect-ratio"]=(e/j).toFixed(2);h.color=g;h["color-index"]=Math.pow(2,g);h.orientation=a>=b?"portrait":"landscape";h.resolution=
d&&96*d||c.screen.deviceXDPI||96;h["device-pixel-ratio"]=d||1},C=function(){clearTimeout(y);y=setTimeout(function(){var b=null,a=t-1,e=a,j=!1;if(0<=a){B();do if(b=l[e-a])if((j=A(b.mql.media))&&!b.mql.matches||!j&&b.mql.matches)if(b.mql.matches=j,b.listeners)for(var j=0,g=b.listeners.length;j<g;j++)b.listeners[j]&&b.listeners[j].call(c,b.mql);while(a--)}},10)},D=a.getElementsByTagName("head")[0],a=a.createElement("style"),E=null,u="screen print speech projection handheld tv braille embossed tty".split(" "),
m=0,I=u.length,s="#mediamatchjs { position: relative; z-index: 0; }",v="",F=c.addEventListener||(v="on")&&c.attachEvent;a.type="text/css";a.id="mediamatchjs";D.appendChild(a);for(E=c.getComputedStyle&&c.getComputedStyle(a)||a.currentStyle;m<I;m++)s+="@media "+u[m]+" { #mediamatchjs { position: relative; z-index: "+m+" } }";a.styleSheet?a.styleSheet.cssText=s:a.textContent=s;x=u[1*E.zIndex||0];D.removeChild(a);B();F(v+"resize",C);F(v+"orientationchange",C);return function(a){var c=t,e={matches:!1,
media:a,addListener:function(a){l[c].listeners||(l[c].listeners=[]);a&&l[c].listeners.push(a)},removeListener:function(a){var b=l[c],d=0,e=0;if(b)for(e=b.listeners.length;d<e;d++)b.listeners[d]===a&&b.listeners.splice(d,1)}};if(""===a)return e.matches=!0,e;e.matches=A(a);t=l.push({mql:e,listeners:null});return e}}(window));

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
	var mql = window.matchMedia('screen and (max-width: 768px)');
	if (mql.matches) {
        // Media query does match
        $('body').addClass('mobRes');
        $('body').removeClass('deskRes');
    } else {
        // Media query does not match anymore
        $('body').removeClass('mobRes');
        $('body').addClass('deskRes');
    }
	window.matchMedia('screen and (max-width: 768px)')
	    .addListener(function(mql) {
	        if (mql.matches) {
	            // Media query does match
	            $('body').addClass('mobRes');
	            $('body').removeClass('deskRes');
	        } else {
	            // Media query does not match anymore
	            $('body').removeClass('mobRes');
	            $('body').addClass('deskRes');
	        }
    });
	// enquire.register("screen and (max-width: 768px)", [
	// 	{ match : function() { $('body').addClass('mobRes'); $('body').removeClass('deskRes'); } }
	// ]);
	// enquire.register("screen and (min-width: 769px)", [
	// 	{ match : function() { $('body').removeClass('mobRes'); $('body').addClass('deskRes');} }
	// ]);
	
	
	$('#refernces-carousel').owlCarousel({
	    // loop:true,
	    autoPlay: true,
	    singleItem: true,
	    margin:10,
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

  	if($('body').hasClass('home')){
	    $(window).scroll(function() {
	      var scroll = $(window).scrollTop();
	      if($('.header .container').length){
	        var headerSection = $('.header .container').offset().top;
	      }
	      
	      var scrollTop = $(window).height() - headerSection;

	      if (scroll >= headerSection) {
	        $('.navbar-default').addClass('scrolled');
	      } else {
	        $('.navbar-default').removeClass('scrolled');
	      }
	    });
	 }
	if($('.tabs-nav').length){
		$(window).scroll(function() {
	      var scroll = $(window).scrollTop();
	      
	      var headerH = $('.header').height();
	      var tabsNav = $('.tabs-nav').height();
	      
	      var scrollTop = $(window).height() - headerH;

	      if (scroll >= headerH - tabsNav) {
	        $('.tabs-nav').addClass('scrolled');

	      } else {
	        $('.tabs-nav').removeClass('scrolled');
	      }
	    });
	}


	$(".open-panel").click(function(){
		$(".open-panel").toggleClass("clicked");
		$('.menu-holder').toggleClass("open");
		$('.menu-holder').removeClass("text-right");
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

	$("img.lazy").lazyload({
		effect : "fadeIn",
		threshold : 600		
	});

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


	// detail page tabs scrolling
	var sections = $('section')
	  , nav = $('.tabs-nav')
	  , nav_height = nav.outerHeight();

	$(window).on('scroll', function () {
	  var cur_pos = $(this).scrollTop();
	  
	  sections.each(function() {
	    var top = $(this).offset().top - nav_height - 90,
	        bottom = top + $(this).outerHeight();
	    
	    if (cur_pos >= top-20 && cur_pos <= bottom) {
	      nav.find('a').removeClass('current-tab-item');
	      // sections.removeClass('active');
	      
	      $(this).addClass('current-tab-item');
	      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('current-tab-item');
	    }
	  });
	});

	nav.find('a').on('click', function () {
	  var $el = $(this)
	    , id = $el.attr('href');
	  
	  $('html, body').animate({
	    scrollTop: $(id).offset().top - nav_height
	  }, 500);
	  
	  return false;
	});

	$('.logo a').on('click', function(){
		$('html, body').animate({
		    scrollTop: 0
		  }, 500);
	});

	$('input, textarea').placeholder();

		
});