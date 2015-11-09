/*jshint -W117 */
/*jslint latedef:false*/
/* jshint unused:false */
var isMobile = false; //initiate as false

// Page load event 
function initPage(){
	'use strict';


	detectMobile();
	hideLoader();

	if ( $('#content.home').length ) {

	} else if ( $('#content.work').length ) {
		initVideoPage();
		initSlider();
	} else if ( $('#content.about').length ) {
		TweenMax.set('html', {overflow:'auto'});
		$('body').addClass('about');
	}
}
function detectMobile(){
	'use strict';
	
	// device detection
	if( $('.isMobile').is(':visible') ) {
	 	isMobile = true;
	 	TweenMax.set('html',{overflowX:'hidden'});
	}

	if (isMobile === true) {
		console.log('isMobile:',isMobile);
	} else {
		console.log('isMobile:',isMobile);
	}

}
function hideLoader(){
	'use strict';
	
}
function resize() {
	'use strict';
	
}
function initSlider() {
	'use strict';
	
	$('.main-content').slick({
		infinite: true,
		speed: 800,
		autoplay: true,
		fade: true,
		dots: true,
		appendArrows: $('#content .arrows'),
		nextArrow: '<div class="slick-arrow next">next</div>',
		prevArrow: '<div class="slick-arrow prev">previous</div>'
	});
}
function initVideoPage(){
	'use strict';
	var video, target;

	var openVideo = function(video, target) {
		TweenMax.set('.modal .modal-inner > *', {opacity:0,display:'none'});
		TweenMax.set(target, {opacity:1,display:'block',delay:0.1});
		video = null; target = null;
	};

	$('body').on('click', '.play-btn', function(){
		video = $(this).attr('data-video');
		target = $('body').find('.'+video);
		openVideo(video, target);
	});
}


console.log('isMobile:',isMobile);

$(document).ready(function(){
	'use strict';

 	initPage();
 	window.onresize = resize;
 });