window.onload = function() {
	let search_desktop = document.getElementById('search'),
	search_mobile = document.getElementById('search_mobile'),
	button_mobile = document.getElementById('button_mobile'),
	menu_mobile = document.getElementById('menu_mobile'),
	close_menu = document.getElementById('close_menu'),
	search_popup = document.getElementById('search_popup'),
	search_popup_close = document.getElementById('search_popup_close'),
	dropdown = document.getElementById('dropdown--mobile'),
	dropdown_menu = document.getElementById('dropdown-menu--mobile'),
	filter = document.getElementById('filter'),
	filter_list = document.getElementById('filter-list'),
	close_filter = document.getElementById('close-filter');

	button_mobile.onclick = function() {
		menu_mobile.classList.add('show');
		menu_mobile.classList.remove('hide');
	}

	close_menu.onclick = function() {
		menu_mobile.classList.remove('show');
		menu_mobile.classList.add('visible');
		setTimeout(function(){
			menu_mobile.classList.remove('visible');
			menu_mobile.classList.add('hide');
		}, 500)
	}

	search_desktop.onclick = function() {
		search_popup.classList.remove('hide');
		search_popup.classList.add('show');
	}
	search_mobile.onclick = function() {
		menu_mobile.classList.remove('show');
		menu_mobile.classList.add('hide');
		search_popup.classList.remove('hide');
		search_popup.classList.add('show');
	}

	search_popup_close.onclick = function() {
		search_popup.classList.remove('show');
		search_popup.classList.add('hide');
	}

	dropdown.onclick = function() {
		dropdown_menu.classList.toggle('show');
		dropdown_menu.classList.toggle('hide');
	}

	if(filter != null) {
		filter.onclick = function() {
			filter.classList.toggle('show');
			filter.classList.toggle('hide');
			filter_list.classList.toggle('show');
			filter_list.classList.toggle('hide');
		}
		
		close_filter.onclick = function() {
			filter_list.classList.toggle('show');
			filter_list.classList.toggle('hide');
		}
	}
}

var headerWatchList = document.getElementById('header__watchlist');
var headerWatchListHover = document.getElementById('header__watchlist-hover')

headerWatchList.addEventListener('click', function(){
	headerWatchListHover.style.display === 'block' ? headerWatchListHover.style.display = 'none' : headerWatchListHover.style.display = 'block';
})

var share = document.querySelector('.share');
var shareMobile = document.querySelector('.share-mobile');

var shareOverlay = document.querySelector('.share-popup__overlay');
var shareClose = document.querySelector('.share-popup__close');

share.addEventListener('click', function(){
	shareOverlay.style.display === 'block' ? shareOverlay.style.display = 'none' : shareOverlay.style.display = 'block';
})

shareMobile.addEventListener('click', function(){
	shareOverlay.style.display === 'block' ? shareOverlay.style.display = 'none' : shareOverlay.style.display = 'block';
})

shareClose.addEventListener('click', function(){
	shareOverlay.style.display = 'none' 
})
