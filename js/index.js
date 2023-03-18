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
  const id_pai = $(id.split("-")[0]);
  const id_lista = "#list-" + id.substring(1);

  $("#carousel").carousel($(id).index());
  $(".sidebar-item, .sidebar-subitem").removeClass("active");
  $(id_lista).addClass("active");

  if (id_pai.length && id_pai.find(".active").length) {
    id_pai.addClass("active");
  }
  if (sem_nav !== 1) {
    nav();
  }

  $("html, body").scrollTop(0);
}

const popovers = document.querySelectorAll(".popover");
const numPopovers = popovers.length;
const tela = document.querySelectorAll(".default.active")[0];

// function positionPopover(popover, btnRect, popoverRect) {
//     let top, left;
//     const telaHeight = tela.offsetHeight;
//     const telaWidth = tela.offsetWidth;
//     const popoverHeight = popoverRect.height;
//     const popoverWidth = popoverRect.width;

//     // Verifica se há espaço suficiente na parte superior da tela
//     if (btnRect.top > popoverHeight) {
//         top = btnRect.top + tela.scrollTop - popoverRect.height - 10;
//         left = btnRect.left + (btnRect.width - popoverRect.width) / 2;
//     }
//     // Verifica se há espaço suficiente na parte inferior da tela
//     else if (telaHeight - btnRect.bottom > popoverHeight) {
//         top = btnRect.top + tela.scrollTop + btnRect.height + 10;
//         left = btnRect.left + (btnRect.width - popoverRect.width) / 2;
//     }
//     // Verifica se há espaço suficiente na parte esquerda da tela
//     else if (btnRect.left > popoverWidth) {
//         top = btnRect.top + tela.scrollTop + (btnRect.height - popoverRect.height) / 2;
//         left = btnRect.left - popoverRect.width - 10;
//     }
//     // Verifica se há espaço suficiente na parte direita da tela
//     else if (telaWidth - btnRect.right > popoverWidth) {
//         top = btnRect.top + tela.scrollTop + (btnRect.height - popoverRect.height) / 2;
//         left = btnRect.left + btnRect.width + 10;
//     }
//     // Caso contrário, use a posição padrão (superior)
//     else {
//         top = btnRect.top + tela.scrollTop - popoverRect.height - 10;
//         left = btnRect.left + (btnRect.width - popoverRect.width) / 2;
//     }

function positionPopover(popover, btnRect, popoverRect) {
    let top, left;
    const popoverClass = popover.classList[1];

    switch (popoverClass) {
        case 'top':
            top = btnRect.top + tela.scrollTop - popoverRect.height - 10;
            left = btnRect.left + (btnRect.width - popoverRect.width) / 2;
            break;
        case 'bottom':
            top = btnRect.top + tela.scrollTop + btnRect.height + 10;
            left = btnRect.left + (btnRect.width - popoverRect.width) / 2;
            break;
        case 'left':
            top = btnRect.top + tela.scrollTop + (btnRect.height - popoverRect.height) / 2;
            left = btnRect.left - popoverRect.width - 10;
            break;
        case 'right':
            top = btnRect.top + tela.scrollTop + (btnRect.height - popoverRect.height) / 2;
            left = btnRect.left + btnRect.width + 10;
            break;
    }

    popover.style.top = top + "px";
    popover.style.left = left + "px";
}

for (let k = 0; k < numPopovers; k++) {
    const popover = popovers[k];
    const btn = document.getElementById('btn' + k);

    btn.addEventListener('mouseenter', function() {
        if (popover.style.display === "block") {
            popover.style.display = "none";
        } 
        else {  
          popover.style.display = "block";
          const btnRect = btn.getBoundingClientRect();
          const popoverRect = popover.getBoundingClientRect();
          positionPopover(popover, btnRect, popoverRect);
             
        }
    });

    btn.addEventListener('mouseleave', function() {
        popover.style.display = "none";
    });

    popover.addEventListener('mouseenter', function() {
        popover.style.display = "none";
    });

    document.addEventListener('mousemove', function(event) {
        if (event.target !== btn && !popover.contains(event.target)) {
            popover.style.display = "none";
        }
    });
}

