/*global $, window*/
$(function () {
	"use strict";

	//Nice Scroll
	$('html').niceScroll({
		cursorcolor: '#f9974f',
		cursorwidth: 10,
		cursorborder: '1px solid transparent',
		cursorborderradius: 0,
		zindex: 99999
	});
	
	
	
	$(window).scroll(function () {
		var navbar = $('.navbar');
			
		
		if ($(this).scrollTop() >= navbar.height()) {
			navbar.addClass('scrolled');
		} else {
			navbar.removeClass('scrolled');
		}
	});
	
	//add active class on li when i clicked on it
	$('.navbar ul li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	
	$('.tab-switch li').click(function () {
		// add active class on li
		$(this).addClass('selected').siblings().removeClass('selected');
		
		// hide all div
		$('.tab-content div').hide();
		
		//show li which I selected
		$($(this).data('class')).show();
		
		
	});
	
	
	//hide placeholder
	var placeAttr = '',
		scrollTop = $('.scroll-top');
	
	$('[placeholder]').focus(function () {
		placeAttr = $(this).attr('placeholder');
		$(this).attr('placeholder', '');
	}).blur(function () {
		$(this).attr('placeholder', placeAttr);
	});
	
	
	
	// show and hide scroll-to-top button when scrolling
	$(window).scroll(function () {
		var navbar = $('.navbar');
		
		if ($(this).scrollTop() >= navbar.height()) {
			navbar.addClass('scrolled');
		} else {
			navbar.removeClass('scrolled');
		}
		
		if ($(this).scrollTop() >= 400) {
			scrollTop.fadeIn(400);
		} else {
			scrollTop.fadeOut(400);
		}
		
		
	});
	
	// click on scroll to back to top
	scrollTop.click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	});
});
