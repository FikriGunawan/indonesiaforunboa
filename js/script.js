/* =============================================================== */
/*                  Animation                                      */
/* =============================================================== */
// Animation On Load First Section
$(function() {
  var tarNav = $('.tarNav');
  var tarHead01 = $('.tarHead01');
  var tarHead02 = $('.tarHead02');
  var tarHead03 = $('.tarHead03');
  setTimeout(function() {
    tarNav.addClass('anim');
    tarHead01.addClass('anim');
    tarHead02.addClass('anim');
    tarHead03.addClass('anim');
  }, 1000);
});
// Animation Content
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
      if (pos < winTop + 2000) {
        $(this).addClass("slide");
      }
  });
});
$(window).scroll(function() {
  $(".slideanimUp").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
      if (pos < winTop + 2000) {
        $(this).addClass("slideUp");
      }
  });
});
$(window).scroll(function() {
  $(".slideanimLeft").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
      if (pos < winTop + 2000) {
        $(this).addClass("slideLeft");
      }
  });
});
$(window).scroll(function() {
  $(".slideanimRight").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
      if (pos < winTop + 2000) {
        $(this).addClass("slideRight");
      }
  });
});
// Animation Ornament
$(document).ready(function(){
  $(window).scroll(function(){
    windowTop = $(window).scrollTop();
    $('.move-up').css({
      'transform':'translateY('+(windowTop) * -0.15 +'px)'
    });
    $('.move-down').css({
      'transform':'translateY('+(windowTop) * 0.15 +'px)'
    });
    $('.move-left').css({
      'transform':'translateX('+(windowTop) * -0.15 +'px)'
    });
    $('.move-right').css({
      'transform':'translateX('+(windowTop) * 0.15 +'px)'
    });
  });
});
// Animation Commitment Section
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
// Animation Timeline
$(function () {
  var elements = $(".tltrigger01").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 0) {
        $(".sldrg01").addClass("active");
        $(".sldlt01").addClass("active");
      }else{
        $(".sldrg01").removeClass("active");
        $(".sldlt01").removeClass("active");
      }
    });
  });
});
$(function () {
  var elements = $(".tltrigger02").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 0) {
        $(".sldrg02").addClass("active");
        $(".sldlt02").addClass("active");
      }else{
        $(".sldrg02").removeClass("active");
        $(".sldlt02").removeClass("active");
      }
    });
  });
});
$(function () {
  var elements = $(".tltrigger03").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 0) {
        $(".sldlt03").addClass("active");
      }else{
        $(".sldlt03").removeClass("active");
      }
    });
  });
});
$(function () {
  var elements = $(".tltrigger04").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 0) {
        $(".sldlt04").addClass("active");
      }else{
        $(".sldlt04").removeClass("active");
      }
    });
  });
});
$(function () {
  var elements = $(".tltrigger05").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 0) {
        $(".sldlt05").addClass("active");
      }else{
        $(".sldlt05").removeClass("active");
      }
    });
  });
});
$(function () {
  var elements = $(".tltrigger06").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 0) {
        $(".sldrg03").addClass("active");
        $(".sldlt06").addClass("active");
      }else{
        $(".sldrg03").removeClass("active");
        $(".sldlt06").removeClass("active");
      }
    });
  });
});
$(function () {
  var elements = $(".tltrigger07").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 0) {
        $(".sldrg04").addClass("active");
        $(".sldlt07").addClass("active");
      }else{
        $(".sldrg04").removeClass("active");
        $(".sldlt07").removeClass("active");
      }
    });
  });
});
$(function () {
  var elements = $(".tltrigger08").toArray();
  $(window).scroll(function () {
    elements.forEach(function (item) {
      if ($(this).scrollTop() >= $(item).offset().top - 0) {
        $(".sldrg05").addClass("active");
        $(".sldlt08").addClass("active");
      }else{
        $(".sldrg05").removeClass("active");
        $(".sldlt08").removeClass("active");
      }
    });
  });
});
/* =============================================================== */
/*                  End Animation                                  */
/* =============================================================== */
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
  $('.burgerBtn').click(function() {
    $(".burgerBtn").addClass("active");
    $(".closeBtn").addClass("active");
    $("#navigation").addClass("active");
  });
  $('.closeBtn').click(function() {
    $(".burgerBtn").removeClass("active");
    $(".closeBtn").removeClass("active");
    $("#navigation").removeClass("active");
  });
  $('#navigation .menu ul li a').click(function() {
    $(".burgerBtn").removeClass("active");
    $(".closeBtn").removeClass("active");
    $("#navigation").removeClass("active");
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
        items: 3,
        center: true,
        margin: 10
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
    responsive:{
      0:{
        items: 1,
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
  // Mobile Gallery
  $('.mobileGallery').addClass('owl-carousel owl-theme').owlCarousel({
    responsiveClass: true,
    center: true,
    nav: false,
    dots: true,
    loop: true,
    autoplay: true,
    responsive:{
      0:{
        items: 1,
        stagePadding: 50,
        margin: 10
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
  // End Mobile Gallery
});

// Strengths
function xSlider02() {
  return {
    swiper: null,
    init: function () {
      this.swiper = new Swiper(this.$el.querySelector('.swiper'), {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        effect: 'creative',
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", "100%", 0],
            rotate: [0, 0, 45],
            origin: 'right bottom',
          },
        },
        on: {
          slideChange: (swiper) => {
            this.activeSlideIndex = swiper.activeIndex;
            this.timeoutPercent = 0;
          }
        }
      });
      this.slidesCount = this.swiper.slides.length;
      this.$watch('activeSlideIndex', (slideIndex) => {
        if (this.swiper.activeIndex === slideIndex) {
          return;
        }
        this.swiper.slideTo(slideIndex);
      });
    }
  }
}
function xSlider02wrap() {
  return {
    slidesCount: 1,
    activeSlideIndex: 0,
    timeoutDuration: 3000,
    timeoutPercent: 0,
    refreshInterval: 50,
    hasHover: false,
    inViewport: false,
    init: function () {
      setInterval(() => {
        if (this.hasHover) {
          this.timeoutPercent = .0;
          return;
        }
        if (!this.inViewport) {
          this.timeoutPercent = 0;
          return;
        }
        if (document.documentElement.classList.contains('touch')) {
          this.timeoutPercent = 0;
          return;
        }
        if (this.timeoutPercent > 1) {
          this.timeoutPercent = 0;
          if (this.activeSlideIndex + 1 <= this.slidesCount - 1) {
            this.activeSlideIndex++;
          } else {
            this.activeSlideIndex = 0;
          }
        }
        this.timeoutPercent += this.refreshInterval / this.timeoutDuration;
      }, this.refreshInterval)
    }
  }
}