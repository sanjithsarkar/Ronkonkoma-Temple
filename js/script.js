
/*=========================================
               Preloader
========================================*/

$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(500).fadeOut();
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

// Set the initial state with the #slider navigation link active
$('nav a[href="#slider"]').addClass('active');

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    // console.log('scrollPosition = ',scrollPosition);

    var initialScrollPosition = 310;
    
    if (scrollPosition <= initialScrollPosition) {
        $('nav a[href="#slider"]').addClass('active');
    } else if(scrollPosition >= initialScrollPosition) {
        $('nav a[href="#slider"]').removeClass('active');
    }else{
      return;
    }
  
    // Define the sections you want to monitor
    var sections = document.querySelectorAll('[data-scroll-section]');

    // console.log('sections = ',sections);
  
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
                 gallary image slider
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


  /*====================================================
                 Member js
======================================================*/

// document.getElementById('readMoreBtn').addEventListener('click', function() {
//   var members = document.querySelectorAll('.members .member_image');
//   for (var i = 9; i < members.length; i++) {
//       members[i].style.display = 'block';
//   }
//   this.style.display = 'none'; // Hide the "Read More" button after clicking
// });

// document.getElementById('readMoreBtn').addEventListener('click', function() {
//   var members = document.querySelectorAll('.members .member_image');
//   var visibleCount = 0;
//   var rowSize = 4; // Assuming 4 members per row

//   // Count currently visible members
//   for (var i = 0; i < members.length; i++) {
//       if (members[i].style.display !== 'none') {
//           visibleCount++;
//       }
//   }

//   // Show the next row of members
//   for (var j = visibleCount; j < visibleCount + rowSize; j++) {
//       if (members[j]) {
//           members[j].style.display = 'block';
//       }
//   }

//   // Hide the button if all members are visible
//   if (visibleCount + rowSize >= members.length) {
//       this.style.display = 'none';
//   }
// });


// $(document).ready(function() {
//   $('#readMoreBtn').click(function() {
//       var members = $('.members .member_image');
//       var visibleCount = members.filter(':visible').length;
//       var rowSize = 4; // Assuming 4 members per row

//       // Show the next row of members
//       members.slice(visibleCount, visibleCount + rowSize).show();

//       // Hide the button if all members are visible
//       if (visibleCount + rowSize >= members.length) {
//           $(this).hide();
//       }
//   });
// });

// $(document).ready(function() {
//   $('#readMoreBtn').click(function() {
//       var members = $('.members .member_image');
//       var visibleCount = members.filter(':visible').length;
//       var rowSize = 4; // Assuming 4 members per row

//       // If all members are currently displayed, hide all except the first two
//       if (visibleCount === members.length) {
//           members.slice(4).hide();
//           $(this).text('Read More');
//       } else {
//           // Show the next row of members
//           members.slice(visibleCount, visibleCount + rowSize).show();

//           // If all members are now displayed, change button text to "Show Less"
//           if (visibleCount + rowSize >= members.length) {
//               $(this).text('Show Less');
//           }
//       }
//   });
// });

// $(document).ready(function() {
//   $('#readLessBtn').click(function() {
//       var members = $('.members .member_image');
//       var visibleCount = members.filter(':visible').length;
//       var rowSize = 4; // Assuming 4 members per row

//       members.slice(4).hide();
//       // $(this).text('Read More');
//   });
// });


// $(document).ready(function() {
//   var rowSize = 4; // Assuming 4 members per row

//   $('#readMoreBtn').click(function() {
//       var members = $('.members .member_image');
//       var visibleCount = members.filter(':visible').length;

//       // Show the next row of members
//       members.slice(visibleCount, visibleCount + rowSize).show();

//       // If all members are now displayed, change button text to "Show Less"
//       if (visibleCount + rowSize >= members.length) {
//           $(this).hide();
//           $('#readLessBtn').show();
//       }
//   });

//   $('#readLessBtn').click(function() {
//       var members = $('.members .member_image');
//       var visibleCount = members.filter(':visible').length;

//       // Hide the last row of members
//       members.slice(visibleCount - rowSize, visibleCount).hide();

//       // If all members are hidden except the first two, hide the "Read Less" button
//       if (visibleCount - rowSize <= 2) {
//           $(this).hide();
//           $('#readMoreBtn').show();
//       } else {
//           $('#readMoreBtn').show();
//       }
//   });

//   // Initial state: hide the "Read Less" button
//   $('#readLessBtn').hide();
// });

$(document).ready(function() {
  var rowSize = 4; // Assuming 4 members per row

  $('#readMoreBtn').click(function() {
      var members = $('.members .member_image');
      var visibleCount = members.filter(':visible').length;

      // Show the next row of members
      members.slice(visibleCount, visibleCount + rowSize).show();

      // Check if all members are now displayed
      if (visibleCount + rowSize >= members.length) {
          $(this).hide();
      }
      $('#readLessBtn').show();
  });

  $('#readLessBtn').click(function() {
      var members = $('.members .member_image');
      var visibleCount = members.filter(':visible').length;

      // Hide the last row of members
      members.slice(visibleCount - rowSize, visibleCount).hide();

      // Check if only the first two members are visible
      if (visibleCount - rowSize <= 8) {
          $(this).hide();
      }
      $('#readMoreBtn').show();
  });

  // Initial state: hide the "Read Less" button
  $('#readLessBtn').hide();
});
