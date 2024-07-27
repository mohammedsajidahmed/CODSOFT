const hambuger = document.querySelector('.hamburger-menu');
const hamburgerContainer = document.querySelector('.hamburger-container');
const closeIcon = document.querySelector('#close-icon');
const section = document.querySelector('section');
const aboutSection = document.querySelector('.about-section');
hambuger.addEventListener('click', () => {
  hambuger.style.display = 'none';
  closeIcon.style.display = 'block';
  section.classList.add('section-hide');
  section.classList.remove('section-active');
  aboutSection.style.display = 'block';
  aboutSection.innerHTML = `<div class="about">
      <p><a href="">Home</a></p>
      <p><a href="">About</a></p>
      <p><a href="">Trainers</a></p>
      <p><a href="">Blog</a></p>
      <p><a href="">Contact</a></p>
  </div>`;
  closeIcon.addEventListener('click', () => {
    closeIcon.style.display = 'none';
    hambuger.style.display = 'block';
    section.classList.add('section-active');
    section.classList.remove('section-hide');
    aboutSection.style.display = 'none';
  });
});
