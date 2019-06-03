"use strict"; 

onePageScroll(".projects", {
    sectionContainer: "article",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease-in-out",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", 
                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
    pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: true        // You can fallback to normal page scroll by defining the width of the browser in which
                                     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever 
                                     // the browser's width is less than 600, the fallback will kick in.
 });

 // variables of button and popup classes
 let cta = document.querySelector('.cta__button'), 
     popup = document.querySelector('.popup'),
     popupOpen = document.querySelector('.popup--open'),
     contactUs = document.querySelector('.contact-us'),
     contactUsOpen = document.querySelector('.contact-us--open'),
     contactUsButton = document.querySelector('.contact-us__button'),
     contactUsButtonSuccess = document.querySelector('.contact-us__button--success'),
     nameInput = document.getElementById('name'),
     emailInput = document.getElementById('email');

 cta.onclick = () => {
     popup.classList.add('open');
     contactUs.classList.add('open');
 }
 
popup.onclick = (e) => {
    if(!event.target.matches('[data-contact]')){
        popup.classList.remove('open');
        contactUs.classList.remove('open');
    }
} 

contactUsButton.onclick = (e) => {
    e.preventDefault();
    if(nameInput.value && emailInput.value){
        [nameInput, emailInput].forEach(input => input.classList.remove('invalid'))
        contactUsButton.classList.add('contact-us__button--success');
        setTimeout(() => {
            contactUsButton.innerHTML = '&#10004;';
        }, 1800)
    }else{
        [nameInput, emailInput].forEach(input => input.classList.add('invalid'))
    }
}