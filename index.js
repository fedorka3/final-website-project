const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('hamburger-menu')
const x = document.getElementById('hamburger-x')
const navLinks = document.querySelector('.nav-links');

open = false

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile');

  // Switches to the x i instead of the menu i
  if (open == false) {
    open = true;
    menu.style.display = 'none';
    x.style.display = 'block';
  } else {
    open = false;
    menu.style.display = 'block';
    x.style.display = 'none';
  }

});
