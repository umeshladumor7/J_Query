wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animate__animated', // default
        offset: 350,          // default
        mobile: true,       // default
        live: true        // default
    }
)
wow.init();


$('.btntop').click(function () {
    document.documentElement.scrollTop = 0;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $(".container12").addClass('sticky');
    }
    else {
        $('.container12').removeClass('sticky');
    }
});

$('.bg1').click(function () {
    $(this).css("background-color", "blue");
});

$('.btntop').hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $(".btntop").show();
    }
    else {
        $('.btntop').hide();
    }
});

$('.btntop').click(function () {
    document.documentElement.scrollTop = 0;
});


$('.btntop').hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $(".btntop").show();
    }
    else {
        $('.btntop').hide();
    }
});

$('.btntop').click(function () {
    document.documentElement.scrollTop = 0;
});


var menu = [];
jQuery('.swiper-slide').each(function (index) {
    menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
});
var interleaveOffset = 0.5;
var swiperOptions = {
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    on: {
        progress: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress;
                var innerOffset = swiper.width * interleaveOffset;
                var innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
            }
        },

        touchStart: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
            }
        },

        setTransition: function (speed) {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
            }
        }
    }
};

var swiper = new Swiper(".swiper-container", swiperOptions);

// DATA BACKGROUND IMAGE
var sliderBgSetting = $(".slide-bg-image");
sliderBgSetting.each(function (indx) {
    if ($(this).attr("data-background")) {
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
});
window.onload = () => {
    // $(selector).countMe(delay,speed)
    $("#num1").countMe(10, 8);
    $("#num2").countMe(15, 6);
    $("#num3").countMe(16, 7);
}
$(document)
    .mousemove(function (e) {
        $('.cursor')
            .eq(0)
            .css({
                left: e.clientX,
                top: e.clientY
            });
        setTimeout(function () {
            $('.cursor')
                .eq(1)
                .css({
                    left: e.clientX,
                    top: e.clientY
                });
        }, 100);
    })
const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slideActiveClass: "active",
    navigation: {
        nextEl: ".next",
        prevEl: ".prev"
    },
    pagination: {
        el: ".pagination",
        clickable: true
    },
    autoplay: {
        enabled: true,
        delay: 5000
    },
});
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    loop: true,
    slidesPerView: "2",
    coverflowEffect: {
        rotate: 0,
        stretch: 30,
        depth: 100,
        modifier: 5,
        slideShadows: true
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: false
    }
});
$('[data-fancybox]').fancybox({
    // Options will go here
    buttons: [
        'close'
    ],
    wheel: false,
    transitionEffect: "slide",
    // thumbs          : false,
    // hash            : false,
    loop: true,
    // keyboard        : true,
    toolbar: false,
    // animationEffect : false,
    // arrows          : true,
    clickContent: false
});