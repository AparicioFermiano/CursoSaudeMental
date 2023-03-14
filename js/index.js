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

function mudar_carrosel(id) {
	var id_format = '#list-' + id.replace('#', '');
	$('#carousel').carousel($(id).index());
	$('.sidebar-item').removeClass('active');
	$(id_format).addClass('active');

}
	