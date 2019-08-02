/* Main Slider */

let swiper;

let pagination = document.querySelector('.team-pagination');


// document.querySelectorAll('article').forEach(art => art.style.paddingTop = header.offsetHeight + 33 + 'px')

/* One Page Scroll */

let breakpoint = window.matchMedia( '(min-width:1280px)' );

const breakpointChecker = function(){
  if(breakpoint.matches === true){
    if(swiper !== undefined){
      swiper.destroy(true,true)
      pagination.style.display = 'none';
    }
    return
  }else if(breakpoint.matches === false){
    pagination.style.display = 'block';
    return enableSwiper();
  }
}

const enableSwiper = function(){
  swiper = new Swiper({
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
}

breakpoint.addListener(breakpointChecker);
breakpointChecker();

