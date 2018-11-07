var windowWidth = window.innerWidth;
var velocity = 0.2;

function update() {
    var pos = jQuery(window).scrollTop();
    jQuery('.dices').each(function () {
        var $element = jQuery(this);
        var height = $element.height() + 1500;
        jQuery(this).css('backgroundPosition', '50% ' + Math.round(((height - pos) * velocity)) + 'px');
        jQuery('.dices > .bfwrapper').css('bottom', '-20px ' + Math.round(((height - pos) * velocity)) + 'px');
    });
};



function initializeClock() {
        // Set the date we're counting down to
        var countDownDate = new Date("Nov 23, 2018 00:00:01").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {
    
            // Get todays date and time
            var now = new Date().getTime();
    
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
    
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            // Display the result in the element with id="clock"
            // document.getElementById("clock").innerHTML = days + "d " + hours + "h "
            // + minutes + "m " + seconds + "s ";
    
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
    
    
            // If the count down is finished, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("clock").innerHTML = "EXPIRED";
            }
        }, 1000);
}

jQuery(window).bind('scroll', update);

jQuery(window).scroll(function (event) {
    var sc = jQuery(window).scrollTop();
    //console.log(sc);

    if (sc > 146) {
        jQuery('.menu').addClass('active');
    } else {
        jQuery('.menu').removeClass('active');
    }

});


jQuery(document).ready(function () {

    initializeClock();

    jQuery('.menu__link').click(function () {
        jQuery('.menu__link').parent().removeClass('active');
        jQuery(this).parent().addClass('active');
    });

    jQuery('.history__link').click(function () {
        jQuery('.history__cont').toggleClass('active');
        jQuery(this).toggleClass('active');
    });

    jQuery('.tips__block').click(function () {
        jQuery('.tips__title', this).toggleClass('active');
        jQuery('.tips__cont', this).toggleClass('active');
    });



    jQuery("a[href^='#']").click(function (e) {
        e.preventDefault();

        var position = jQuery(jQuery(this).attr("href")).offset().top;

        jQuery("body, html").animate({
            scrollTop: (position - 100)
        } /* speed */);
    });


});


