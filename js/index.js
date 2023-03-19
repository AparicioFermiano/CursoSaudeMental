function nav() {
    var sidenav = document.getElementById("mySidenav");
    var marginRight = window
        .getComputedStyle(sidenav)
        .getPropertyValue("margin-right");
    var btn = document.getElementById("btn-sidebar");
    if (marginRight === "-300px" || marginRight === "") {
        sidenav.style.marginRight = "0px";
        btn.className = btn.className.replace(
            "btn-sidebar-light",
            "btn-sidebar-dark"
        );
    } else {
        sidenav.style.marginRight = "-300px";
        btn.className = btn.className.replace(
            "btn-sidebar-dark",
            "btn-sidebar-light"
        );
    }
}

function mudar_carrosel(id, sem_nav) {
    let id_pai = document.querySelector(id.split("-")[0]);
    let id_lista = document.querySelector("#list-" + id.substring(1));

    $("#carousel").carousel($(id).index());
    document.querySelectorAll(".sidebar-item, .sidebar-subitem").forEach((item) => {
        item.classList.remove("active");
    });

    id_lista.classList.add("active");

    if (id_pai && id_pai.querySelector(".active")) {
        id_pai.classList.add("active");
    }

    if (sem_nav !== 1) {
        nav();
    }

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}