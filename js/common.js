$(document).ready(function () {

    // Phone mask
    $(".phone-mask").mask("+7 (999)999-99-99");

    /*Header scroll*/
    function scrollHeader() {
        if ($(window).scrollTop() > 5) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    }
    scrollHeader();
    $(window).scroll(function () {
        scrollHeader();
    });

    // Main menu open
    if ($(".header__burger").length > 0) {
        $(".header__burger").click(function(){
            $("body").toggleClass("lock");
            $(".menu").toggleClass("active");
        });
        $(".menu__closed").click(function(){
            $("body").toggleClass("lock");
            $(".menu").toggleClass("active");
        });
    }

    // Portfolio Slick Slider
    /*if ($(".portfolio__btn").length > 0) {
        $(".portfolio__btn").click(function(){
            $("body").toggleClass("lock");
            $(".popup").toggleClass("active");
        });
        $(".popup__closed").click(function(){
            $("body").toggleClass("lock");
            $(".popup").toggleClass("active");
        });
    }*/
    $(".portfolio__btn[data-btn], .director__desc-link[data-btn]").on("click", function(e){
        e.preventDefault();
        $(".popup").removeClass('active');
        $(this).addClass('active');
        var popup = $(this).data('btn');
        $('[data-popup="'+popup+'"]').toggleClass('active');
    });

    $(".popup__closed").on("click", function(){
        $('.popup').removeClass("active");
    });

    // Sticky
    if ($('.sticky').length > 0) {
        $(window).on('resize', function () {
            if ($(window).width() >= 1010) {
                $(".sticky").stick_in_parent({
                    offset_top: 80,
                    bottoming: true
                });
            }
        }).trigger('resize');
    }
    if ($('.stages__line-sticky').length > 0) {
        $(window).on('resize', function () {
            if ($(window).width() >= 1010) {
                $(".stages__line-sticky").stick_in_parent({
                    offset_top: 60,
                    bottoming: true
                });
            }
        }).trigger('resize');
    }

    $(".stages__number").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top - 50;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    });
    $(".header__portfolio").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top - 60;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    });
    $(".menu__big a, .menu__list a").click(function () {
        $("body").removeClass("lock");
        $(".menu").removeClass("active");
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top - 60;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    });

    /*Parallax*/
    if ($('.js-parallax').length > 0) {
        if ($(window).width() >= '1010'){
            $('.js-parallax').each(function() {
                var $this = $(this);
                var $parallax_bg = $this.find('.js-parallax-bg');
                $(window).on('scroll', function(e) {

                    var scrolled = $(window).scrollTop() - $this.offset().top;

                    if (scrolled >= 0 && scrolled <= window.innerHeight * 2) {
                        $parallax_bg.css('transform', 'translate3d(-' + (scrolled / 12) + 'px, 0, 0)');
                    } else {
                        $parallax_bg.css('transform', 'translate3d(0, 0, 0)');
                    }
                });
            });
        }
    }
    if ($('.benefit').length > 0) {
        if ($(window).width() >= '1010'){
            $('.benefit').each(function() {
                var $this = $(this);
                var $parallax_bg = $this.find('.benefit__img');
                $(window).on('scroll', function(e) {

                    var scrolled = $(window).scrollTop() - $this.offset().top;

                    if (scrolled >= 0 && scrolled <= window.innerHeight * 2) {
                        $parallax_bg.css('transform', 'translate3d(0,-' + (scrolled / 16) + 'px, 0)');
                    } else {
                        $parallax_bg.css('transform', 'translate3d(0, 0, 0)');
                    }
                });
            });
        }
    }
    if ($('.services__paralax').length > 0) {
        if ($(window).width() >= '1010'){
            $('.services__paralax').each(function() {
                var $this = $(this);
                var $parallax_about = $this.find('.services__img');
                $(window).on('scroll', function(e) {
                    var scrolled = $(window).scrollTop() - $this.offset().top;
                    if (scrolled <= window.innerHeight * 2) {
                        $parallax_about.css('transform', 'translate3d(0, ' + (scrolled / 8) + 'px, 0)');
                    } else {
                        $parallax_about.css('transform', 'translate3d(0, 0, 0)');
                    }
                });
            });
        }
    }
    if ($('.contacts').length > 0) {
        if ($(window).width() >= '1010'){
            $('.contacts').each(function() {
                var $this = $(this);
                var $parallax_about = $this.find('.contacts__paralax');
                $(window).on('scroll', function(e) {
                    var scrolled = $(window).scrollTop() - $this.offset().top;
                    if (scrolled <= window.innerHeight * 2) {
                        $parallax_about.css('transform', 'translate3d(0, ' + (scrolled / 3) + 'px, 0)');
                    } else {
                        $parallax_about.css('transform', 'translate3d(0, 0, 0)');
                    }
                });
            });
        }
    }

    // Portfolio Swipper Slider
    if ($(".portfolio__slick").length > 0) {
        var swiperHome = $('.portfolio__slick');
	    swiperHome.each(function () {
	        var mySwiper = new Swiper(this, {
	            slidesPerView: 3,
	            spaceBetween: 0,
	            slidesPerGroup: 1,
	            loop: true,
	            loopedSlides: 3,
	            speed: 1000,
	            iOSEdgeSwipeDetection: true,
	            initialSlide: 1,
	            navigation: {
	                nextEl: '.portfolio .arrow.arrow_next',
	                prevEl: '.portfolio .arrow.arrow_prev',
	              },
	            breakpoints: {
	                500: {
	                    slidesPerView: 1,
	                    slidesPerGroup: 1,
	                    initialSlide: 1,
	                },
	                600: {
	                    slidesPerView: 1.4,
	                    slidesPerGroup: 1,
	                    initialSlide: 1,
	                },
	                760: {
	                    slidesPerView: 2,
	                    slidesPerGroup: 1,
	                    initialSlide: 1,
	                },
	                1010: {
	                    slidesPerView: 2,
	                    slidesPerGroup: 1,
	                    initialSlide: 1,
	                }
	            }
	        });
	    });
    }

    // Portfolio Swipper Slider
    if ($(".partners__slick").length > 0) {
        var swiperHome = $('.partners__slick');
        swiperHome.each(function () {
            var mySwiper = new Swiper(this, {
                slidesPerView: 3,
                spaceBetween: 10,
                slidesPerGroup: 1,
                loop: true,
                loopedSlides: 23,
                speed: 1000,
                iOSEdgeSwipeDetection: true,
                initialSlide: 1,
                navigation: {
                    nextEl: '.partners .arrow.arrow_next',
                    prevEl: '.partners .arrow.arrow_prev',
                  },
                breakpoints: {
                    500: {
                        slidesPerView: 1.4,
                        slidesPerGroup: 1,
                        initialSlide: 1,
                    },
                    600: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        initialSlide: 1,
                    },
                    760: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                        initialSlide: 1,
                    },
                    1010: {
                        slidesPerView: 1.4,
                        slidesPerGroup: 1,
                        initialSlide: 1,
                    },
                    1250: {
                        slidesPerView: 2.2,
                        slidesPerGroup: 1,
                        initialSlide: 1,
                    }
                }
            });
        });
    }

    // Popup Slick Slider
	if ($(".popup__slick").length > 0) {
        function initSlideGalleryBig(classSlider){


            $(classSlider).on("init", function(event, slick){
                $(classSlider).parent().find('.popup__info span').html(slick.slideCount);
            });
    	    $(classSlider).slick({
    	        slidesToShow: 1,
    	        slidesToScroll: 1,
    	        arrows: false,
    	        dots: false,
    	        infinite: true,
                speed: 600,
                swipeToSlide: true,
                responsive: [
                    {
                      breakpoint: 760,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                ]
    	    });
    	    $('.arrow.arrow_prev').click(function(event) {
    	        $(this).parents('.popup__body').find('.popup__slick').slick('slickPrev');
    	    });
    	    $('.arrow.arrow_next').click(function(event) {
    	        $(this).parents('.popup__body').find('.popup__slick').slick('slickNext');
    	    });
        }
        initSlideGalleryBig(".popup__slick_1");
        initSlideGalleryBig(".popup__slick_2");
        initSlideGalleryBig(".popup__slick_3");
        initSlideGalleryBig(".popup__slick_4");
        initSlideGalleryBig(".popup__slick_5");
        initSlideGalleryBig(".popup__slick_6");
        initSlideGalleryBig(".popup__slick_7");
        initSlideGalleryBig(".popup__slick_8");
        initSlideGalleryBig(".popup__slick_9");
	}

    if ($('.tariffs__info-btn').length > 0) {
        $('.tariffs__info-btn').mouseover(function () {
            $(this).next().addClass("active");
        });
        $('.tariffs__info-btn').mouseout(function () {
            $(this).next().removeClass("active");
        });
    }

    if ($('#project-modal__content').length > 0) {
        if ($(window).outerWidth() >= '761') {
            const containerID = '#project-modal__content';
            const scrollbar = Scrollbar.init(document.querySelector(containerID), {
                damping: 0.1,
                alwaysShowTracks: true
            });
        }
    }
    if ($('#project-modal__form').length > 0) {
        if ($(window).outerWidth() >= '761') {
            const containerID = '#project-modal__form';
            const scrollbar = Scrollbar.init(document.querySelector(containerID), {
                damping: 0.1,
                alwaysShowTracks: true
            });
        }
    }

    /*$.exitIntent('enable');
    $(document).bind('exitintent', function() {
        $("#exit").slideDown();
    });
    $(".exit__closed").bind('click', function() {
        $("#exit").slideUp();
        return false;
    });*/

    // Accordeon projects
    $('.project-modal__top').click(function() {
      $('.project-modal__top').not(this).parent().removeClass("active");
      $('.project-modal__top').not(this).next().slideUp(200);
      $(this).parent().toggleClass("active");
      $(this).next().slideToggle(200);
    });
    $('.tariffs__items-top').click(function() {
      $('.tariffs__items-top').not(this).parent().removeClass("active");
      $('.tariffs__items-top').not(this).next().slideUp(200);
      $(this).parent().toggleClass("active");
      $(this).next().slideToggle(200);
    });
    $('.stages__mobile-top').click(function() {
      $('.stages__mobile-top').not(this).parent().removeClass("active");
      $('.stages__mobile-top').not(this).next().slideUp(200);
      $(this).parent().toggleClass("active");
      $(this).next().slideToggle(200);
    });

    inView('.director, .left, .right, .scale, .opacity, .bottom-animation').on('enter', function (event, isInView) {
        $(event).addClass('active');
    }).on('exit', function (event, isInView) {
        $(event).removeClass('active');
    });

    // Quiz
    $('.checkbox').on('click', function () {
        var step = $(this).data("next-step");
        $(this).addClass("active");
        var that = this;
        var interval;
        setTimeout(function(){
            interval = setInterval(function () {
                var steps = parseInt($('.calc__right-block').attr('data-number'));
                if (steps < 101) {
                    $(that).find('.checkbox__loading').attr('class', ' checkbox__loading c100 p' + steps);
                    $('.calc__right-block').attr('data-number', steps + 1);
                } else {
                    clearInterval(interval);

                }
            }, 30);
        }, 300);
        $('.calc__right-block').attr('data-number', 1);
        setTimeout(function(){
            $(".quiz__step").removeClass("visible");
            $(".calc__left-block").removeClass("visible");
            $('.checkbox').removeClass("active");
            $(that).parent().parent().parent().find('.quiz__step[data-step="' + step + '"]').addClass("visible");
            $(that).parent().parent().parent().parent().parent().parent().parent().find('.calc__left-block[data-step="' + step + '"]').addClass("visible");
            if ($('.quiz__step[data-step="6"]').hasClass("visible")) {
                $('.calc__left-block[data-step="6"]').addClass("visibility");
                $('.quiz__step[data-step="6"]').addClass("visibility");
            }
            let percent = ((100 - (step * 16)) / 10);
            $('.quiz__scale span').css('transform', 'scaleX(0.' + Math.round(percent) + ')');
        }, 1800);

    });
    $('.calc__right-link').on('click', function () {
        var step = $(this).data("next-step");
        $(".quiz__step").removeClass("visible");
        $(".calc__left-block").removeClass("visible");
        $(this).parent().parent().find('.quiz__step[data-step="' + step + '"]').addClass("visible");
        $(this).parent().parent().parent().parent().parent().parent().find('.calc__left-block[data-step="' + step + '"]').addClass("visible");
        if ($('.quiz__step[data-step="6"]').hasClass("visible")) {
            $('.calc__left-block[data-step="6"]').addClass("visibility");
            $('.quiz__step[data-step="6"]').addClass("visibility");
        }
        let percent = ((100 - (step * 16)) / 10);
        $('.quiz__scale span').css('transform', 'scaleX(0.' + Math.round(percent) + ')');
        $(this).parent().find(".checkbox_hide").trigger('click');
    });
    $('.checkbox.calc--js').on('click', function () {
        setTimeout(function(){
            $("body").addClass("lock");
            $(".quiz__modal").addClass("active");
        }, 1800);
    });
    $('.calc__right-link.calc--js').on('click', function () {
        $("body").addClass("lock");
        $(".quiz__modal").addClass("active");
    });
    $('.quiz__close').on('click', function () {
        $("body").removeClass("lock");
        $(".quiz__modal").removeClass("active");
    });

    if ($('.calc__img').length > 0) {
        if ($(window).width() >= '1010'){
            $('.calc__img').each(function() {
                var $this = $(this);
                var $parallax_about = $this.find('span');
                $(window).on('scroll', function(e) {
                    var scrolled = $(window).scrollTop() - $this.offset().top + 500;
                    var scale = 1;
                    var coefficient = 3;
                    var size = 99 * coefficient;

                    if(scrolled <= size ){
                        if(scrolled < size && scrolled >= 0 ){
                            if(scrolled<10){
                                scrolled = 10;
                            }
                            scale = Math.round(100 - (scrolled / coefficient) );

                        } else if(scrolled < 0  ){
                            scale = 1;
                        } else if(scrolled > size  ){
                            scale = 0;

                        }

                        console.log('scrolled = '+ scrolled + '| scale  = '+ scale);
                        if(scale == 1 ||  scale == 0){
                            $parallax_about.css('transform', 'scaleY('+scale+')');
                        } else if(scale > 1 &&  scale < 10){
                            $parallax_about.css('transform', 'scaleY(0.0' + scale +')');
                        } else {
                            $parallax_about.css('transform', 'scaleY(0.' + scale +')');
                        }


                    } else  if(scrolled >= size){
                        $parallax_about.css('transform', 'scaleY(0)');
                    } else if(scrolled < 10) {
                        $parallax_about.css('transform', 'scaleY(1)');
                    }

                });
            });
        }
    }

    if ($(window).outerWidth() >= '761') {
        const containerID = '#confidentiality-modal';
        const scrollbar = Scrollbar.init(document.querySelector(containerID), {
            damping: 0.1,
            alwaysShowTracks: true
        });
    }

    $(".confidentiality").fancybox({
        baseClass: "confidentiality__bg",
        autoFocus: false,
    });

    // form
    $('form').submit(function(e){

        var form   = $(this),
            errors = true,
            notice = $('.notice');

        form.find('[type="text"][data-error]').each(function(){
            if (errors) {
                var field = $(this);
                var val = field.val();
                var textError = field.attr('data-error');

                if(val == ''){
                    notice.text(textError).addClass('active');
                    field.addClass('field-error');
                    setTimeout(function(){
                        notice.text('').removeClass('active');
                    }, 2000);
                    errors = false;
                    field.focus();
                } else {
                    $(this).removeClass('field-error');
                }
            }
        });

        if (errors) {
            return true;
        } else {
            return false;
        }

    });

    // Fancybox
    if($('.fancybox').length > 0){
        $(".fancybox").fancybox({
            loop : false,
            arrows : true,
            buttons : [
                'thumbs',
                'close'
            ],
        });
    }

});



$(document).scroll(function () {

    if ($(window).width() >= '1010') {
        var s_top = $(document).scrollTop();
        var services__coll = new Array();
        var count = $(".stages__left-block").length;
        for (var i = 1; i <= count; i++) {
            services__coll[i] = $(".stages__left-block_" + i).offset().top - 60;
        }
        for (var i = 1; i <= count; i++) {
            if (s_top > services__coll[i]) {
                if (i == count) {
                    $('.stages__right-block.active').not('.stages__right-block_' + i).removeClass('active');
                    $('.stages__number.active').not('.stages__number_' + i).removeClass('active');
                    $('.stages__right-block_' + i).addClass('active');
                    $('.stages__number_' + i).addClass('active');

                } else {
                    if (s_top < services__coll[i + 1]) {
                        $('.stages__right-block.active').not('.stages__right-block_' + i).removeClass('active');
                    	$('.stages__number.active').not('.stages__number_' + i).removeClass('active');
                        $('.stages__right-block_' + i).addClass('active');
                    	$('.stages__number_' + i).addClass('active');

                    }
                }
            }
        }
    }

});
