

function getScrollBarWidth() {

    var inner = document.createElement('p');

    inner.style.width = "100%";

    inner.style.height = "200px";


    var outer = document.createElement('div');

    outer.style.position = "absolute";

    outer.style.top = "0px";

    outer.style.left = "0px";

    outer.style.visibility = "hidden";

    outer.style.width = "200px";

    outer.style.height = "150px";

    outer.style.overflow = "hidden";

    outer.appendChild(inner);



    document.body.appendChild(outer);

    var w1 = inner.offsetWidth;

    outer.style.overflow = 'scroll';

    var w2 = inner.offsetWidth;

    if (w1 == w2) w2 = outer.clientWidth;



    document.body.removeChild(outer);



    return (w1 - w2);





};


$(document).ready(function () {

    new WOW().init();

    $("header .menu").clone().prependTo('.header-menu-content');


    // determine the type of device

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        $('body').addClass('is-mobile');

    }

    else {

        $('body').addClass('is-desktop');

    }

    //window fancybox begin



    fbox_conf = {
        maxWidth: '100%',
        maxHeight: '100%',
        fitToView: true,
        autoSize: true,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none',
        padding: 0,
        margin: 0,
        helpers: {
            title: {
                type: 'inside',
                position: 'top'
            }
        },

        beforeShow: function (instance, current) {
            if (!$('body > .wrapper').hasClass('blur')) {
                $('body > .wrapper').addClass('blur');
            }
        },
        afterClose: function () {
            $('body > .wrapper').removeClass('blur');
        },
        afterShow: function (instance, current) {
        }
    };

    if ( $(".fancybox").length ) {
        $(".fancybox").fancybox(fbox_conf);
    }



    fbox_conf_type_3 = {
        maxWidth: '90%',
        maxHeight: '90%',
        fitToView: true,
        autoSize: true,
        closeClick: false,
        closeEffect: 'none',
        padding: 0,
        margin: 0,
        openEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            title: {
                type: 'inside',
                position: 'top'
            },
            overlay : {
                css : {
                }
            }
        },
        tpl: {
        },

        beforeLoad: function () {
        },

        beforeShow: function () {

            if (!$('body > .wrapper').hasClass('blur')) {

                $('body > .wrapper').addClass('blur');

            }
        },
        afterClose: function () {
            $('body > .wrapper').removeClass('blur');
        }
    };

    if ( $(".fancybox-img").length ) {
        $(".fancybox-img").fancybox(fbox_conf_type_3);

    }



    fbox_conf_type_2 = {
        maxWidth: '90%',
        maxHeight: '90%',
        fitToView: true,
        autoSize: true,
        closeClick: false,
        closeEffect: 'none',
        padding: 0,
        margin: 0,
        openEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            title: {
                type: 'inside',
                position: 'top'
            },
            media: {}
        },
        tpl: {
        },
        beforeLoad: function () {
        },

        beforeShow: function () {
            if (!$('body > .wrapper').hasClass('blur')) {
                $('body > .wrapper').addClass('blur');
            }
        },
        afterClose: function () {
            $('body > .wrapper').removeClass('blur');
        }
    };
    if ( $(".fancybox-media").length ) {
        $('.fancybox-media').fancybox(fbox_conf_type_2);
    }
    //window fancybox end


    $(document).on('click', '.menu-btn, .menu-btn-2', function (event) {
        event.preventDefault();
        if ($('.box-header-menu').hasClass('active')) {
            $('.header-menu__background').animate({opacity: 0}, 600);
            $('.menu-btn-2').removeClass('mod-fixed');
            $('.header-menu-content').animate({ "right": "-480px" }, 700, function() {
                $('html').removeClass('overflow');
                $("body").css({'padding-right': ''});
                $('.box-header-menu').removeClass("active");
            });
        } else {
            $('.box-header-menu').addClass("active");
            $('html').addClass('overflow');
            $("body").css({'padding-right': getScrollBarWidth()});
            $('.header-menu__background').animate({opacity: 1}, 600);
            $('.header-menu-content').animate({ "right": "0" }, 700, function() {
                $('.menu-btn-2').addClass('mod-fixed');
            });
        };

    });


    if ($('.top-slider').length) {
        $('.top-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 20000,
            fade: true,
            cssEase: 'linear',
            arrows: false,
        });
    }



    if ($('.images-carousel').length) {
        $('.images-carousel').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: false,
            cssEase: 'linear',
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 736,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]

        });
    }

    if ($('.main-map__img .spincrement' ).length) {
        var show = true;
        var countbox = ".main-map__img";
        $(window).on("scroll load resize", function () {
            if (!show) return false;
            var w_top = $(window).scrollTop();
            var e_top = $(countbox).offset().top;
            var w_height = $(window).height();
            var d_height = $(document).height();
            var e_height = $(countbox).outerHeight();
            if (w_top + 900 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $('.main-map__img .spincrement').css('opacity', '1');
                $('.main-map__img .spincrement').spincrement({
                    thousandSeparator: "",
                    duration: 2500,
                    from: 0
                });
                show = false;
            }
        });
    }


    if ($('.main-map__bottom-columns .spincrement').length) {
        var show2 = true;
        var countbox2 = ".main-map__bottom-columns";
        $(window).on("scroll load resize", function () {

            if (!show2) return false;

            var w_top2 = $(window).scrollTop();

            var e_top2 = $(countbox2).offset().top;

            var w_height2 = $(window).height();

            var d_height2 = $(document).height();

            var e_height2 = $(countbox2).outerHeight();

            if (w_top2 + 900 >= e_top2 || w_height2 + w_top2 == d_height2 || e_height2 + e_top2 < w_height2) {

                $('.main-map__bottom-columns .spincrement').css('opacity', '1');

                $('.main-map__bottom-columns .spincrement').spincrement({

                    thousandSeparator: "",

                    duration: 2500,

                    from: 0

                });



                show2 = false;

            }

        });

    }

    if ($('.main-production__info-unit-number .spincrement' ).length) {
        var show3 = true;
        var countbox3 = ".main-production__info-unit-number";
        $(window).on("scroll load resize", function () {
            if (!show3) return false;
            var w_top3 = $(window).scrollTop();
            var e_top3 = $(countbox3).offset().top;
            var w_height3 = $(window).height();
            var d_height3 = $(document).height();
            var e_height3 = $(countbox3).outerHeight();
            if (w_top3 + 900 >= e_top3 || w_height3 + w_top3 == d_height3 || e_height3 + e_top3 < w_height3) {
                $('.main-production__info-unit-number .spincrement').css('opacity', '1');
                $('.main-production__info-unit-number .spincrement').addClass('mod-ready')
                $('.main-production__info-unit-number .spincrement').spincrement({
                    thousandSeparator: "",
                    duration: 2500,
                    from: 0
                });
                show3 = false;
            }
        });

    }

    if ($('.b-selection__top-line-number .spincrement' ).length) {
        var show4 = true;
        var countbox4 = ".b-selection__top-line-number";
        $(window).on("scroll load resize", function () {
            if (!show4) return false;
            var w_top4 = $(window).scrollTop();
            var e_top4 = $(countbox4).offset().top;
            var w_height4 = $(window).height();
            var d_height4 = $(document).height();
            var e_height4 = $(countbox4).outerHeight();
            if (w_top4 + 900 >= e_top4 || w_height4 + w_top4 == d_height4 || e_height4 + e_top4 < w_height4) {
                $('.b-selection__top-line-number .spincrement').css('opacity', '1');
                $('.b-selection__top-line-number .spincrement').spincrement({
                    thousandSeparator: "",
                    duration: 2500,
                    from: 0
                });
                show4 = false;
            }
        });
    }

    if ($('.b-base-number .spincrement' ).length) {
        var show5 = true;
        var countbox5 = ".b-base-number";
        $(window).on("scroll load resize", function () {
            if (!show5) return false;
            var w_top5 = $(window).scrollTop();
            var e_top5 = $(countbox5).offset().top;
            var w_height5 = $(window).height();
            var d_height5 = $(document).height();
            var e_height5 = $(countbox4).outerHeight();
            if (w_top5 + 900 >= e_top5 || w_height5 + w_top5 == d_height5 || e_height5 + e_top5 < w_height5) {
                $('.b-base-number .spincrement').css('opacity', '1');
                $('.b-base-number .spincrement').spincrement({
                    thousandSeparator: "",
                    duration: 3500,
                    from: 0
                });
                show5 = false;
            }
        });
    }


    //-------------------adaptation begin----------------------------------------


//header-phone-linetop begin
    $('.header-phone-linetop__link-all').click(function() {

        var box = $('.header-phone__number-all');
        var button = $('.header-phone-linetop__link-all');
        if ( box.hasClass('active') ) {
            box.removeClass('active');
            box.fadeOut();
            button.removeClass('active');
        } else {
            box.addClass('active');
            box.fadeIn();
            button.addClass('active');
        };
    });
    //header-phone-linetop end

    $('.search-btn').click(function(event) {
        event.preventDefault();
        var search = $('.header-search');
        var search_button = $('.search-btn');
        if ( search_button.hasClass('active') ) {
            search_button.removeClass('active');
            search.removeClass('open');
            // search.fadeOut();
        }
        else {
            search_button.addClass('active');
            search.addClass('open');
            // search.fadeIn();
        };
    });


    $(document).on('click', '.page-detail__contacts-btn', function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(".b-contacts").removeClass('active').slideUp(300);
            $(".b-contacts__unit").css({'animation': 'none !important'});
        } else {;
            $(this).addClass('active');
            $(".b-contacts").addClass('active').slideDown(300);
        }
    });


    $(document).on('click', '.detail-product__map-btn, .detail-product__map-close', function (event) {
        event.preventDefault();
        if ($(".partners__map").hasClass('active')) {
            $(this).removeClass('active');
            $(".detail-product__map-close").removeClass('visible');
            $(".partners__map").removeClass('active').slideUp(300);
            if ($('.page-detail__contacts-btn').hasClass('active')) {
                $('.page-detail__contacts-btn').removeClass('active');
                $(".b-contacts").removeClass('active').slideUp(300);
                $(".b-contacts__unit").css({'animation': 'none !important'});
            }
        } else {;
            $(this).addClass('active');
            $(".partners__map").addClass('active').slideDown(300, function () {
                $(".detail-product__map-close").addClass('visible');
            });
        }
    });


    $(document).on('click', '.b-category__second-level-btn', function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).closest(".b-category__item").find('.box-second-level').slideUp(300, function() {
                $(this).closest(".b-category__item").removeClass('open')
            });
        }
        else {
            $('.b-category__second-level-btn').removeClass('active');
            $(".b-category__item").removeClass('open');
            $(".box-second-level").css({'display': ''});
            $(this).addClass('active');
            $(this).closest(".b-category__item").addClass('open').find('.box-second-level').slideDown(300);
        }
    });


    if ($(".horizontal-scrollbar-inner").length) {
        jQuery('.horizontal-scrollbar-inner').mCustomScrollbar({
            axis: "x",
            mouseWheel:"false",
        });
    }


    var wrapper_width=$('.wrapper').width();

    if ($(window).width() + getScrollBarWidth() < 1271) {
        if ($('.b-category__item').hasClass('open')) {
            $(".filter .b-category__item.open").find('.box-second-level').css({'display': ''});
            $(".filter .b-category__item.open").find('.b-category__second-level-btn').removeClass('active');
            $(".filter .b-category__item.open").removeClass('open');
        }
    }


    $(window).resize(function () {

        var new_wrapper_width=$('.wrapper').width();

        if(new_wrapper_width!=wrapper_width) {
            if ($(".horizontal-scrollbar-inner").length) {
                $(".horizontal-scrollbar-inner").mCustomScrollbar("destroy");
                jQuery('.horizontal-scrollbar-inner').mCustomScrollbar({
                    axis: "x",
                    mouseWheel:"false",
                });
            }
            wrapper_width=$('.wrapper').width();
        }

        if ($(window).width() + getScrollBarWidth() < 1271) {
            if ($(".for-partners__info .for-partners__box-img").length) {
            }
            else {
                $('.for-partners__info .box-title').after($('.for-partners__box-img'));
            }
            if ($(".about-us-page__info-box-right .about-us-page__info-box-left").length) {
            }
            else {
                $('.about-us-page__info-box-right .text:first-child .box-title:first-child').after($('.about-us-page__info-box-left'));

            }
        }
        else {
            if ($(".for-partners > .for-partners__box-img").length) {
            }
            else {
                $('.for-partners__info').before($('.for-partners__box-img'));
            }
            if ($(".about-us-page__info-box-right .about-us-page__info-box-left").length) {
                $('.about-us-page__info-box-right').after($('.about-us-page__info-box-left'));
            }
        }


        if ($(window).width() + getScrollBarWidth() < 1024) {
            $('.main-production__btn-line').before($('.main-production__info-unit'));
        }
        else {
            $('.main-production__right-column').append($('.main-production__info-unit'));
        }


        if ($(window).width() + getScrollBarWidth() < 1271 && $(window).width() + getScrollBarWidth() > 735) {
            $('.category-products-top-box').after($('.filter'));
        }
        else {
            $('.category-products-left-column').prepend($('.filter'));
        }


        $('.text table').each(function(){
            if($(this).width() > $(".wrap").width()){
                if($(this).hasClass('mod-long')){
                }
                else {
                    $(this).addClass('mod-long');
                    $(this).wrap("<div class='text-table-overflow'></div>");
                }
            }
            else {
                if ($(this).hasClass('mod-long')) {
                    $(this).removeClass('mod-long');
                    $(this).unwrap("<div class='text-table-overflow'></div>");
                }
                else {
                }
            }
        });

    }).resize();


    $(document).on('click', '.header-menu-content .menu_link-button', function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).closest(".menu__item").removeClass('menu-opened').find('.box-for-menu-second-level').slideUp(300);
        } else {
            $('.header-menu-content .menu_link-button').removeClass('active');
            $(".header-menu-content .menu__item").removeClass('menu-opened');
            $(".header-menu-content .menu__second-level").css({'display': ''});
            $(this).addClass('active');
            $(this).closest(".menu__item").addClass('menu-opened').find('.box-for-menu-second-level').slideDown(300);
        }
        return false;
    });



    $(document).on('click', '.b-contacts__btn', function (event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).closest(".b-contacts__unit").find('.b-contacts__unit-hidden-text').slideUp(300);
        } else {
            $(this).addClass('active');
            $(this).closest(".b-contacts__unit").find('.b-contacts__unit-hidden-text').slideDown(300);
        }
        return false;
    });



    $(document).on('click', '.filter-btn, .filter-close-btn', function (event) {
        event.preventDefault();
        if ($('.filter-aside').hasClass('active')) {
            $('.filter-aside__background').animate({opacity: 0}, 600);
            $('.filter-close-btn').removeClass('mod-fixed');
            $('.filter').animate({ "left": "-480px" }, 700, function() {
                $('.filter-aside').removeClass("active");
            });
        } else {
            $('.filter-aside').addClass("active");
            $('.filter-aside__background').animate({opacity: 1}, 600);
            $('.filter').animate({ "left": "0" }, 700, function() {
                $('.filter-close-btn').addClass('mod-fixed');
            });
        };
    });
    //-------------------adaptation end----------------------------------------


    $('input').on('keyup',function(){
        var $this = $(this),
            val = $this.val();

        if(val.length >= 1){
            $(this).addClass('not-empty');
        }else {
            $(this).removeClass('not-empty');
        }
    });

    if ($("textarea").length) {
        var textarea = document.querySelector('textarea');

        textarea.addEventListener('keyup', function(){
            var $this_2 = $(this),
                val_2 = $this_2.val();
            if(val_2.length >= 1){
                $(this).addClass('not-empty');
                $(this).closest('label').addClass('not-empty-line');
            }else {
                $(this).removeClass('label');
                $(this).closest('label').removeClass('not-empty-line');
            }
            if(this.scrollTop > 0){
                this.style.height = this.scrollHeight + "px";
            }
        });
    }


    $(document).on('click', '.about-us-page__b-video-content', function (event) {
        if ($(this).hasClass('active')) {
        } else {
            $(this).addClass("active");
            $(".about-us-page__b-video-content iframe")[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
        event.preventDefault();

    });

});

