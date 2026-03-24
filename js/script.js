/*=========================================
               Preloader
========================================*/
$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(500).fadeOut();
});

/*=========================================
             Smooth Scrolling
========================================*/
$(function () {
    $(".smooth-scroll").click(function (event) {
        event.preventDefault();
        var section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 800);
        // Close mobile nav
        $('#mobile-nav').addClass('hidden');
    });
});

/*=========================================
             AOS
========================================*/
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

/*=========================================
           Back to Top
========================================*/
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $('#back-to-top').css('display', 'flex');
    } else {
        $('#back-to-top').fadeOut();
    }
});

/*=========================================
           Lightbox
========================================*/
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});

/*=========================================
         Navigation Active State
========================================*/
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY + 100;
    var sections = document.querySelectorAll('section[id]');

    sections.forEach(function (section) {
        var top = section.offsetTop;
        var bottom = top + section.offsetHeight;
        var id = section.getAttribute('id');
        var navLink = document.querySelector('nav a[href="#' + id + '"]');

        if (navLink) {
            if (scrollPosition >= top && scrollPosition < bottom) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
});

/*=========================================
         Member Filter & Pagination
========================================*/
$(document).ready(function () {
    var $memberButtons = $('.member-filter-btn');
    var $communityMembers = $('.community_members');

    // Set initial
    setActiveCategory('executive');

    $('.member_filter').on('click', '.member-filter-btn', function () {
        var category = $(this).data('member-filter');
        setActiveCategory(category);
    });

    function setActiveCategory(category) {
        $memberButtons.removeClass('active');
        $memberButtons.filter('[data-member-filter="' + category + '"]').addClass('active');

        $communityMembers.each(function () {
            if ($(this).data('member-category') === category) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
});

// Member pagination
$(document).ready(function () {
    var rowSize = 4;
    var initialRows = 2;

    function manageMembers(categoryClass) {
        var members = $(categoryClass);
        members.slice(0, initialRows * rowSize).show();
        members.slice(initialRows * rowSize).hide();

        $('#readMoreBtn').off('click').on('click', function () {
            var visibleCount = members.filter(':visible').length;
            members.slice(visibleCount, visibleCount + rowSize).show();
            if (visibleCount + rowSize >= members.length) {
                $(this).hide();
            }
            $('#readLessBtn').show();
        });

        $('#readLessBtn').off('click').on('click', function () {
            var visibleCount = members.filter(':visible').length;
            var rowSizes = visibleCount / rowSize;
            var fullRows = Math.floor(rowSizes);
            var fractionalPart = rowSizes - fullRows;

            if (fractionalPart > 0) {
                var fractionalCount = Math.ceil(fractionalPart * rowSize);
                members.slice(visibleCount - fractionalCount, visibleCount).hide();
            } else {
                members.slice(visibleCount - rowSize, visibleCount).hide();
            }

            visibleCount = members.filter(':visible').length;
            if (visibleCount <= initialRows * rowSize) {
                $(this).hide();
            }
            $('#readMoreBtn').show();
        });

        $('#readLessBtn').hide();
    }

    manageMembers('.executive_member_image');

    $('.member-filter-btn').on('click', function () {
        var category = $(this).data('member-filter');
        if (category === 'executive') {
            manageMembers('.executive_member_image');
        } else if (category === 'trust') {
            manageMembers('.trust_member_image');
        }
    });
});

/*=========================================
         Gallery Lightbox Pagination
========================================*/
$(document).ready(function () {
    var rowSize = 4;
    var initialRows = 2;
    var members = $('.lightbox');

    members.slice(0, initialRows * rowSize).show();
    members.slice(initialRows * rowSize).hide();

    $('#readMoreImg').click(function () {
        var visibleCount = members.filter(':visible').length;
        members.slice(visibleCount, visibleCount + rowSize).show();
        if (visibleCount + rowSize >= members.length - 1) {
            $(this).hide();
        }
        $('#readLessImg').show();
    });

    $('#readLessImg').click(function () {
        var visibleCount = members.filter(':visible').length;
        var rowSizes = visibleCount / rowSize;
        var fullRows = Math.floor(rowSizes);
        var fractionalPart = rowSizes - fullRows;

        if (fractionalPart > 0) {
            var fractionalCount = Math.ceil(fractionalPart * rowSize);
            members.slice(visibleCount - fractionalCount, visibleCount).hide();
        } else {
            members.slice(visibleCount - rowSize, visibleCount).hide();
        }

        visibleCount = members.filter(':visible').length;
        if (visibleCount <= initialRows * rowSize) {
            $(this).hide();
        }
        $('#readMoreImg').show();
    });

    $('#readLessImg').hide();
});
