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
	$('#carousel').carousel($(id).index());
	$('.sidebar-item').removeClass('active');
	$('#list-' + id.substring(1)).addClass('active');

	if (sem_nav !== 1) {
	  nav();
	}

	$('html, body').scrollTop(0);
  }


  const btn = document.getElementById("btn");
  const popover = document.getElementById("popover");
  
  btn.addEventListener("click", function() {
	popover.style.display = "block";
	const btnRect = btn.getBoundingClientRect();
	const popoverRect = popover.getBoundingClientRect();
	const top = btnRect.top - popoverRect.height - 10;
	const left = btnRect.left + (btnRect.width - popoverRect.width) / 2;
	const right = btnRect.left + btnRect.width + 10;
	const bottom = btnRect.top + btnRect.height + 10;
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;
	let positionClass = "popover-top";
	if (top > 0) {
	  positionClass = "popover-top";
	} else if (bottom + popoverRect.height < windowHeight) {
	  positionClass = "popover-bottom";
	} else if (left > 0) {
	  positionClass = "popover-left";
	} else if (right + popoverRect.width < windowWidth) {
	  positionClass = "popover-right";
	}
	popover.classList.add(positionClass);
  });
  
  popover.addEventListener("click", function() {
	popover.style.display = "none";
	popover.className = "";
  });

  document.addEventListener("click", function(event) {
	if (event.target !== btn && !popover.contains(event.target)) {
	  popover.style.display = "none"; // ou popover.parentNode.removeChild(popover);
	}
  });
  