/*========================================================================
                    Show and Hide Navigation Color
==========================================================================*/
$(function () {
    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {
        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {
        var $navbar = $(".navbar");
        var $navLinks = $(".nav-link, .navbar-brand");
        var $navbarBrandImg = $(".navbar-brand img");
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 50) {
            // Show White nav
            $navbar.addClass("bg-gray-400");
            $navLinks.addClass("text-dark");

            // Show Dark logo
            $navbarBrandImg.attr("src", "image/logo/logo-dark.png");

            // Show back to top button
            // $("#back-to-top").fadeIn();
        } else {
            // Hide White nav
            $navbar.removeClass("bg-gray-400");
            $navLinks.removeClass("text-white");

            // Show Dark text
            $navLinks.addClass("text-dark");

            // Show logo
            $navbarBrandImg.attr("src", "image/logo/logo.png");

            // Hide back to top button
            // $("#back-to-top").fadeOut();
        }
    }
});



/*=========================================
               Preloader
========================================*/

$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(1000).fadeOut();
})


/*=========================================
               Home
========================================*/



/*   =====================================
                Progress Bars
   =====================================*/

$(".progressElement").waypoint(function () {

    // code to execute when the waypoint is triggered
    $(".progress-bar").each(function () {
        $(this).animate({
            width: $(this).attr("aria-valuenow") + "%"
        }, 1000);
    });
    this.destroy();
}, { offset: 'bottom-in-view' });




/*=========================================
             Smooth Scrolling
========================================*/

$(function () {

    $(".smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #home, #about, #team, #service and etc

        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top
        }, 1000);

    });
});


/*=========================================
             Animate on scroll
========================================*/

new WOW().init();

$(window).on('load', function () {
    $("#home_title").addClass("animated fadeInDown");
    $("#home_subtitle").addClass("animated fadeInLeft");
    $("#home_desk").addClass("animated zoomIn");
    $("#home_contact").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
})




/*=========================================
           Back to Top Arrow
========================================*/



$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});


$("#back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
});




/*=========================================
           Type-it js
========================================*/

new TypeIt('#type-it', {
    speed: 200,
    waitUntilVisible: true,
    loop: true
})


/*=========================================
                 AOS
========================================*/

AOS.init();


/*=========================================
                 Locomtive
========================================*/

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });