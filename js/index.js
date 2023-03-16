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

// Obter as dimensões do vídeo
var video = new Image();
video.src = "url-do-video";
video.onload = function() {
    var width = this.naturalWidth;
    var height = this.naturalHeight;

    // Ajustar o tamanho do iframe
    var iframe = document.getElementById("video-iframe");
    iframe.setAttribute("width", width + "px");
    iframe.setAttribute("height", height + "px");

    // Adicionar um ouvinte de evento resize
    window.addEventListener("resize", function() {
        iframe.setAttribute("width", width + "px");
        iframe.setAttribute("height", height + "px");
    });
};