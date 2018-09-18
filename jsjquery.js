$(function(){


// 	$('#global').fullpage( {
// 	//Navigation
// 	menu: '#menu',
// 	lockAnchors: false,
// 	anchors:['firstPage', 'secondPage'],
// 	navigation: false,
// 	navigationPosition: 'right',
// 	navigationTooltips: ['firstSlide', 'secondSlide'],
// 	showActiveTooltip: false,
// 	slidesNavigation: false,
// 	slidesNavPosition: 'bottom',

// 	//Scrolling
// 	css3: false, //changt de true en false//
// 	scrollingSpeed: 700,
// 	autoScrolling: true,
// 	fitToSection: true,
// 	fitToSectionDelay: 1000,
// 	scrollBar: false,
// 	easing: 'easeInOutCubic',
// 	easingcss3: 'ease',
// 	loopBottom: false,
// 	loopTop: false,
// 	loopHorizontal: true,
// 	continuousVertical: false,
// 	continuousHorizontal: false,
// 	scrollHorizontally: false,
// 	interlockedSlides: false,
// 	dragAndMove: false,
// 	offsetSections: false,
// 	resetSliders: false,
// 	fadingEffect: true,
// 	normalScrollElements: '#element1, .element2',
// 	scrollOverflow: false,
// 	scrollOverflowReset: false,
// 	scrollOverflowOptions: null,
// 	touchSensitivity: 15,
// 	normalScrollElementTouchThreshold: 5,
// 	bigSectionsDestination: null,

// 	//Accessibility
// 	keyboardScrolling: true,
// 	animateAnchor: true,
// 	recordHistory: true,

// 	//Design
// 	controlArrows: true,
// 	verticalCentered: true,
// 	sectionsColor : ['#ccc', '#fff'],
// 	paddingTop: '3em',
// 	paddingBottom: '10px',
// 	fixedElements: '#header, .footer',
// 	responsiveWidth: 0,
// 	responsiveHeight: 0,
// 	responsiveSlides: false,
// 	parallax: false,
// 	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

// 	//Custom selectors
// 	sectionSelector: '.section',
// 	slideSelector: '.slide',

// 	lazyLoading: true,

// 	//events//
// 	// onLeave: function(origin, destination, direction){},
// 	// afterLoad: function(origin, destination, direction){},
// 	// afterRender: function(){},
// 	// afterResize: function(width, height){},
// 	// afterResponsive: function(isResponsive){},
// 	// afterSlideLoad: function(section, origin, destination, direction){},
// 	// onSlideLeave: function(section, origin, destination, direction){}
// });



	// $('#global').fullpage({
	// sectionSelector:'.section',
	// });


	// var ouvert = false;
	// 	$('#burger').on('click', function(){
			
	// 		if(ouvert == false){
	// 		$('#navsecond').addClass('active');
	// 		$('#burger').addClass('active');

	// 			ouvert=true;
	// 			//il faut mettre la variable ouvert en true pour dire que c'est ouvert
	// 		}else{
	// 		$('#navsecond').removeClass('active');
	// 		$('#burger').removeClass('active');
	// 		ouvert=false;
	// 		}

	// 	});

 //    var phone= $(window).width();
 //    console.log(phone);

 //    if(phone < 469){
 //    $(window).removeClass('section');
	// };



//arrow button//
	$(document).on('click', '.arrowbottom', function(){
  	$.fn.fullpage.moveSectionDown();
	});

//hero slider//
	// $('.fullBackground').fullClip({
	//   images: [ 'images/green-rice-egg-avocado-bowl-4.jpg','images/terrasserestau.jpg', 'images/Vegan-Buddha-Bowl-with-Spring-Vegetables.jpg', 'images/ouverture.png', 'images/sor1.jpg'],
	//   transitionTime: 2000,
	//   wait: 5000,
	// });
	
// insta
	var feed = new Instafeed({
        get: 'user',
        userId: 'b1ron',
        clientId: 'f4bb3150aed54ee38738c5f0a4df9775',
        accessToken:'225791328.f4bb315.20d6b09f9abe42d68cd55e871925e350'

    });
    feed.run();



	
});

