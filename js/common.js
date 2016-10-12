$(document).ready(function() {

    $(window).scroll(function() {
      var st = $(this).scrollTop();
      $('.present-img').css ({
        'transform' : "translate(0%, -" + st/50 + "%"
      });
    });

    $('#blogapp-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        autoplay: true
    });

    $(".blogapp-next").click(function() {
        $('#blogapp-carousel').trigger('next.owl.carousel');
    });
    $(".blogapp-prev").click(function() {
        $('#blogapp-carousel').trigger('prev.owl.carousel');
    });

    $('#nativator-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        autoplay: true
    });

    $(".nativator-next").click(function() {
        $('#nativator-carousel').trigger('next.owl.carousel');
    });
    $(".nativator-prev").click(function() {
        $('#nativator-carousel').trigger('prev.owl.carousel');
    });

    $('#car-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000
    });

    $(".app-next").click(function() {
        $('#car-carousel').trigger('next.owl.carousel');
    });
    $(".app-prev").click(function() {
        $('#car-carousel').trigger('prev.owl.carousel');
    });

    $('#phone1').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000
    });
    setTimeout(function() {
        $('#phone2').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: false,
            lazyLoad: true,
            autoplay: true,
            autoplayTimeout: 3000
        });
    }, 200)
    setTimeout(function() {
        $('#phone3').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: false,
            lazyLoad: true,
            autoplay: true,
            autoplayTimeout: 3000
        });
    }, 600)

    $(".mag-app-next").click(function() {
        $('#phone1').trigger('next.owl.carousel');
        setTimeout(function() {
            $('#phone2').trigger('next.owl.carousel');
        }, 200)
        setTimeout(function() {
            $('#phone3').trigger('next.owl.carousel');
        }, 400)
    });
    $(".mag-app-prev").click(function() {
        $('#phone1').trigger('prev.owl.carousel');
        setTimeout(function() {
            $('#phone2').trigger('prev.owl.carousel');
        }, 200)
        setTimeout(function() {
            $('#phone3').trigger('prev.owl.carousel');
        }, 400)
    });


    // popup
    $('.lang-on').click(function(event) {
        event.preventDefault();
        $('.popup-lang').css('display', 'flex');
        $('.wrapper').css('filter', 'blur(30px)');
        $('.main-wrapper').css({
            'position': 'fixed',
            'width': '100%',
            'margin': '0 auto'
        });
    });

    // popup close
    $('.popup-lang, .lang li').click(function() {
        $('.popup-lang').css('display', 'none');
        $('.wrapper').css('filter', 'none');
        $('.main-wrapper').css({
            'position': 'relative',
            'margin': '0'
        });
    });

    // close lang panel
    $('.lang-off').click(function() {
        $('.lang').css('display', 'none');
    })

    // chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });
});
