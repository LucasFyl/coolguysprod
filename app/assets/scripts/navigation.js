(function(){
	
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
				 .staggerTo('#navigation li a', 0.5, {opacity:1,y:0,ease:Power2.easeOut}, 0.1, "-=0.25");
			navTl.play();
		},
		close: function(){
			
		},
		bindEvents: function(){
			$('body').on('click', '.menu-trigger', function(event){
				event.preventDefault();
				Navigation.open();
			});
			$('body').on('click', 'close-menu', function(event){
				event.preventDefault();
				Navigation.close();
			});
			$(document).keyup(function(event){
				if(event.which == 27) {
				  	Navigation.close();
				}
			});	
		}
	}

	Navigation.init();

})();