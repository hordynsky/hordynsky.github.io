window.onload = function() {
	let search_desktop = document.getElementById('search'),
			search_mobile = document.getElementById('search_mobile'),
			button_mobile = document.getElementById('button_mobile'),
			menu_mobile = document.getElementById('menu_mobile'),
			close_menu = document.getElementById('close_menu'),
			search_popup = document.getElementById('search_popup'),
			search_popup_close = document.getElementById('search_popup_close');

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
}