(function($) {
    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    $(".mainmenu-area #mainmenu li a").on("click", function() {
        $(".navbar-collapse").removeClass("in");
    });
    new WOW().init({
        mobile: true,
    });
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    $('.testimonials').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right" ></i>'],
        items: 1
    });
    $('.screen-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right" ></i>'],
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        center: true,
    });
    $('.clients').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right" ></i>'],
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });
    var magnifPopup = function() {
        $('.work-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };
    magnifPopup();
    $('.header-area').parallax("50%", -0.4);
    $('.price-area').parallax("50%", -0.5);
    $('.testimonial-area').parallax("10%", -0.2);
    $('#accordion .panel-title a').prepend('<span></span>');

    function doAnimations(elems) {
        var animEndEv = 'webkitAnimationEnd animationend';
        elems.each(function() {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function() {
                $this.removeClass($animationType);
            });
        });
    }
    var $myCarousel = $('.caption-slider'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
    $myCarousel.carousel();
    doAnimations($firstAnimatingElems);
    $myCarousel.carousel('pause');
    $myCarousel.on('slide.bs.carousel', function(e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });
    $('.mainmenu-area a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
    $(window).on("load", function() {
        $('.preloader').fadeOut(500);
    });
})(jQuery);