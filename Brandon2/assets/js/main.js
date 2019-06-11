"use strict"; 

 // variables of button and popup classes
 let contactUsButton = document.querySelector('.contact-us__button'),
     contactUsButtonSuccess = document.querySelector('.contact-us__button--success'),
     nameInput = document.getElementById('name'),
     emailInput = document.getElementById('email');


contactUsButton.onclick = (e) => {
    e.preventDefault();
    let pattern = /^[a-zA-Z0-9.!#$%&*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(nameInput.value && emailInput.value && pattern.test(emailInput.value)){
        [nameInput, emailInput].forEach(input => input.classList.remove('invalid'));
        contactUsButton.classList.add('contact-us__button--success');
        setTimeout(() => {
            contactUsButton.innerHTML = '&#10004;';
        }, 1800)
    }else{
        [nameInput, emailInput].forEach(input => input.classList.add('invalid'))
    }
}
