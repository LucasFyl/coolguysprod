/*jshint -W117 */
/*jslint latedef:false*/
/* jshint unused:false */
(function(){
	'use strict';
	
	var Navigation = {
		init: function(){
			TweenMax.set('#navigation', {display:'none'});
			Navigation.bindEvents();
		},
		open: function(){
			var navTl = new TimelineMax({paused:true});

			navTl.set('#navigation li, #navigation li a', {opacity:0})
				 .set('#navigation li a', {y:20})
				 .set('#navigation', {display:'block'})
				 .staggerFromTo('#navigation li', 0.25, {y:-100,opacity:0}, {y:0,opacity:1,ease:Power3.easeOut}, 0.05)
				 .staggerTo('#navigation li a', 0.5, {opacity:1,y:0,ease:Power2.easeOut}, 0.1, '-=0.25');
			navTl.play();
		},
		close: function(){
			TweenMax.to('#navigation li', 0.35, {y:20,opacity:0,ease:Power3.easeIn});
			TweenMax.set('#navigation', {display:'none',delay:0.35});
		},
		bindEvents: function(){
			$('body').on('click', '.menu-trigger', function(event){
				event.preventDefault();
				if ( $(this).hasClass('trigger') ) {
					$(this).removeClass('trigger').addClass('close');
					TweenMax.to('.arrows div', 0.25, {opacity:0,ease:Power2.easeOut});
					Navigation.open();
				} else {
					$(this).removeClass('close').addClass('trigger');
					TweenMax.to('.arrows div', 0.25, {opacity:1,ease:Power2.easeOut,delay:0.5});
					Navigation.close();
				}
			});
			$(document).keyup(function(event){
				if(event.which === 27) {
					$('.menu-trigger').removeClass('close').addClass('trigger');
				  	Navigation.close();
				}
			});	
		}
	};

	Navigation.init();

})();