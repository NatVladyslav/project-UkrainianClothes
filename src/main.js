const elementToToggle = document.querySelector('.mobile-backdrop');
const toggleButton = document.querySelector('.header-mobile-open-btn');
const closeButton = document.querySelector('.mobile-close-btn');
const headerMobMenu = document.querySelector('.mobile-menu');
const linksMenu = document.querySelectorAll('.mobile-nav-link');
function toggleClass() {
  elementToToggle.classList.toggle('is-open');
}
closeButton.addEventListener('click', toggleClass);
toggleButton.addEventListener('click', toggleClass);
elementToToggle.addEventListener('click', toggleClass);
headerMobMenu.addEventListener('click', e => e.stopImmediatePropagation());
for (let i = 0; i < linksMenu.length; i++) {
  linksMenu[i].addEventListener('click', toggleClass);
}

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
