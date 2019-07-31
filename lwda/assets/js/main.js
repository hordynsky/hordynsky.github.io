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

window.onload = function(){
  let team = document.querySelector('.team');
  let teamWrapper = team.querySelector('.team-wrapper');
  let header = document.querySelector('header');

  if(document.documentElement.offsetWidth >= 1280){
    swiper.destroy(true, true);
    teamWrapper.classList.remove('swiper-wrapper');
    header.style.position = 'absolute';
  }

}


// var header = document.querySelector('header.header');

// document.querySelectorAll('article').forEach(art => art.style.paddingTop = header.offsetHeight + 33 + 'px')

/* One Page Scroll */

