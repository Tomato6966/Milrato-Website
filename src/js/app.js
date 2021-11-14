(function (window) {

    'use strict';
    $(".slideshowslider > div:gt(0)").hide();

    setInterval(function() { 
    $('.slideshowslider > div:first')
        .fadeOut(750)
        .next()
        .fadeIn(750)
        .end()
        .appendTo('.slideshowslider');
    }, 4000)
    $(".slideshowslider2 > div:gt(0)").hide();

    setInterval(function() { 
    $('.slideshowslider2 > div:first')
        .fadeOut(750)
        .next()
        .fadeIn(750)
        .end()
        .appendTo('.slideshowslider2');
    }, 4000)
    /* ---------------------------------------------
    Navigation menu
    --------------------------------------------- */
    // dropdown for mobile
    $(document).ready(function () {
        checkWidth(true);
        $(window).resize(function () {
            checkWidth(true);
        });
    });

    function checkWidth(init) {
        // If browser resized, check width again 
        if ($(window).width() <= 991) {
            $('.dropdown-submenu > a').on("click", function (e) {
                $(this).next('ul').toggle();
                e.stopPropagation();
                e.preventDefault();
            });
        }
    }
    var navbar = $('.navbar');
    var navbarTogglerIcon = $('.navbar-toggler-icon');
    var offcanvasTogglerIcon = $('.offcanvas-toggler-icon');
    var offcanvasMenu = $('.offcanvas-menu');

    // main menu toggleer icon (Mobile site only)
    $('[data-toggle="navbarToggler"]').on("click", function () {
        navbar.toggleClass('active');
        $('body').toggleClass('nav--open');
    });

    // main menu toggleer icon 
    $('.navbar-toggler').on("click", function () {
        navbarTogglerIcon.toggleClass('active');
    });

    // Offcanvas toggleer  
    $('.offcanvas-toggler').on("click", function () {
        offcanvasTogglerIcon.toggleClass('active');
        offcanvasMenu.toggleClass('offcanvas-menu--open');
    });

    // Remove off-canvas on click on nav item that navigated to the page section
    $('.nav-link').on('click', function () {
        navbar.removeClass('active');
        navbarTogglerIcon.removeClass('active');
        offcanvasTogglerIcon.removeClass('active');
        offcanvasMenu.removeClass('offcanvas-menu--open');
        $('body').removeClass('nav--open');
    });
    $('.nav-link.dropdown-toggle').on('click', function () {
        navbar.addClass('active');
        navbarTogglerIcon.addClass('active');
        offcanvasTogglerIcon.removeClass('active');
        offcanvasMenu.removeClass('offcanvas-menu--open');
        $('body').addClass('nav--open');
    });

    // sticky nav
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".navbar").addClass("navbar--sticky");
        } else {
            $(".navbar").removeClass("navbar--sticky");
        }
    });
    
    // smooth scroll
    $('.navbar .nav-item .nav-link').on('click', function (event) {
        var $anchor = $(this);
        var headerH = '0';
        $('.header').outerHeight();
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });
    $.extend($.easing, {
        easeInOutExpo: function (t, e, i, n, s) {
            return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
    });

    /* ---------------------------------------------
    canvas/ Sidebar menu
    --------------------------------------------- */
    (function () {
        var menuEl = document.getElementById('ml-menu');
        if (menuEl) {
            var mlmenu = new MLMenu(menuEl, {
                breadcrumbsCtrl: false,
                backCtrl: true,
                onItemClick: loadDummyData
            });
        }
        // mobile menu toggle

        var openMenuCtrl = document.querySelector('.action--open');
        if (openMenuCtrl) {
            openMenuCtrl.addEventListener('click', openMenu);

            function openMenu() {
                classie.toggle(menuEl, 'menu--open');
            }
        }

        // simulate grid content loading
        var gridWrapper = document.querySelector('.content');

        function loadDummyData(ev, itemName) {}
    })();


    /*----------------------------------
        background image holder
    -----------------------------------*/

    $(".background-image-holder").each(function () {
        var thesrc = $(this).attr('src');
        $(this).parent().css("background-image", "url(" + thesrc + ")");
        $(this).parent().css("background-repeat", "no-repeat");
        $(this).hide();
    });


    /*-------------------------
        Home Hero Slider Default
    --------------------------*/
    $.exists = function (selector) {
        return ($(selector).length > 0);
    }
    window.onpageshow = function (event) {
        if (event.persisted) {
            PageTransition();
        }
    };

    home_slider();

    function home_slider() {
        if ($.exists('.swiper-container')) {

            var swiper = new Swiper('.home-slider .swiper-container', {
                loop: true,
                speed: 1600,
                grabCursor: false,
                mousewheel: false,
                simulateTouch: false,
                keyboard: true,
                parallax: true,
                effect: 'slide',

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 10000,
                },
                breakpoints: {
                    768: {
                        loop: true,

                    },
                }

            });
            if ($('.expanded-timeline__counter span:first-child').length > 0) {
                $('.expanded-timeline__counter span:first-child').text('1');
            }
            if ($('.expanded-timeline__counter span:last-child').length > 0) {

                $('.expanded-timeline__counter span:last-child').text(swiper.slides.length - 2);
                swiper.on('slideChange', function () {
                    $('.expanded-timeline__counter span:first-child').text(swiper.activeIndex);
                });
            }
        }
    }

    /* ---------------------------------------------
        Home Hero Slider Half
    --------------------------------------------- */

    home_sliderHalf();

    function home_sliderHalf() {
        if ($.exists('.swiper-container')) {

            var swiper = new Swiper('.home-slider--half .swiper-container', {
                loop: true,
                speed: 1200,
                momentumRatio: 1,
                grabCursor: false,
                mousewheel: false,
                simulateTouch: false,
                keyboard: true,
                parallax: false,
                effect: 'cube',
                cubeEffect: {
                    rotate: 50,
                    slideShadows: false,
                },

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 7000,
                },
                breakpoints: {
                    768: {
                        loop: true,

                    },
                }

            });
        }
    }

    /* ---------------------------------------------
    image-carousel
    --------------------------------------------- */
    var swiper = new Swiper('.image-carousel', {
        loop: true,
        speed: 1600,
        autoplay: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /* ---------------------------------------------
    Counter up
    --------------------------------------------- */
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        suffix: ''
    };
    // Scroll Function 
    function doScroll() {
        $('.fact__value').each(function () {
            var this_value = $(this).attr('data-value');
            var counter = new CountUp(this, 0, this_value, 0, 2.5, options);

            if (!counter.error) {
                counter.start();
            } else {
                console.error(counter.error);
            }
        });
    }
    var check = 0;
    $(window).on('resize scroll', function () {
        if ($('.fact__value').length > 0) {
            var element_position = $(".fact__value").offset().top;
            var scroll_position = $(window).scrollTop();
            var viewport_height = $(window).height();

            if ((scroll_position + viewport_height) > element_position) {
                if (check == 0) {
                    doScroll();
                    check = 1;
                }
            }
        }
    });

    /* ---------------------------------------------
    Homepage Portfolio carousel
    --------------------------------------------- */
    var swiper = new Swiper('.portfolio .swiper-container', {
        allowTouchMove: true,
        preventClicks: true,
        slidesPerView: 4,
        spaceBetween: 70,
        slidesPerGroup: 1,
        grabCursor: true,
        calculateHeight: true,
        simulateTouch: true,
        keyboard: true,
        loop: false,
        loopFillGroupWithBlank: true,
        centeredSlides: false,
        speed: 1000,

        scrollbar: {
            el: '.swiper-scrollbar',
            clickable: true,
            hide: false,
            snapOnRelease: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            1920: {
                slidesPerView: 3,
            },
            767: {
                autoHeight: true,
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: 1,
                scrollbar: {
                    el: '.swiper-pagination',
                    clickable: true,
                    hide: true,

                },

            }
        },

    });

    /* ---------------------------------------------
    Portfolio lightbox
    --------------------------------------------- */
    $(document).ready(function () {
        $('.slide-inner__lightbox, .lightbox').venobox({
            numeratio: true,
        });
    });

    /* ---------------------------------------------
    Process video lightbox
    --------------------------------------------- */
    $(document).ready(function () {
        $('.process__play').venobox();
    });
    $(document).ready(function () {
        $('.process__play__undercover').venobox();
    });
    /* ---------------------------------------------
    tab
    --------------------------------------------- */
    $('.tabs').find('> li:eq(0)').addClass('current');
    $('.tabs li button').on("click", function (g) {
        var tab = $(this).closest('.tab-container'),
            index = $(this).closest('li').index();

        tab.find('.tabs > li').removeClass('current');
        $(this).closest('li').addClass('current');

        tab.find('.tab-content').find('.tabs-item').not('div.tabs-item:eq(' + index + ')').removeClass('tabs-item--active');
        tab.find('.tab-content').find('.tabs-item:eq(' + index + ')').addClass('tabs-item--active');
        g.preventDefault();
    });
    /* ---------------------------------------------
    Testimonial carousel
    --------------------------------------------- */
    var swiper = new Swiper('.testimonial .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 25,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 1,
            },
        }
    });
    /* ---------------------------------------------
    Clients carousel
    --------------------------------------------- */
    var swiper = new Swiper('.clients.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 25,
        speed: 1000,
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
        }
    });

    /* ---------------------------------------------
    parallax
    --------------------------------------------- */
    // Calling new Scrollax class
    $.Scrollax();


    /* ---------------------------------------------
    footer newsfeed scroll
    --------------------------------------------- */
    jQuery('.scrollbar-outer').scrollbar();

    /* ---------------------------------------------
    Pricing Switcher
    --------------------------------------------- */
    // switcher button toggle
    $('[data-plan="monthly"]').on('click', function () {
        $('.switcher').removeClass('y-current');
        $('.switcher').addClass('m-current');
        $('.pricing-table .price').removeClass('price--yearly-active');
        $('.pricing-table .price').addClass('price--monthly-active');
    });
    $('[data-plan="yearly"]').on('click', function () {
        $('.switcher').removeClass('m-current');
        $('.switcher').addClass('y-current');
        $('.pricing-table .price').removeClass('price--monthly-active');
        $('.pricing-table .price').addClass('price--yearly-active');

    });

    /* ---------------------------------------------
    Innerpage Portfolio
    --------------------------------------------- */
    var $grid = $('.masonry').isotope({});
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    // image load isotop
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });
    // change is-checked class on buttons
    $('.filter-button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
    // masonry
    var $masonry = $('.masonry').masonry({
        itemSelector: '.masonry-item',

    });
    // image load masonry
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    /* ---------------------------------------------
    Google Map
    --------------------------------------------- */
    var map = $('#google_map');
    var myCenter = new google.maps.LatLng(40.712784, -74.005941);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 13,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "saturation": 36
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                }
            ]
        };
        var mape = document.getElementById("google-map");
        if (mape) {

            var map = new google.maps.Map(document.getElementById("google-map"), mapProp);
            var marker = new google.maps.Marker({
                position: myCenter,
                animation: google.maps.Animation.BOUNCE,
                icon: 'img/pin-3.png'
            });
            var infowindow = new google.maps.InfoWindow({
                content: "united-states"
            });
            marker.setMap(map);
        }
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    if (map.length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }


    /* ---------------------------------------------
    Contact from
    --------------------------------------------- */
    var inputForm;
    inputForm = function () {
        return $('.contact-form .form-control').focus(function () {
            return $(this).closest('.form-group').addClass('focused has-value');
        }).focusout(function () {
            return $(this).closest('.form-group').removeClass('focused');
        }).blur(function () {
            if (!this.value) {
                $(this).closest('.form-group').removeClass('has-value');
            }
            return $(this).closest('.form-group').removeClass('focused');
        });
    };
    $(function () {
        return inputForm();
    });

    /* ---------------------------------------------
    CountDown
    --------------------------------------------- */
    function countDown() {
        var second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        var countDown = new Date("Jul 05, 2021 00:00:00").getTime(),
            x = setInterval(function () {
                var now = new Date().getTime(),
                    distance = countDown - now;
                var cDays = document.getElementById("days");
                if (cDays) {
                    (document.getElementById("days").innerText = addZero(Math.floor(distance / day)),
                        (document.getElementById("hours").innerText = addZero(Math.floor(
                            (distance % day) / hour
                        ), 2))),
                    (document.getElementById("minutes").innerText = addZero(Math.floor(
                        (distance % hour) / minute
                    ), 2)),
                    (document.getElementById("seconds").innerText = addZero(Math.floor(
                        (distance % minute) / second
                    ), 2));
                }
            }, second);
    }

    function addZero(your_number, length) {
        var num = '' + your_number;
        while (num.length < length) {
            num = '0' + num;
        }
        return num;
    }
    countDown();


    /* ---------------------------------------------
    Preloader
    --------------------------------------------- */
    jQuery(window)
        .on('load', function () {
            $('.pre-laoder')
                .fadeOut('slow');
        });
    /* ---------------------------------------------
    AnimationJS
    --------------------------------------------- */
    /* ---------------------------------------------
    OnScroll Animation 
    --------------------------------------------- */
    ////// This function for on scroll animation when subject on viewport (For example please see skill progress bar animation)
    $.fn.inView = function () {
        if (!this.length) return false;
        var rect = this.get(0).getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    //true false whether an array of elements are all in view
    $.fn.allInView = function () {
        var all = [];
        this.forEach(function () {
            all.push($(this).inView());
        });
        return all.indexOf(false) === -1;
    };
    
    /* ---------------------------------------------
    Navigation Transition 
    --------------------------------------------- */
    // navigation animate on click    
    $('.navbar-nav .nav-link, .filter-button-group button, .label-animation').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='nav-link-letter'>$&</span>"));
    });
    document.addEventListener('DOMContentLoaded', function () {
        var navHover = document.querySelectorAll('.nav-link, .filter-button-group button, .form-group');
        navHover.forEach(function (navHover) {
            navHover.addEventListener('click', function () {
                var navLetter = navHover.querySelectorAll('.nav-link-letter');
                anime.timeline({
                        targets: navLetter,
                    })
                    .add({
                        translateX: [0, -30],
                        opacity: [1, 0],
                        easing: 'easeInExpo',
                        duration: 500,
                        delay: function (el, index) {
                            return index * 30;
                        },
                    })
                    .add({
                        translateX: [40, 0],
                        opacity: [0, 1],
                        easing: 'easeOutExpo',
                        duration: 1100,
                        delay: function (el, index) {
                            return index * 30;
                        },
    
                    })
            })
        })
    
    })
    
    
    /* ---------------------------------------------
    Button hover transition 
    --------------------------------------------- */
    $('.btn--megaEffect').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='btn-letter'>$&</span>"));
    });
    document.addEventListener('DOMContentLoaded', function () {
        var btnHover = document.querySelectorAll('.btn--megaEffect');
        btnHover.forEach(function (btnHover) {
            btnHover.addEventListener('mouseenter', function () {
                var letter = btnHover.querySelectorAll('.btn-letter');
                anime.timeline({
                        targets: letter,
                    })
                    .add({
                        translateX: [0, -30],
                        opacity: [1, 0],
                        easing: 'easeInExpo',
                        duration: 500,
                        delay: function (el, index) {
                            return index * 30;
                        },
                    })
                    .add({
                        translateX: [40, 0],
                        opacity: [0, 1],
                        easing: 'easeOutExpo',
                        duration: 1100,
                        delay: function (el, index) {
                            return index * 30;
                        },
    
                    })
            })
        })
    
    })
    
    /* ---------------------------------------------
    Skill Progress Animation 
    --------------------------------------------- */
    var animateProgress = anime({
        targets: '.progress-bar',
        translateX: ['-100%', 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000,
        loop: false,
        autoplay: false,
    });
    var clickProgress = document.querySelectorAll('[data-animate="progress"]');
    clickProgress.forEach(function (clickProgress) {
        clickProgress.addEventListener('click', function () {
            animateProgress.restart();
        })
    })
    // on scroll function init
    $(window).on('scroll', function () {
        if ($('.skill').inView()) {
            animateProgress.play();
        }
    });
    
    /* ---------------------------------------------
    Animated mini shape on canvas lines 
    --------------------------------------------- */
    var animatedLines = anime({
        targets: '.animated-lines .animate-1',
        left: [{
            value: '14.33%',
            duration: 2000,
            delay: 1000,
            elasticity: 0,
        }, {
            value: '28.65%',
            duration: 2000,
            delay: 7200,
            elasticity: 0,
        }],
        top: [{
            value: 500,
            duration: 5000,
            delay: 3000,
            elasticity: 0,
            easing: 'easeInCubic'
        }, {
            value: 50,
            duration: 5000,
            delay: 7300,
            elasticity: 0,
            easing: 'easeInCubic'
        }],
        height: [{
            value: 50,
            duration: 1000,
            delay: 3000,
            easing: 'linear'
        }, {
            value: 30,
            duration: 1000,
            delay: 9000,
            easing: 'linear'
        }, ],
        loop: true,
        direction: 'alternate'
    });
    
    var animatedLinesAlt = anime({
        targets: '.animated-lines .animate-2',
        top: [{
            value: -500,
            duration: 5000,
            delay: 1000,
            elasticity: 0,
            easing: 'linear'
        }, {
            value: -100,
            duration: 5000,
            delay: 7000,
            elasticity: 0,
            easing: 'linear'
        }, ],
        left: [{
            value: '-28.50%',
            duration: 1000,
            delay: 7000,
            elasticity: 0,
        }, {
            value: '-14.2%',
            duration: 1000,
            delay: 10000,
            elasticity: 0,
        }, ],
        height: [{
            value: 40,
            duration: 1000,
            delay: 9000,
            easing: 'linear'
        }, {
            value: 20,
            duration: 1000,
            delay: 9000,
            easing: 'linear'
        }, ],
        loop: true,
        direction: 'alternate'
    });
    
    
    
    /* ---------------------------------------------
    team mamber socail transition 
    --------------------------------------------- */
    
    document.addEventListener('DOMContentLoaded', function () {
        var teamHover = document.querySelectorAll('.team-mamber');
        teamHover.forEach(function (teamHover) {
            teamHover.addEventListener('mouseenter', function () {
                var socialIcon = teamHover.querySelectorAll('.team-mamber__connect li');
                anime.timeline({
                        targets: socialIcon,
                    })
                    .add({
                        translateX: [-200, 0],
                        opacity: [0, 1],
                        easing: 'easeOutExpo',
                        duration: 1000,
                        delay: function (el, index) {
                            return index * 50;
                        },
    
                    })
            })
            teamHover.addEventListener('mouseleave', function () {
                var socialIcon = teamHover.querySelectorAll('.team-mamber__connect li');
                anime.timeline({
                        targets: socialIcon,
                    })
                    .add({
                        translateX: [0, 200],
                        opacity: [1, 0],
                        easing: 'easeOutExpo',
                        duration: 1000,
                        delay: function (el, index) {
                            return index * 50;
                        },
    
                    })
            })
        })
    
    })
    
    
    
    /* ---------------------------------------------
    Preloader Animation 
    --------------------------------------------- */
    var lineDrawing = anime({
        targets: '#lineDrawing .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 3000,
        delay: function(el, i) { return i * 500 },
        direction: 'alternate',
        loop: true
      });
})(window);
