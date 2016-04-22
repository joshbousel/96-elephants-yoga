$(function(){
	var $htmlBody = $('html, body');
	var donationLevelId;
	
	// Scroll from hero to start of challenge
	$('.yoga-hero .yoga-button').on('click',function(e){
		e.preventDefault();
		
		var offset = $('.yoga-content--challenge').offset();
		$('html, body').animate({ scrollTop: offset.top }, 250);
	});
	
	// Video toggler
	$('.yoga-content__pose-nav__item').on('click',function(e){
		e.preventDefault();
		
		var index = $(this).index();
		var navActiveClass = 'yoga-content__pose-nav__item--is-active';
		var embedActiveClass = 'yoga-content__video__embed--is-active';
		
		
		$('.yoga-content__pose-nav__item').each(function(i){
			if (i == index) {
				$(this).addClass(navActiveClass);
			} else {
				$(this).removeClass(navActiveClass);
			}
		});
		
		$('.yoga-content__video__embed').each(function(i){
			if (i == index) {
				$(this).addClass(embedActiveClass);
			} else {
				$(this).removeClass(embedActiveClass);
			}
		});
	});

	// Donation selection
	$('.yoga-donate__levels__level').on('click',function(e){
		e.preventDefault();
		
		var index = $(this).index();
		donationLevelId = $(this).data("id");
		var activeClass = 'yoga-donate__levels__level--is-active';
				
		$('.yoga-donate__levels__level').each(function(i){
			if (i == index) {
				$(this).addClass(activeClass);
			} else {
				$(this).removeClass(activeClass);
			}
		});
	});
	
	$('.yoga-donate .yoga-button').on('click',function(e){
		e.preventDefault();
		
		var donationLink = 'https://secure3.convio.net/wcs/site/Donation2?9342.donation=form1&amp;df_id=9342&set.DonationLevel='+donationLevelId;
		window.location.href = donationLink;
	});
	
	// Lightbox Functions
	function toggleLightbox(visible) {
		var lightboxClass = 'yoga-lightbox-visible';
		var $body = $('body');
				
		if (visible) {
			$body.addClass(lightboxClass);
		} else {
			$body.removeClass(lightboxClass);
		}
	}
	
	$('.yoga-legal-notice').on('click',function(e){
		e.preventDefault();
		toggleLightbox(true);
	});
	
	$('.yoga-lightbox__close-button').on('click',function(e){
		e.preventDefault();
		toggleLightbox(false);
	});

});