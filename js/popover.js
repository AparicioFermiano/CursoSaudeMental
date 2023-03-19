
  
  const popovers = document.querySelectorAll(".popover");
  const numPopovers = popovers.length;
  const tela = document.querySelectorAll(".default.active")[0];
  
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