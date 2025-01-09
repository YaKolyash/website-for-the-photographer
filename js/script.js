// @prepros-appened tabs.js




// document.addEventListener('mousedown', function(e) {
//     if (e.target.matches('.item-link')) {
//         e.target.classList.toggle('item-link');
//         e.target.classList.toggle('item-red');
//     }
// });

// document.addEventListener('mouseup', function(e) {
//     if (e.target.matches('.item-red')) {
//         e.target.classList.toggle('item-link');
//         e.target.classList.toggle('item-red');
//     }
// });

// ---------------BURGER----------------------------------------------------

// const hamb = document.querySelector("#navbar__hamb-field");
// const popup = document.querySelector("#popup");
// const menu = document.querySelector("#nav").cloneNode(1);
// const body = document.body;

// menu.classList.remove(".nav");
// menu.classList.add(".popup-menu");

// hamb.addEventListener("click", hambHandler);

// function hambHandler(e) {
//   e.preventDefault();
//   popup.classList.toggle("open");
//   hamb.classList.toggle("active");
//   body.classList.toggle("noscroll");
//   renderPopup();
// };

// function renderPopup() {
//   popup.appendChild(menu);
// };

// const links = Array.from(menu.children);

// links.forEach((link) => {
//   link.addEventListener("click", closeOnClick);
// });

// function closeOnClick() {
//   popup.classList.remove("open");
//   hamb.classList.remove("active");
//   body.classList.remove("noscroll");
// };

// ---------------SWIPER----------------------------------------------------

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1,
});


// ---------------TABS-----------------------------------------------------
// const showTab = (elTabBtn) => {
//   const elTab = elTabBtn.closest('.wrapper-table');
//   if (elTabBtn.classList.contains('tab-btn-active')) {
//     return;
//   }
//   const targetId = elTabBtn.dataset.targetId;
//   const elTabPane = elTab.querySelector(`.tab-pane[data-id="${targetId}"]`);

//   if (elTabPane) {
//     const elTabBtnActive = elTab.querySelector('.tab-btn-active');
    
//     if (elTabBtnActive) {
//       elTabBtnActive.classList.remove('tab-btn-active');
//     }
    
//     const elTabPaneShow = elTab.querySelector('.tab-pane-show');
    
//     if (elTabPaneShow) {
//       elTabPaneShow.classList.remove('tab-pane-show');
//     }
    
//     elTabBtn.classList.add('tab-btn-active');
//     elTabPane.classList.add('tab-pane-show');
//   }
// }

// document.addEventListener('click', (e) => {
//   const elTabBtn = e.target.closest('.table-title');
  
//   if (!elTabBtn) {
//     return;
//   }
  
//   showTab(elTabBtn);
// });







// Проверяем ширину экрана для мобильных устройств
// if (doacument.documentElement.clientWidth < 500) {
//     const studioBlocks = document.querySelectorAll('.studio__block');
//     studioBlocks.forEach((block) => {
//         block.addEventListener('click', (event) => {
//             event.preventDefault();
//             const svgSt3 = document.getElementById('svg__st3');
//             const svgSt4 = document.getElementById('svg__st4');
//             svgSt3.style.display = (svgSt3.style.display === 'none' || svgSt3.style.display === '') ? 'block' : 'none';
//             svgSt4.style.display = (svgSt4.style.display === 'none' || svgSt4.style.display === '') ? 'block' : 'none';
//         });
//     });
// }

// Проверяем ширину экрана для мобильных устройств
// if (document.documentElement.clientWidth < 325) {
//     const rateBlocks = document.querySelectorAll('.rate__block');
//     rateBlocks.forEach((block) => {
//         block.addEventListener('click', (event) => {
//             event.preventDefault();
//             const svgLo3 = document.getElementById('svg__lo3');
//             const svgLo4 = document.getElementById('svg__lo4');
//             svgLo3.style.display = (svgLo3.style.display === 'none' || svgLo3.style.display === '') ? 'block' : 'none';
//             svgLo4.style.display = (svgLo4.style.display === 'none' || svgLo4.style.display === '') ? 'block' : 'none';
//         });
//     });
// }

// Обработка событий касания для ссылок навигации
// const navLinks = document.querySelectorAll('.nav__link');
// navLinks.forEach((link) => {
//     link.addEventListener('touchstart', () => {
//         link.classList.remove('nav__link');
//         link.classList.add('nav__link2');
//     });
//     link.addEventListener('touchend', () => {
//         link.classList.remove('nav__link2');
//         link.classList.add('nav__link');
//     });
// });
