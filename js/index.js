const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

const navOpenedClassName = 'nav-opened';

navToggle.addEventListener('click', toggleNav);

nav.addEventListener('click', () => {
  toggleNav();
});

function toggleNav() {
  document.body.classList.toggle(navOpenedClassName);
}