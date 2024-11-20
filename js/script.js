$(function() {
  var HDOr01 = $('.HDOr01');
  setTimeout(function() {
    HDOr01.addClass('HDOr01Anim');
  }, 2500);
});
$(function () {
  var elements = $(".commitmentAnim01").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 0) {
        $(".titleAnim-01").removeClass("active");
        $(".titleAnim-02").addClass("active");
      }else{
        $(".titleAnim-01").addClass("active");
        $(".titleAnim-02").removeClass("active");
      }
    });
  });
});



/*
$(document).ready(function() {
  $('#navigation').removeClass("show");
  // Fixed Show and Hide
  let prevScrollPos = window.pageYOffset;
  window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.querySelector('#navigation').classList.add('show');
    }else{
      document.querySelector('#navigation').classList.remove('show');
    }
    prevScrollPos = currentScrollPos;
  });
  $(function () {
    $(window).scroll(function () {
      if ($('#navigation').scrollTop() = 0) {
        $('#navigation').addClass("test");
      }
    });
  });
});
*/ 








$(document).ready(function(){
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $("#navigation").addClass('change');
      } else {
        $("#navigation").removeClass('change');
      }
    });
  });
});

$("#navigation .menu ul li:nth-child(1)").addClass("active");
$(function () {
  var elements = $("#header").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 100) {
        $("#navigation .menu ul li:nth-child(1)").addClass("active");
        $("#navigation .menu ul li:nth-child(2)").removeClass("active");
        $("#navigation .menu ul li:nth-child(3)").removeClass("active");
        $("#navigation .menu ul li:nth-child(4)").removeClass("active");
        $("#navigation .menu ul li:nth-child(5)").removeClass("active");
      }
    });
  });
});
$(function () {
  var elements = $("#chair-statement").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 100) {
        $("#navigation .menu ul li:nth-child(1)").removeClass("active");
        $("#navigation .menu ul li:nth-child(2)").addClass("active");
        $("#navigation .menu ul li:nth-child(3)").removeClass("active");
        $("#navigation .menu ul li:nth-child(4)").removeClass("active");
        $("#navigation .menu ul li:nth-child(5)").removeClass("active");
      }
    });
  });
});
$(function () {
  var elements = $("#strengths").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 100) {
        $("#navigation .menu ul li:nth-child(1)").removeClass("active");
        $("#navigation .menu ul li:nth-child(2)").removeClass("active");
        $("#navigation .menu ul li:nth-child(3)").addClass("active");
        $("#navigation .menu ul li:nth-child(4)").removeClass("active");
        $("#navigation .menu ul li:nth-child(5)").removeClass("active");
      }
    });
  });
});
$(function () {
  var elements = $("#commitment").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 100) {
        $("#navigation .menu ul li:nth-child(1)").removeClass("active");
        $("#navigation .menu ul li:nth-child(2)").removeClass("active");
        $("#navigation .menu ul li:nth-child(3)").removeClass("active");
        $("#navigation .menu ul li:nth-child(4)").removeClass("active");
        $("#navigation .menu ul li:nth-child(5)").addClass("active");
      }
    });
  });
});
$(function () {
  var elements = $("#portfolio").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 100) {
        $("#navigation .menu ul li:nth-child(1)").removeClass("active");
        $("#navigation .menu ul li:nth-child(2)").removeClass("active");
        $("#navigation .menu ul li:nth-child(3)").removeClass("active");
        $("#navigation .menu ul li:nth-child(4)").addClass("active");
        $("#navigation .menu ul li:nth-child(5)").removeClass("active");
      }
    });
  });
});

// Go Down
$(document).ready(function() {
  document.getElementById("godown").addEventListener("click", function() { 
    window.scrollTo(0, 850); 
  }); 
});

// Go Top
$(document).ready(function(){
  $(function () {
    $('.gotop').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 0);
      return false;
    });
  });
});

$(document).ready(function() {
  // Stage Padding Slider 01
  $('.stagePadding-01').addClass('owl-carousel owl-theme').owlCarousel({
    responsiveClass: true,
    nav: false,
    dots: true,
    loop: true,
    autoplay: true,
    responsive:{
      0:{
        items: 1,
        stagePadding: 20,
        margin: 0
      },
      600:{
        items: 2,
        stagePadding: 100,
        margin: 0
      },
      1000:{
        items: 2,
        stagePadding: 100,
        margin: 0
      }
    }
  })
  var navStagePadding01 = $('.stagePadding-01');
  navStagePadding01.owlCarousel();
  $('.navStagePadding01PrevBtn').click(function() {navStagePadding01.trigger('prev.owl.carousel');})
  $('.navStagePadding01NextBtn').click(function() {navStagePadding01.trigger('next.owl.carousel');})
  // End Stage Padding Slider 01
  // Stage Padding Slider 02
  $('.stagePadding-02').addClass('owl-carousel owl-theme').owlCarousel({
    responsiveClass: true,
    nav: false,
    dots: true,
    // loop: true,
    // autoplay: true,
    responsive:{
      0:{
        items: 1,
        stagePadding: 20,
        margin: 0
      },
      600:{
        items: 3,
        stagePadding: 100,
        margin: 0
      },
      1000:{
        items: 3,
        stagePadding: 100,
        margin: 0
      }
    }
  })
  var navStagePadding02 = $('.stagePadding-02');
  navStagePadding02.owlCarousel();
  $('.navStagePadding02PrevBtn').click(function() {navStagePadding02.trigger('prev.owl.carousel');})
  $('.navStagePadding02NextBtn').click(function() {navStagePadding02.trigger('next.owl.carousel');})
  // End Stage Padding Slider 02
});