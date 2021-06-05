(function($) {

    "use strict"
    jQuery(document).ready(function() {

        // mobile-menu
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

    });

    jQuery(window).on('load', function() {

        // WOW JS
        new WOW().init();

        // Preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

    });

})(jQuery);