document.addEventListener('mousedown', function(e) {
    if (e.target.matches('.item-link')) {
        e.target.classList.toggle('item-link');
        e.target.classList.toggle('item-red');
    }
});

document.addEventListener('mouseup', function(e) {
    if (e.target.matches('.item-red')) {
        e.target.classList.toggle('item-link');
        e.target.classList.toggle('item-red');
    }
});

// ---------------BURGER----------------------------------------------------

const hamb = document.querySelector("#navbar__hamb-field");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#nav").cloneNode(1);
const body = document.body;

menu.classList.remove(".nav");
menu.classList.add(".popup-menu");

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
};

function renderPopup() {
  popup.appendChild(menu);
};

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
};

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
const showTab = (elTabBtn) => {
  const elTab = elTabBtn.closest('.tab');
  if (elTabBtn.classList.contains('tab-btn-active')) {
    return;
  }
  const targetId = elTabBtn.dataset.targetId;
  const elTabPane = elTab.querySelector(`.tab-pane[data-id="${targetId}"]`);
  if (elTabPane) {
    const elTabBtnActive = elTab.querySelector('.tab-btn-active');
    elTabBtnActive.classList.remove('tab-btn-active');
    const elTabPaneShow = elTab.querySelector('.tab-pane-show');
    elTabPaneShow.classList.remove('tab-pane-show');
    elTabBtn.classList.add('tab-btn-active');
    elTabPane.classList.add('tab-pane-show');
  }
}

document.addEventListener('click', (e) => {
  if (e.target && !e.target.closest('.tab-btn')) {
    return;
  }
  const elTabBtn = e.target.closest('.tab-btn');
  showTab(elTabBtn);
});


// if (document.documentElement.clientWidth < 325) {
//     $('.studio__block').click(function (event) {
//         event.preventDefault();
//         $('#svg__st3').toggle();
//         $('#svg__st4').toggle();
//     });
// }


// if (document.documentElement.clientWidth < 325) {
//     $('.rate__block').click(function (event) {
//         event.preventDefault();
//         $('#svg__lo3').toggle();
//         $('#svg__lo4').toggle();
//     });
// }


// $(document).on('touchstart', '.nav__link', function () {
//     $(this).removeClass('nav__link').addClass('nav__link2');
// });
// $(document).on('touchend', '.nav__link2', function () {
//     $(this).removeClass('nav__link2').addClass('nav__link');
// });