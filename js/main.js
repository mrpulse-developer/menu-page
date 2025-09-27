const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.navbar__links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
