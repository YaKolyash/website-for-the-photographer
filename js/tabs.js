const tabs = document.querySelectorAll('.table-title');
const tabContents = document.querySelectorAll('.table-item');

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => {
      item.classList.remove('title-active');
    });
    tabContents.forEach((item) => {
      item.classList.remove('title-hide');
    });
    
    tab.classList.add('title-active');
    tabContents[i].classList.add('title-hide');
  });
});