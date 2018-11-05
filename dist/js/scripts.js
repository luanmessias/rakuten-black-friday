var windowWidth = window.innerWidth;

var velocity = 0.2;

function update() {
    var pos = $(window).scrollTop();

    $('.dices').each(function () {
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height() + 1500;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
    });
};

$(window).bind('scroll', update);

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


  $(document).ready(function () {
    $('.menu__item').click(function () {
        $('.menu__item').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function (event) {
        var sc = $(window).scrollTop();
        //console.log(sc);

        if (sc > 146) {
            $('.menu').addClass('active');
        } else {
            $('.menu').removeClass('active');
        }

    });


    $('.history__link').click(function () {
        $('.history__cont').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.tips__block').click(function () {
      $('.tips__title', this).toggleClass('active');
      $('.tips__cont', this).toggleClass('active');
  });

    var deadline = new Date(Date.parse('Nov 23, 2018'));
    initializeClock('timer', deadline);

});

function goTo(element) {
  $('html, body').animate({
      scrollTop: $(element).offset().top
  }, 2000);
}


 