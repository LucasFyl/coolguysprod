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
		landingAnimHome();
	} else if ( $('#content.work').length ) {
		landingAnimWork();
		initVideoPage();
		initSlider();
	} else if ( $('#content.about').length ) {
		landingAnimAbout();
		initAboutPage();
	} else if ( $('#content.contact').length ) {
		landingAnimContact();
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
	 if ( $('#content.about').length ) {
		var footerH = $('footer').height();
		TweenMax.set('.main .row:nth-child(3)', {marginBottom:footerH});
	 }
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

function initAboutPage() {
	'use strict';
	var footerH = $('footer').height();
	TweenMax.set('.main .row:nth-child(3)', {marginBottom:footerH});

	TweenMax.set('html', {overflow:'auto'});
	$('body').addClass('about');
}

function landingAnimHome() {
	'use strict';

	var landingTl = new TimelineMax({paused:true});
	TweenMax.set('.menu .menu-trigger, .center span.title, .social li', {y:-30,opacity:0});
	TweenMax.set('.center h1', {y:20,opacity:0});
	TweenMax.set('.center a', {opacity:0,scale:0.5});
	
	landingTl.to('.menu .menu-trigger', 0.25, {y:0,opacity:1,ease:Power3.easeOut})
			 .staggerTo('.social li', 0.25, {y:0,opacity:1,ease:Power3.easeOut}, 0.1, '-=0.25')
			 .staggerTo('.center span.title, .center h1', 0.5, {y:0,opacity:1,ease:Power2.easeOut}, 0.2)
			 .to('.center a', 0.5, {opacity:1,scale:1,ease:Power2.easeOut});

	setTimeout(function(){landingTl.play();}, 200);
}
function landingAnimWork(){
	'use strict';

	var landingTl = new TimelineMax({paused:true});
	TweenMax.set('.menu .menu-trigger, .social li', {y:-30,opacity:0});
	TweenMax.set('.fixed-content h1, .fixed-content h3', {y:20,opacity:0});
	TweenMax.set('.main-content .vertical-center', {opacity:0,scale:0.9});

	landingTl.to('.menu .menu-trigger', 0.25, {y:0,opacity:1,ease:Power3.easeOut})
			 .staggerTo('.social li', 0.25, {y:0,opacity:1,ease:Power3.easeOut}, 0.1, '-=0.25')
			 .staggerTo('.fixed-content h1, .fixed-content h3', 0.5, {y:0,opacity:1,ease:Power2.easeOut}, 0.2)
			 .to('.main-content .vertical-center', 1, {opacity:1,scale:1,ease:Power2.easeOut});

	setTimeout(function(){landingTl.play();}, 200);
}
function landingAnimAbout() {
	'use strict';
	var landingTl = new TimelineMax({paused:true});
	TweenMax.set('.menu .menu-trigger, .social li', {y:-30,opacity:0});
	TweenMax.set('.fixed-content h1, .fixed-content h3', {y:20,opacity:0});
	TweenMax.set('.landing h2', {y:-20,opacity:0});

	landingTl.to('.menu .menu-trigger', 0.25, {y:0,opacity:1,ease:Power3.easeOut})
			 .staggerTo('.social li', 0.25, {y:0,opacity:1,ease:Power3.easeOut}, 0.1, '-=0.25')
			 .staggerTo('.fixed-content h1, .fixed-content h3', 0.5, {y:0,opacity:1,ease:Power2.easeOut}, 0.2)
			 .to('.landing h2', 0.5, {y:0,opacity:1,ease:Power3.easeOut}, '-=0.25');

	setTimeout(function(){landingTl.play();}, 200);
}
function landingAnimContact() {
	'use strict';
	var landingTl = new TimelineMax({paused:true});
	TweenMax.set('.menu .menu-trigger, .social li', {y:-30,opacity:0});
	TweenMax.set('.fixed-content h1, .fixed-content h3', {y:20,opacity:0});
	TweenMax.set('.yellow-row', {bottom:'-30vh'});

	landingTl.to('.menu .menu-trigger', 0.25, {y:0,opacity:1,ease:Power3.easeOut})
			 .staggerTo('.social li', 0.25, {y:0,opacity:1,ease:Power3.easeOut}, 0.1, '-=0.25')
			 .staggerTo('.fixed-content h1, .fixed-content h3', 0.5, {y:0,opacity:1,ease:Power2.easeOut}, 0.2)
			 .to('.yellow-row', 0.3, {bottom:'5rem',ease:Power2.easeOut});

	setTimeout(function(){landingTl.play();}, 200);
}
$(document).ready(function(){
	'use strict';

 	initPage();
 	window.onresize = resize;
 });