let header = document.querySelector('header');
let black_header = document.querySelector('.header-black');
let logo = document.querySelector('.logo')
let navigation__icon = document.querySelector('.navigation__icon');
let navigation__desktop = document.querySelector('.navigation__desktop');
let checkbox = document.querySelector('#navi-toggle');

window.addEventListener('scroll', function(){
    if(window.scrollY>100){
        header.style.background = '#000';
        black_header && invertHeader(0);
    }else{
        header.style.background = 'transparent';
        black_header && reverseHeader(0);
    }
})

checkbox.addEventListener('change', function(){
    if(checkbox.checked){
        black_header && invertHeader();
    }else{
        black_header && reverseHeader();
        if(window.scrollY > 100){
            black_header && invertHeader();
        }
    }
})

function invertHeader(timeout = 500){
    setTimeout(()=>{
        logo.classList.add('invert');
        navigation__icon.classList.add('invert');
        if(navigation__desktop){
            navigation__desktop.style.color = '#fff'
        }
    }, timeout)
}

function reverseHeader(timeout = 500){
    setTimeout(() => {
        logo.classList.remove('invert');
        navigation__icon.classList.remove('invert');
        if(navigation__desktop){
            navigation__desktop.style.color = '#000'
        }
    }, timeout)
}