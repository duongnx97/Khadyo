(function($) {

    "use strict"
    jQuery(document).ready(function() {

        // Mobile-menu
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991.99"
        });

        // ToTop [Hand-Code].
        $('.scrollup').on('click', function() {
            $("html").animate({
                "scrollTop": '0'
            }, 1200);
        });
        $(window).on('scroll', function() {
            var toTopVisible = $('html').scrollTop();
            if (toTopVisible > 500) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        // MouseHover Animation home 1
        var hoverLayer = $(".banner-area");
        var heroImgOne = $(".p-shape-1");
        var heroImgTwo = $(".p-shape-2");
        var heroImgThree = $(".p-shape-3");
        var heroImgFour = $(".p-shape-4");
        hoverLayer.mousemove(function(e) {
            var valueX = (e.pageX * -1) / 50;
            var valueY = (e.pageY * -1) / 60;
            heroImgOne.css({
                transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
            });
        });
        hoverLayer.mousemove(function(e) {
            var valueX = (e.pageX * -1) / 30;
            var valueY = (e.pageY * -1) / 40;
            heroImgTwo.css({
                transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
            });
        });
        hoverLayer.mousemove(function(e) {
            var valueX = (e.pageX * -1) / 20;
            var valueY = (e.pageY * -1) / 30;
            heroImgThree.css({
                transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
            });
        });
        hoverLayer.mousemove(function(e) {
            var valueX = (e.pageX * -1) / 40;
            var valueY = (e.pageY * -1) / 50;
            heroImgFour.css({
                transform: "translate3d(" + valueX + "px," + valueY + "px, 0)"
            });
        });

        // Testimonial 
        $('.testimonial-active').slick({
            dots: true,
            infinite: false,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        //   Slider-gallery
        $('.slider-gallery-active').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 4,
            centerMode: true,
            variableWidth: true,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,

                    }
                }
            ]
        });

        // Index-blog-slider-active
        $('.blog-slider-active').slick({
            dots: true,
            infinite: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // Countdown 
        $('.countdown').downCount({
            date: '06/28/2021 12:00:00',
            offset: +6
        }, function() {
            alert('Countdown done!');
        });

        // Food counter
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

    });

    jQuery(window).on('load', function() {

        // WOW JS
        new WOW().init();

        // Preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

    });

})(jQuery);