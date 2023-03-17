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
    const id_pai = $(id.split('-')[0])
    const id_lista = '#list-' + id.substring(1);

    $('#carousel').carousel($(id).index());
    $('.sidebar-item, .sidebar-subitem').removeClass('active');
    $(id_lista).addClass('active');

    if (id_pai.length && id_pai.find('.active').length) {
        id_pai.addClass('active');
    }
    if (sem_nav !== 1) {
        nav();
    }

    $('html, body').scrollTop(0);
}