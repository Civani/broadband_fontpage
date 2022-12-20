"use strict";function stickyHeader(){if($('.stricky').length){var strickyScrollPos=100;if($(window).scrollTop()>strickyScrollPos){$('.stricky').addClass('stricky-fixed');$('.scroll-to-top').fadeIn(1500)}else if($(this).scrollTop()<=strickyScrollPos){$('.stricky').removeClass('stricky-fixed');$('.scroll-to-top').fadeOut(1500)}}}
function scrollToTop(){if($('.scroll-to-target').length){$(".scroll-to-target").on('click',function(){var target=$(this).attr('data-target');$('html, body').animate({scrollTop:$(target).offset().top},1000)})}}
function searchbox(){if($('.seach-toggle').length){$('.seach-toggle').on('click',function(){$(this).toggleClass('active');$(this).next('.search-box').toggleClass('now-visible')})}}
function projectMasonaryLayout(){if($('.masonary-layout').length){$('.masonary-layout').isotope({layoutMode:'masonry'})}
if($('.post-filter').length){$('.post-filter li').children('span').on('click',function(){var Self=$(this);var selector=Self.parent().attr('data-filter');$('.post-filter li').children('span').parent().removeClass('active');Self.parent().addClass('active');$('.filter-layout').isotope({filter:selector,animationOptions:{duration:500,easing:'linear',queue:!1}});return!1})}
if($('.post-filter.has-dynamic-filter-counter').length){var activeFilterItem=$('.post-filter.has-dynamic-filter-counter').find('li');activeFilterItem.each(function(){var filterElement=$(this).data('filter');console.log(filterElement);var count=$('.gallery-content').find(filterElement).length;$(this).children('span').append('<span class="count"><b>'+count+'</b></span>')})}}
function prettyPhoto(){$("a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:3000,autoplay_slideshow:!1,fullscreen:!0,social_tools:!1})}
function CounterNumberChanger(){var timer=$('.timer');if(timer.length){timer.appear(function(){timer.countTo()})}}
function tooltip(){if($('.tool_tip').length){$('.tool_tip').tooltip()};$}
function accordion(){if($('.accordion-box').length){$(".accordion-box .accord-btn").on('click',function(){if($(this).hasClass('active')!==!0){$('.accordion .accord-btn').removeClass('active')}
if($(this).next('.accord-content').is(':visible')){$(this).removeClass('active');$(this).next('.accord-content').slideUp(500)}else{$(this).addClass('active');$('.accordion .accord-content').slideUp(500);$(this).next('.accord-content').slideDown(500)}})}}
function prealoader(){if($('.prealoader').length){$('.prealoader').delay(2000).fadeOut(500)}}
function thmScrollAnim(){if($('.wow').length){var wow=new WOW({mobile:!1});wow.init()}}
if($("#contact-form").length){$("#contact-form").validate({submitHandler:function(form){var form_btn=$(form).find('button[type="submit"]');var form_result_div='#form-result';$(form_result_div).remove();form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');var form_btn_old_msg=form_btn.html();form_btn.html(form_btn.prop('disabled',!0).data("loading-text"));$(form).ajaxSubmit({dataType:'json',success:function(data){if(data.status=='true'){$(form).find('.form-control').val('')}
form_btn.prop('disabled',!1).html(form_btn_old_msg);$(form_result_div).html(data.message).fadeIn('slow');setTimeout(function(){$(form_result_div).fadeOut('slow')},6000)}})}})}
if($(".team-carousel").length){$(".team-carousel").owlCarousel({autoplay:!0,loop:!0,autoplayHoverPause:!0,dotsEach:!0,margin:30,dotsSpeed:1000,smartSpeed:1000,pagination:!0,nav:!1,items:4,responsive:{0:{items:1},480:{items:2},768:{items:2},992:{items:3},1366:{items:4}}})};if($(".brand-carousel").length){$(".brand-carousel").owlCarousel({autoplay:!0,loop:!0,autoplayHoverPause:!0,pagination:!1,dotsSpeed:1000,smartSpeed:1500,margin:30,nav:!0,items:6,navElement:"span",navText:["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],responsive:{0:{items:1},450:{items:2},767:{items:3},992:{items:4},1200:{items:5}}})};if($(".testimonial-carousel").length){$(".testimonial-carousel").owlCarousel({autoplay:!0,loop:!0,autoplayHoverPause:!0,pagination:!1,dotsSpeed:1000,smartSpeed:1500,margin:30,items:3,nav:!1,responsive:{0:{items:1},450:{items:1},767:{items:1},992:{items:2},1200:{items:3}}})};function teamCarosule(){if($('#our-team-construct .owl-carousel').length){$('#our-team-construct .owl-carousel').owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],autoplay:!0,autoplayTimeout:3000,autoplayHoverPause:!0,responsive:{0:{items:1},480:{items:1},600:{items:2},1000:{items:4}}})}}
function projectcarousel(){if($('.latest-project-carousel').length){$('.latest-project-carousel').owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],autoplay:!0,autoplayTimeout:3000,smartSpeed:1200,autoplayHoverPause:!0,responsive:{0:{items:1},480:{items:1},767:{items:3},1000:{items:4}}})}}
function imgpopup(){if($('.img-popup').length){var groups={};$('.img-popup').each(function(){var id=parseInt($(this).attr('data-group'),10);if(!groups[id]){groups[id]=[]}
groups[id].push(this)});$.each(groups,function(){$(this).magnificPopup({type:'image',closeOnContentClick:!0,closeBtnInside:!1,gallery:{enabled:!0}})})}}
if($('.tabs-box').length){$('.tabs-box .tab-buttons .tab-btn').on('click',function(e){e.preventDefault();var target=$($(this).attr('data-tab'));target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');$(this).addClass('active-btn');target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');$(target).fadeIn(300);$(target).addClass('active-tab')})}
jQuery(document).on('ready',function(){(function($){scrollToTop();prettyPhoto();CounterNumberChanger();accordion();searchbox();tooltip();thmScrollAnim();teamCarosule();projectcarousel();imgpopup()})(jQuery)});jQuery(window).on('scroll',function(){(function($){stickyHeader()})(jQuery)});var win=$(window);win.on('load',function(){$('.page-loader').delay(350).fadeOut('slow')});$('#hero-slider').nivoSlider({prevText:'<span>P</span><i class="zmdi zmdi-long-arrow-left"></i>',nextText:'<span>N</span><i class="zmdi zmdi-long-arrow-right"></i>',controlNav:!1,effect:'boxRainGrow',pauseTime:5000,});$('#mobile-nav').meanmenu({meanMenuContainer:'.services-mobile-menu',meanScreenWidth:"767"});jQuery(window).on('load',function(){(function($){projectMasonaryLayout()})(jQuery)})