/* Main Slider */
var swiper = new Swiper({
    el: '.team-members',
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
    pagination: {
      el: '.team-pagination',
      clickable: true
    },
    mobileFirst: true,
    swipe: false,
    lazy: true,
    preloadImages: false,
});


// var header = document.querySelector('header.header');

// document.querySelectorAll('article').forEach(art => art.style.paddingTop = header.offsetHeight + 33 + 'px')

/* One Page Scroll */

