"use strict"; 

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
    let pattern = /^[a-zA-Z0-9.!#$%&*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(nameInput.value && emailInput.value && pattern.test(emailInput.value)){
        [nameInput, emailInput].forEach(input => input.classList.remove('invalid'))
        contactUsButton.classList.add('contact-us__button--success');
        setTimeout(() => {
            contactUsButton.innerHTML = '&#10004;';
        }, 1800)
    }else{
        [nameInput, emailInput].forEach(input => input.classList.add('invalid'))
    }
}

var typed = new Typed("#main__text", {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: ['My name is Brandon and I am a UX Designer based in Fort Myers, Florida. Current designer at <span><a href="#">@Townview.</a></span>'],
    stringsElement: null,
  
    /**
     * @property {number} typeSpeed type speed in milliseconds
     */
    typeSpeed: 50,
  
    /**
     * @property {number} startDelay time before typing starts in milliseconds
     */
    startDelay: 100,
  
    /**
     * @property {number} backSpeed backspacing speed in milliseconds
     */
    backSpeed: 100,
  
    /**
     * @property {boolean} smartBackspace only backspace what doesn't match the previous string
     */
    smartBackspace: true,
  
    /**
     * @property {boolean} shuffle shuffle the strings
     */
    shuffle: false,
  
    /**
     * @property {number} backDelay time before backspacing in milliseconds
     */
    backDelay: 1100,
  
    /**
     * @property {boolean} fadeOut Fade out instead of backspace
     * @property {string} fadeOutClass css class for fade animation
     * @property {boolean} fadeOutDelay Fade out delay in milliseconds
     */
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
  
    /**
     * @property {boolean} loop loop strings
     * @property {number} loopCount amount of loops
     */
    loop: false,
    loopCount: Infinity,
  
    /**
     * @property {boolean} showCursor show cursor
     * @property {string} cursorChar character for cursor
     * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
     */
    showCursor: false,
    cursorChar: '|',
    autoInsertCss: true,
  
    /**
     * @property {string} attr attribute for typing
     * Ex: input placeholder, value, or just HTML text
     */
    attr: null,
  
    /**
     * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
     */
    bindInputFocusEvents: false,
  
    /**
     * @property {string} contentType 'html' or 'null' for plaintext
     */
    contentType: 'html',
  
    /**
     * All typing is complete
     * @param {Typed} self
     */
    onComplete: (self) => {},
  
    /**
     * Before each string is typed
     * @param {number} arrayPos
     * @param {Typed} self
     */
    preStringTyped: (arrayPos, self) => {},
  
    /**
     * After each string is typed
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onStringTyped: (arrayPos, self) => {},
  
    /**
     * During looping, after last string is typed
     * @param {Typed} self
     */
    onLastStringBackspaced: (self) => {},

    /**
     * Typing has been stopped
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onTypingPaused: (arrayPos, self) => {},
  
    /**
     * Typing has been started after being stopped
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onTypingResumed: (arrayPos, self) => {},
  
    /**
     * After reset
     * @param {Typed} self
     */
    onReset: (self) => {},
  
    /**
     * After stop
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onStop: (arrayPos, self) => {},
  
    /**
     * After start
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onStart: (arrayPos, self) => {},
  
    /**
     * After destroy
     * @param {Typed} self
     */
    onDestroy: (self) => {}
});
