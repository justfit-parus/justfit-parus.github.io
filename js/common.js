$(document).ready(function() {

    var tools = $(".tools-slider");
    var secret = $(".secret-slider");
    var checkWidth = $(window).width();

    tools.owlCarousel({
        loop: true,
        responsive: true,
        singleItem: true,
        itemClass: "tools-item"
    });

    $(".tools-next, .tools-m-next").click(function() {
        tools.trigger('owl.next');
    });
    $(".tools-prev, .tools-m-prev").click(function() {
        tools.trigger('owl.prev');
    });

    function owlSecret() {
        if (checkWidth > 801) {
            secret.data('owlCarousel').destroy();
            secret.removeClass('owl-carousel');
        } else if (checkWidth < 800) {
            secret.owlCarousel({
                loop: true,
                responsive: true,
                singleItem: true,
                itemClass: "tools-item",
            });
        }
        $(document).ready(owlSecret);
        $(window).resize(owlSecret);

        $(".secret-next").click(function() {
            secret.trigger('owl.next');
        });
        $(".secret-prev").click(function() {
            secret.trigger('owl.prev');
        });
    }

    //Popups
    $('.call').click(function(event) { // лoвим клик
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('.popup, .overlay').css('display', 'block'); // убирaем у мoдaльнoгo oкнa display: none;
        $('.popup, .overlay').animate({
            opacity: 1
        }, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
    //Popup buisness
    $('.call-buisness').click(function(event) { // лoвим клик
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('.popup-buisness, .overlay').css('display', 'block'); // убирaем у мoдaльнoгo oкнa display: none;
        $('.popup-buisness, .overlay').animate({
            opacity: 1
        }, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });

    //popup close
    $('.close-button, .overlay').click(function() { // лoвим клик пo крестику или пoдлoжке
        $('.popup, .popup-buisness, .overlay')
            .animate({
                    opacity: 0
                }, 200, // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function() { // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                }
            );
    });



    //mobile menu
    $('.m-header').click(function(event) { // лoвим клик
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('.humburger').toggleClass('open');
        $('.list-mobile').slideToggle('fast');
    });

    //Chrome Smooth Scroll
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
