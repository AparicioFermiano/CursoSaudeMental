// Autor: Aparicio Fermiano dos Santos Junior
// https://github.com/AparicioFermiano 

function nav() {
    var sidenav = document.getElementById("mySidenav");
    var marginRight = window
        .getComputedStyle(sidenav)
        .getPropertyValue("margin-right");
    var btn = document.getElementById("btn-sidebar");
    if (marginRight === "-300px" || marginRight === "") {
        sidenav.style.marginRight = "0px";
    } else {
        sidenav.style.marginRight = "-300px";
    }
}

function mudar_sidebar(id){
    const id_pai = document.getElementById(id.split("-")[0]);
    const id_lista = document.querySelector("#list-" + id);
    const sidebarItems = document.querySelectorAll(".sidebar-item, .sidebar-subitem");

    sidebarItems.forEach((item) => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        }
    });
    
    if(id_lista) {
        id_lista.classList.add("active");
    }
    
    if (id_pai) {
        id_pai.classList.add("active");
    }
}

function mudar_carrosel(id_prox, sem_nav) {
    if(sem_nav !== 1){
        nav()
    }
    slide = document.getElementById(id_prox)
    
    id_atual = document.querySelector('.default.active');

    id_atual.classList.remove('active', 'slide-fade');
    slide.classList.add('active', 'slide-fade');

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    mudar_sidebar(id_prox)
}

function carouselHandler(action, carouselId) {
    var carousel = document.getElementById(carouselId);
    var activeElement = carousel.querySelector('.default.active');

    if (action === "next") {
        var ProxElement = activeElement.nextElementSibling || carousel.querySelector('.carousel-item:first-child');
        activeElement.classList.remove('active', 'slide-fade');
        ProxElement.classList.add('active', 'slide-fade');
    } else if (action === "prev") {
        console.log(activeElement)
        if(activeElement.id == 'home-1' || activeElement.id == 'autoras-1'){
            ProxElement = activeElement
        } else {
            var ProxElement = activeElement.previousElementSibling || carousel.querySelector('.carousel-item:last-child');
            activeElement.classList.remove('active');
            ProxElement.classList.add('active');
        }
    }

    mudar_sidebar(ProxElement.id);
}

$(document).ready(function () {
    $("#carousel1").swipe({
        swipeLeft: function () {
            carouselHandler('next', 'carousel1');
        },
        swipeRight: function () {
            carouselHandler('prev', 'carousel1')
        },
        threshold: 75
    });
});
