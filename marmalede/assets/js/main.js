/* Main Slider */
var swiper = new Swiper({
    el: '.swiper-container',
    centeredSlides: true,
    slideToClickedSlide: true,
    grabCursor: true,
    loop: true,
    mousewheel: {
      enabled: true,
      forceToAxis: true,
      invert: true
    },
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mobileFirst: true,
    swipe: false,
    lazy: true,
    preloadImages: false,
});

/* RangeSlider */
var swiper = new Swiper({
  el: '.range-container',
  centeredSlides: true,
  grabCursor: true,
  mousewheel: {
    enabled: true,
    forceToAxis: true,
    invert: true
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
    dragSize: 20,
    slidesPerView: 1
  },
  mousewheel: {
    enabled: true
  },
  keyboard: {
    enabled: true,
  },
  mobileFirst: true,
  lazy: true,
  preloadImages: false,
});

var header = document.querySelector('header.header');

document.querySelectorAll('article').forEach(art => art.style.paddingTop = header.offsetHeight + 33 + 'px')

/* One Page Scroll */

