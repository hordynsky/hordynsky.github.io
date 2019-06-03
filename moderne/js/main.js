window.onload = function() {
	var button_mobile = document.getElementById('navigation-mobile__button');
	var menu_mobile = document.getElementById('navigation-mobile__menu');
  var close_menu = document.getElementById('close_menu');
  

	button_mobile.onclick = function() {
    menu_mobile.classList.add('show');
		menu_mobile.classList.remove('hide');
	}

	close_menu.onclick = function() {
		menu_mobile.classList.remove('show');
		menu_mobile.classList.add('hide');
	
	}
}