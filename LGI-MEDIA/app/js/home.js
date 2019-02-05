window.onscroll = window.onresize = header = function() {
	let w_scroll = window.pageYOffset,
			slider = document.getElementById('slider').offsetHeight,
			nav = document.getElementById('nav'),
			header = document.getElementById('nav').offsetHeight,
			img_slider = document.getElementById('slide-img').offsetHeight,
			main = document.getElementById('main'),
			footer = document.getElementById('footer_home');

	main.setAttribute('style', 'top:' + img_slider + 'px');
	footer.setAttribute('style', 'top:' + img_slider + 'px');
	
	if (!window.matchMedia("(max-width: 767px)").matches) {
		if (1 <= w_scroll) {
			nav.classList.add('fixed');
		}
		else {
			nav.classList.remove('fixed');
		}
		if (slider - header <= w_scroll) {
			nav.classList.add('black');
		}
		else {
			nav.classList.remove('black');
		}
	} else {
		nav.classList.remove('fixed');
		nav.classList.remove('black');
	}
}

document.addEventListener("DOMContentLoaded", header);

var swiper = new Swiper('.swiper-container', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 6000,
	},
});