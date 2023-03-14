function nav() {
	var sidenav = document.getElementById("mySidenav");
	var marginRight = window.getComputedStyle(sidenav).getPropertyValue("margin-right");
	var btn = document.getElementById('btn-sidebar');
	if (marginRight === "-300px" || marginRight === "") {
		sidenav.style.marginRight = "0px";
		btn.className = btn.className.replace('btn-sidebar-light', 'btn-sidebar-dark');
	} else {
		sidenav.style.marginRight = "-300px";
		btn.className = btn.className.replace('btn-sidebar-dark', 'btn-sidebar-light');
	}
}

function mudar_carrosel(id, sem_nav) {
	var id_format = '#list-' + id.substring(1);
	var $carousel = $('#carousel');
	var $sidebarItems = $('.sidebar-item');
	var $selectedItem = $(id_format);
  
	$carousel.carousel($selectedItem.index());
	$sidebarItems.removeClass('active');
	$selectedItem.addClass('active');
	console.log(sem_nav)
	if (sem_nav !== 1) {
	  nav();
	}
	
	$('html, body').scrollTop(0);
  }
	