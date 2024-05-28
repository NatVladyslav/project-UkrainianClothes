const elementToSwitch = document.querySelector('.mobile-backdrop');
const switchButton = document.querySelector('.header-mobile-open-btn');
const closeButton = document.querySelector('.mobile-close-btn');
const headerMenu = document.querySelector('.mobile-menu');
const liMenu = document.querySelectorAll('.mobile-nav-link');
function switchClass() {
  elementToSwitch.classList.toggle('is-open');
}
closeButton.addEventListener('click', switchClass);
switchButton.addEventListener('click', switchClass);
elementToSwitch.addEventListener('click', switchClass);
headerMenu.addEventListener('click', e => e.stopImmediatePropagation());
for (let i = 0; i < liMenu.length; i++) {
  liMenu[i].addEventListener('click', switchClass);
}
// SCROLL FUNCTION
let scrollToHeaderLink = document.getElementById('scrollToHeaderLink');
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToHeaderLink.style.display = 'block';
  } else {
    scrollToHeaderLink.style.display = 'none';
  }
}
scrollToHeaderLink.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});