var windowWidth = window.innerWidth;

var velocity = 0.2;

function update() {
    var pos = jQuery(window).scrollTop();

    jQuery('.dices').each(function () {
        var $element = jQuery(this);
        // subtract some from the height b/c of the padding
        var height = $element.height() + 1500;
        jQuery(this).css('backgroundPosition', '50% ' + Math.round(((height - pos) * velocity)) + 'px');
        jQuery('.dices img').css('bottom', '-20px ' +  Math.round(((height - pos) * velocity)) + 'px');
    });
};

jQuery(window).bind('scroll', update);

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.timer__day');
    var hoursSpan = clock.querySelector('.timer__hour');
    var minutesSpan = clock.querySelector('.timer__min');
    var secondsSpan = clock.querySelector('.timer__sec');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}


jQuery(document).ready(function () {
    jQuery('.menu__item').click(function () {
        jQuery('.menu__item').removeClass('active');
        jQuery(this).addClass('active');
    });

    jQuery(window).scroll(function (event) {
        var sc = jQuery(window).scrollTop();
        //console.log(sc);

        if (sc > 146) {
            jQuery('.menu').addClass('active');
        } else {
            jQuery('.menu').removeClass('active');
        }

    });


    jQuery('.history__link').click(function () {
        jQuery('.history__cont').toggleClass('active');
        jQuery(this).toggleClass('active');
    });

    jQuery('.tips__block').click(function () {
        jQuery('.tips__title', this).toggleClass('active');
        jQuery('.tips__cont', this).toggleClass('active');
    });

    var deadline = new Date(Date.parse('Nov 23, 2018'));
    initializeClock('timer', deadline);

    jQuery("a[href^='#']").click(function(e) {
        e.preventDefault();
        
        var position = jQuery(jQuery(this).attr("href")).offset().top;
    
        jQuery("body, html").animate({
            scrollTop: position
        } /* speed */ );
    });

});




