(function($) {

    "use strict";

    $(window).on('load', function() {
        $('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350);
        $('#hero_in h1,#hero_in form').addClass('animated');
        $('.hero_single, #hero_in').addClass('start_bg_zoom');
        $(window).scroll();
    });

    // Sticky nav
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 1) {
            $('.header').addClass("sticky");
        } else {
            $('.header').removeClass("sticky");
        }
    });

    // Sticky sidebar
    $('#sidebar').theiaStickySidebar({
        additionalMarginTop: 150
    });

    // Mobile Mmenu
    setTimeout(function() {

        var $menu = $("nav#menu").mmenu({
            "extensions": ["pagedim-black"],
            counters: false,
            keyboardNavigation: {
                enable: true,
                enhance: true
            },
            navbar: {
                title: 'MENU'
            },
            navbars: [{ position: 'bottom', content: ['<a href="#0">© 2021 Udema</a>'] }]
        }, {
            // configuration
            clone: true,
            classNames: {
                fixedElements: {
                    fixed: "menu_2",
                    sticky: "sticky"
                }
            }
        });
        var $icon = $("#hamburger");
        var API = $menu.data("mmenu");
        $icon.on("click", function() {
            API.open();
        });
        API.bind("open:finish", function() {
            setTimeout(function() {
                $icon.addClass("is-active");
            }, 100);
        });
        API.bind("close:finish", function() {
            setTimeout(function() {
                $icon.removeClass("is-active");
            }, 100);
        });
    }, 500)

    // Header button explore
    $('a[href^="#"].btn_explore').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 100, 'linear', function() {
            window.location.hash = target;
        });
    });

    // WoW - animation on scroll
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();

    /*  video popups */
    $('.video').magnificPopup({ type: 'iframe' }); /* video modal*/

    /*  Image popups */
    $('.magnific-gallery').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function() {
                    // just a hack that adds mfp-anim class to markup 
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            closeOnContentClick: true,
            midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        });
    });

    // Accordion
    function toggleChevron(e) {
        $(e.target)
            .prev('.card-header')
            .find("i.indicator")
            .toggleClass('ti-minus ti-plus');
    }
    $('#accordion_lessons').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);

    function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".indicator")
            .toggleClass('ti-minus ti-plus');
    }
    // Accordion 2 (updated v1.2)
    $('.accordion_2').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);

    function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".indicator")
            .toggleClass('ti-minus ti-plus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);


    // Input field effect
    (function() {
        if (!String.prototype.trim) {
            (function() {
                // Make sure we trim BOM and NBSP
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function() {
                    return this.replace(rtrim, '');
                };
            })();
        }
        [].slice.call(document.querySelectorAll('input.input_field, textarea.input_field')).forEach(function(inputEl) {
            // in case the input is already filled..
            if (inputEl.value.trim() !== '') {
                classie.add(inputEl.parentNode, 'input--filled');
            }

            // events:
            inputEl.addEventListener('focus', onInputFocus);
            inputEl.addEventListener('blur', onInputBlur);
        });

        function onInputFocus(ev) {
            classie.add(ev.target.parentNode, 'input--filled');
        }

        function onInputBlur(ev) {
            if (ev.target.value.trim() === '') {
                classie.remove(ev.target.parentNode, 'input--filled');
            }
        }
    })();

    // Selectbox
    $(".selectbox").selectbox();

    // Check and radio input styles
    $('input.icheck').iCheck({
        checkboxClass: 'icheckbox_square-blue me-1',
        radioClass: 'iradio_square-blue me-1'
    });

    // Carousels
    $('#carousel').owlCarousel({
        autoplay: true,
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // Carousels
    $('#carousel-about').owlCarousel({
        autoplay: true,
        center: true,
        items: 3,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    $('#reccomended').owlCarousel({
        autoplay: true,
        center: true,
        items: 2,
        loop: true,
        margin: 0,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1000: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });

    // Sticky filters
    $(window).bind('load resize', function() {
        var width = $(window).width();
        if (width <= 991) {
            $('.sticky_horizontal').stick_in_parent({
                offset_top: 50
            });
        } else {
            $('.sticky_horizontal').stick_in_parent({
                offset_top: 73
            });
        }
    });

    // Secondary nav scroll
    var $sticky_nav = $('.secondary_nav');
    $sticky_nav.find('a').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
            'scrollTop': $target.offset().top - 150
        }, 200, 'linear');
    });
    $sticky_nav.find('ul li a').on('click', function() {
        $sticky_nav.find('ul li a.active').removeClass('active');
        $(this).addClass('active');
    });

    // Secondary nav scroll
    var $btn_review = $('.btn-review');
    $btn_review.find('a').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
            'scrollTop': $target.offset().top - 150
        }, 200, 'linear');
    });
    $btn_review.find('ul li a').on('click', function() {
        $btn_review.find('ul li a.active').removeClass('active');
        $(this).addClass('active');
    });

    // Faq section (updated v1.2)
    $('#faq_box a[href^="#"]').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
            location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 185
                }, 200);
                return false;
            }
        }
    });
    $('ul#cat_nav li a').on('click', function() {
        $('ul#cat_nav li a.active').removeClass('active');
        $(this).addClass('active');
    });

    $('#btn-grid').on('click', function() {
        $('#btn-list').removeClass('active');
        $('.grid-alt-row').addClass('row');
        $('.grid-alt-col').addClass('col-md-6');
        $('.grid-alt-card').removeClass('row g-0');
        $('.grid-alt-figure').removeClass('col-lg-6');
        $('.grid-alt-info').removeClass('col-lg-6');
        $(this).addClass('active');
    });

    $('#btn-list').on('click', function() {
        $('#btn-grid').removeClass('active');
        $('.grid-alt-row').removeClass('row');
        $('.grid-alt-col').removeClass('col-md-6');
        $('.grid-alt-card').addClass('row g-0');
        $('.grid-alt-figure').addClass('col-lg-6');
        $('.grid-alt-info').addClass('col-lg-6');
        $(this).addClass('active');
    });
})(window.jQuery);


function ratingClick(stars) {
    $('.class-rating-star').removeClass('voted');

    for (var i = 1; i <= stars; i++) {
        $('#i-rating-star-' + i).addClass('voted');
    }

    $('#num_rating_stars').val(stars);
}