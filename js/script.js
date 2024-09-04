
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

// $(document).ready(function() {
//   var rowSize = 4; // Assuming 4 members per row

//   $('#readMoreBtn').click(function() {
//       var members = $('.members .member_image');
//       var visibleCount = members.filter(':visible').length;

//       // Show the next row of members
//       members.slice(visibleCount, visibleCount + rowSize).show();

//       // Check if all members are now displayed
//       if (visibleCount + rowSize >= members.length) {
//           $(this).hide();
//       }
//       $('#readLessBtn').show();
//   });

//   $('#readLessBtn').click(function() {
//       var members = $('.members .member_image');
//       var visibleCount = members.filter(':visible').length;

//       // Hide the last row of members
//       members.slice(visibleCount - rowSize, visibleCount).hide();

//       // Check if only the first two members are visible
//       if (visibleCount - rowSize <= 8) {
//           $(this).hide();
//       }
//       $('#readMoreBtn').show();
//   });

//   // Initial state: hide the "Read Less" button
//   $('#readLessBtn').hide();
// });


/*====================================================
                 Member js
======================================================*/

$(document).ready(function () {
    (function () {
        // Cache selectors
        var $memberButtons = $('.member-filter-btn');
        var $communityMembers = $('.community_members');
        var $executiveHeader = $('#executive-header');
        var $trustHeader = $('#trust-header');
  
        // Set the initial active button and display the corresponding members
        var initialCategory = $memberButtons.data('member-filter');
        console.log('initialCategory', initialCategory)
        setActiveCategory(initialCategory);
  
        // Event delegation for member filter buttons
        $('.member_filter').on('click', '.member-filter-btn', function () {
            console.log('member_filter', $(this).data('member-filter'))
            var category = $(this).data('member-filter');
            setActiveCategory(category);
        });
  
        // Function to set the active category and display members
        function setActiveCategory(category) {
            // Add 'active' class to the selected button and remove from others
            $memberButtons.removeClass('active');
            $memberButtons.filter('[data-member-filter="' + category + '"]').addClass('active');
  
            // Display 8 members in two rows for the selected category
            var count = 0;
            $communityMembers.each(function () {
                var $member = $(this);
                console.log('member', $member)
                if ($member.data('member-category') === category && count < 8) {
                    $member.show();
                    count++;
                    console.log('member', $member)
                } else {
                    $member.hide();
                }
            });
  
            // Toggle headers based on the category
            $executiveHeader.toggle(category === 'executive');
            $trustHeader.toggle(category === 'trust');
        }
    })();
  });



$(document).ready(function() {
    var rowSize = 4; // Number of items per row
    var initialRows = 2; // Initially display 2 rows (8 items)
    var members = $('.members .member_image');
    
    // Initially show the first 8 items
    members.slice(0, initialRows * rowSize).show();
    
    // Hide the rest
    members.slice(initialRows * rowSize).hide();
    
    // Handle "Read More" button click
    $('#readMoreBtn').click(function() {
        var visibleCount = members.filter(':visible').length;
        
        // Show the next row of items
        members.slice(visibleCount, visibleCount + rowSize).show();
        
        // Check if all items are displayed
        if (visibleCount + rowSize >= members.length) {
            $(this).hide();
        }
        $('#readLessBtn').show();
    });

    $('#readLessBtn').click(function() {
        var visibleCount = members.filter(':visible').length;
    
        // Calculate the total number of fully visible rows
        var rowSizes = visibleCount / rowSize;
        var fullRows = Math.floor(rowSizes); // Number of fully visible rows
        var fractionalPart = rowSizes - fullRows; // Fractional part of the last row
    
        console.log('rowSizes:', rowSizes, 'fullRows:', fullRows, 'fractionalPart:', fractionalPart);
    
        if (fractionalPart > 0) {
            // Hide the fractional part first
            var fractionalCount = Math.ceil(fractionalPart * rowSize);
            members.slice(visibleCount - fractionalCount, visibleCount).hide();
        } else {
            // If there is no fractional part, hide a full row
            members.slice(visibleCount - rowSize, visibleCount).hide();
        }
    
        // Update the visible count after hiding items
        visibleCount = members.filter(':visible').length;
    
        // Check if only the initial rows are visible
        if (visibleCount <= initialRows * rowSize) {
            $(this).hide();
        }
    
        $('#readMoreBtn').show();
    });

    // Initial state: hide the "Read Less" button
    $('#readLessBtn').hide();
  });




  /*====================================================
                 image lightbox js
======================================================*/

//   $(document).ready(function() {
//       // Select all <a> tags within .gallery_container
//       var $galleryLinks = $('.gallery_container a');

//       // Hide all <a> tags beyond the first 8
//       if ($galleryLinks.length > 8) {
//           $galleryLinks.slice(8).hide();
//       }
//   });

$(document).ready(function() {
    var rowSize = 4; // Number of items per row
    var initialRows = 2; // Initially display 2 rows (8 items)
    var members = $('.lightbox');
    
    // Initially show the first 8 items
    members.slice(0, initialRows * rowSize).show();
    
    // Hide the rest
    members.slice(initialRows * rowSize).hide();
    
    // Handle "Read More" button click
    $('#readMoreImg').click(function() {
        var visibleCount = members.filter(':visible').length;
        
        // Show the next row of items
        members.slice(visibleCount, visibleCount + rowSize).show();
        
        // Check if all items are displayed
        if (visibleCount + rowSize >= members.length - 1) {
            $(this).hide();
        }
        $('#readLessImg').show();
    });
  
    // // Handle "Read Less" button click
    // $('#readLessImg').click(function() {
    //     var visibleCount = members.filter(':visible').length;
        
    //     // Hide the last row of items
    //     members.slice(visibleCount - rowSize, visibleCount).hide();
        
    //     // Check if only the initial rows are visible
    //     if (visibleCount - rowSize <= initialRows * rowSize) {
    //         $(this).hide();
    //     }
    //     $('#readMoreImg').show();
    // });

    $('#readLessImg').click(function() {
        var visibleCount = members.filter(':visible').length;
    
        // Calculate the total number of fully visible rows
        var rowSizes = visibleCount / rowSize;
        var fullRows = Math.floor(rowSizes); // Number of fully visible rows
        var fractionalPart = rowSizes - fullRows; // Fractional part of the last row
    
        console.log('rowSizes:', rowSizes, 'fullRows:', fullRows, 'fractionalPart:', fractionalPart);
    
        if (fractionalPart > 0) {
            // Hide the fractional part first
            var fractionalCount = Math.ceil(fractionalPart * rowSize);
            members.slice(visibleCount - fractionalCount, visibleCount).hide();
        } else {
            // If there is no fractional part, hide a full row
            members.slice(visibleCount - rowSize, visibleCount).hide();
        }
    
        // Update the visible count after hiding items
        visibleCount = members.filter(':visible').length;
    
        // Check if only the initial rows are visible
        if (visibleCount <= initialRows * rowSize) {
            $(this).hide();
        }
    
        $('#readMoreImg').show();
    });
    
  
    // Initial state: hide the "Read Less" button
    $('#readLessImg').hide();
  });
  

