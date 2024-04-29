
/*=========================================
               Preloader
========================================*/

$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(600).fadeOut();
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

    // console.log(sections);
  
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
                 
======================================================*/

$(document).ready(function() {
  // Define the threshold width for mobile resolution (768 pixels is common)
  const mobileThreshold = 768;

  // Function to show or hide the div based on the viewport width
  function handleDivDisplay() {
      if ($(window).width() > mobileThreshold) {
          // Show the div when viewport width is less than the mobile threshold
          $('#gallery_slider').show();
      } else {
          // Hide the div when viewport width is greater than or equal to the mobile threshold
          $('#gallery_slider').hide();
      }
  }

  // Initial check when the document is ready
  handleDivDisplay();

  // Listen for window resize events and call the function to show or hide the div
  $(window).resize(function() {
      handleDivDisplay();
  });
});
