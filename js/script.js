
/*=========================================
               Preloader
========================================*/

$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(1000).fadeOut();
})



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

// $(window).on('load', function () {
//     $("#home_title").addClass("animated fadeInDown");
//     $("#home_subtitle").addClass("animated fadeInLeft");
//     $("#home_desk").addClass("animated zoomIn");
//     $("#home_contact").addClass("animated zoomIn");
//     $("#arrow-down i").addClass("animated fadeInDown infinite");
// })




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

/*=========================================
                 Loghtbox js
========================================*/
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})


/*====================================================
                 Menu bar Active class
======================================================*/

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
  
    // Define the sections you want to monitor
    var sections = document.querySelectorAll('[data-scroll-section]');

    console.log(sections);
  
    sections.forEach(function(section) {
      var top = section.offsetTop;
      var bottom = top + section.offsetHeight;
  
      // Check if the current scroll position is within the section
      if (scrollPosition >= top && scrollPosition < bottom) {
        // Add the "active" class to the corresponding navigation item
        var navItem = document.querySelector('nav a[href="#' + section.id + '"]');
        if (navItem) {
          navItem.classList.add('active');
        }
      } else {
        // Remove the "active" class if the scroll position is outside the section
        var navItem = document.querySelector('nav a[href="#' + section.id + '"]');
        if (navItem) {
          navItem.classList.remove('active');
        }
      }
    });
  });
  
  
  /*====================================================
                 swiper Js
======================================================*/

var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Autoplay
  autoplay: {
      delay: 7000, // Delay between slides in milliseconds (5 seconds)
      disableOnInteraction: false, // Continue autoplay even when user interacts with swiper
  },

  // If you need pagination
  pagination: {
      el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});