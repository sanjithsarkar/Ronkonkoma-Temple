/*=========================================
               Preloader
========================================*/
$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(400).fadeOut(600);
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
        }, 800, 'swing');
        // Close mobile nav
        $('#mobile-nav').addClass('hidden');
        var navToggle = document.getElementById('nav-toggle');
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

/*=========================================
             AOS — smoother config
========================================*/
AOS.init({
    duration: 700,
    once: true,
    offset: 60,
    easing: 'ease-out-cubic',
    anchorPlacement: 'top-bottom'
});

/*=========================================
           Back to Top — smooth show/hide
========================================*/
(function () {
    var backToTop = document.getElementById('back-to-top');
    var isVisible = false;

    window.addEventListener('scroll', function () {
        var shouldShow = window.scrollY > 400;
        if (shouldShow && !isVisible) {
            backToTop.style.display = 'flex';
            backToTop.style.opacity = '0';
            backToTop.style.transform = 'translateY(16px) scale(0.9)';
            requestAnimationFrame(function () {
                backToTop.style.transition = 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                backToTop.style.opacity = '1';
                backToTop.style.transform = 'translateY(0) scale(1)';
            });
            isVisible = true;
        } else if (!shouldShow && isVisible) {
            backToTop.style.opacity = '0';
            backToTop.style.transform = 'translateY(16px) scale(0.9)';
            setTimeout(function () {
                if (!isVisible) backToTop.style.display = 'none';
            }, 400);
            isVisible = false;
        }
    });
})();

/*=========================================
           Lightbox
========================================*/
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});

/*=========================================
         Navigation Active State + Scroll
========================================*/
(function () {
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        // Navbar background
        if (scrollPosition > 30) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }

        // Active section detection
        var sections = document.querySelectorAll('section[id]');
        var adjustedScroll = scrollPosition + 100;

        sections.forEach(function (section) {
            var top = section.offsetTop;
            var bottom = top + section.offsetHeight;
            var id = section.getAttribute('id');
            var navLinks = document.querySelectorAll('nav a[href="#' + id + '"]');

            navLinks.forEach(function (navLink) {
                if (adjustedScroll >= top && adjustedScroll < bottom) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            });
        });

        lastScroll = scrollPosition;
    });
})();

/*=========================================
     Intersection Observer — scroll reveal
========================================*/
(function () {
    var observerOptions = {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    };

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
        observer.observe(el);
    });

    // Also auto-observe section headers for subtle entrance
    document.querySelectorAll('.section-badge, .section-title-gradient').forEach(function (el) {
        if (!el.hasAttribute('data-aos')) {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        }
    });
})();

/*=========================================
     Counter animation for hero stats
========================================*/
(function () {
    var counters = document.querySelectorAll('.hero-stat-number');
    var animated = false;

    function animateCounters() {
        if (animated) return;
        animated = true;

        counters.forEach(function (counter) {
            var text = counter.textContent;
            var match = text.match(/(\d+)/);
            if (!match) return;

            var target = parseInt(match[0]);
            var suffix = text.replace(match[0], '');
            var duration = 1800;
            var startTime = null;

            function easeOutCubic(t) {
                return 1 - Math.pow(1 - t, 3);
            }

            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                var progress = Math.min((timestamp - startTime) / duration, 1);
                var easedProgress = easeOutCubic(progress);
                var current = Math.floor(easedProgress * target);
                counter.textContent = current + suffix;
                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    counter.textContent = target + suffix;
                }
            }

            counter.textContent = '0' + suffix;
            requestAnimationFrame(step);
        });
    }

    // Trigger when hero is visible
    var heroObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            setTimeout(animateCounters, 600);
            heroObserver.disconnect();
        }
    }, { threshold: 0.3 });

    var heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        heroObserver.observe(heroStats);
    }
})();

/*=========================================
     Smooth member filter transitions
========================================*/
$(document).ready(function () {
    var $memberButtons = $('.member-filter-btn');
    var $communityMembers = $('.community_members');

    setActiveCategory('executive');

    $('.member_filter').on('click', '.member-filter-btn', function () {
        var category = $(this).data('member-filter');
        setActiveCategory(category);
    });

    function setActiveCategory(category) {
        $memberButtons.removeClass('active');
        $memberButtons.filter('[data-member-filter="' + category + '"]').addClass('active');

        $communityMembers.each(function () {
            var $el = $(this);
            if ($el.data('member-category') === category) {
                $el.css({ opacity: 0, transform: 'translateY(16px)' }).show();
                setTimeout(function () {
                    $el.css({
                        transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        opacity: 1,
                        transform: 'translateY(0)'
                    });
                }, 30);
            } else {
                $el.css({ opacity: 0, transform: 'translateY(8px)' });
                setTimeout(function () { $el.hide(); }, 300);
            }
        });
    }
});

/*=========================================
     Member pagination — smooth
========================================*/
$(document).ready(function () {
    var rowSize = 4;
    var initialRows = 2;

    function manageMembers(categoryClass) {
        var members = $(categoryClass);
        members.slice(0, initialRows * rowSize).show().css({ opacity: 1 });
        members.slice(initialRows * rowSize).hide();

        $('#readMoreBtn').off('click').on('click', function () {
            var visibleCount = members.filter(':visible').length;
            var toShow = members.slice(visibleCount, visibleCount + rowSize);
            toShow.each(function (i) {
                var $el = $(this);
                $el.css({ opacity: 0, transform: 'translateY(20px)' }).show();
                setTimeout(function () {
                    $el.css({
                        transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        opacity: 1,
                        transform: 'translateY(0)'
                    });
                }, 60 * i);
            });
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
                members.slice(visibleCount - fractionalCount, visibleCount).css({ opacity: 0, transform: 'translateY(8px)' });
                setTimeout(function () {
                    members.slice(visibleCount - fractionalCount, visibleCount).hide();
                }, 300);
            } else {
                members.slice(visibleCount - rowSize, visibleCount).css({ opacity: 0, transform: 'translateY(8px)' });
                setTimeout(function () {
                    members.slice(visibleCount - rowSize, visibleCount).hide();
                }, 300);
            }

            setTimeout(function () {
                visibleCount = members.filter(':visible').length;
                if (visibleCount <= initialRows * rowSize) {
                    $('#readLessBtn').hide();
                }
                $('#readMoreBtn').show();
            }, 350);
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
     Gallery pagination — smooth
========================================*/
$(document).ready(function () {
    var rowSize = 4;
    var initialRows = 2;
    var members = $('.lightbox');

    members.slice(0, initialRows * rowSize).show();
    members.slice(initialRows * rowSize).hide();

    $('#readMoreImg').click(function () {
        var visibleCount = members.filter(':visible').length;
        var toShow = members.slice(visibleCount, visibleCount + rowSize);
        toShow.each(function (i) {
            var $el = $(this);
            $el.css({ opacity: 0, transform: 'scale(0.92)' }).show();
            setTimeout(function () {
                $el.css({
                    transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    opacity: 1,
                    transform: 'scale(1)'
                });
            }, 80 * i);
        });
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
            members.slice(visibleCount - fractionalCount, visibleCount).css({ opacity: 0, transform: 'scale(0.95)' });
            setTimeout(function () {
                members.slice(visibleCount - fractionalCount, visibleCount).hide();
            }, 300);
        } else {
            members.slice(visibleCount - rowSize, visibleCount).css({ opacity: 0, transform: 'scale(0.95)' });
            setTimeout(function () {
                members.slice(visibleCount - rowSize, visibleCount).hide();
            }, 300);
        }

        setTimeout(function () {
            visibleCount = members.filter(':visible').length;
            if (visibleCount <= initialRows * rowSize) {
                $('#readLessImg').hide();
            }
            $('#readMoreImg').show();
        }, 350);
    });

    $('#readLessImg').hide();
});

/*=========================================
     Event filter — smooth transitions
========================================*/
$(document).ready(function () {
    $('.event-filter-tabs').on('click', '.filter-btn, .filter-btn1', function () {
        var filterValue = $(this).data('filter');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        var items = $('.event-content .list-group-item');

        if (filterValue === 'all') {
            items.each(function (i) {
                var $el = $(this);
                $el.css({ opacity: 0, transform: 'translateY(16px)' }).show();
                setTimeout(function () {
                    $el.css({
                        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                        opacity: 1,
                        transform: 'translateY(0)'
                    });
                }, 80 * i);
            });
        } else {
            items.each(function () {
                var $el = $(this);
                if ($el.data('category') === filterValue) {
                    $el.css({ opacity: 0, transform: 'translateY(16px)' }).show();
                    setTimeout(function () {
                        $el.css({
                            transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                            opacity: 1,
                            transform: 'translateY(0)'
                        });
                    }, 80);
                } else {
                    $el.css({ opacity: 0 });
                    setTimeout(function () { $el.hide(); }, 300);
                }
            });
        }
    });
});
