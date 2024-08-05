const allSections = document.querySelectorAll('.section');
const allNavLinks = document.querySelectorAll('.header-more a');
let currentSection = 'intro-section';
window.addEventListener('scroll', () => {
  allSections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 200) {
      currentSection = section.id;
    }
  });
  allNavLinks.forEach((nav) => {
    if (nav.href.includes(currentSection)) {
      document.querySelector('.active').classList.remove('active');
      nav.classList.add('active');
    }
  });
});

const hamburger = document.querySelector('.hamburger-menu');
const header = document.querySelector('.header-more');
console.log(hamburger);
hamburger.addEventListener('click', () => {
  if (header.style.display === 'flex') {
    header.style.display = 'none';
  } else {
    header.style.display = 'flex';
  }
});
