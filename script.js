const nav = document.getElementById('navbar');
const height = nav.offsetHeight * 2;

window.onscroll = () => {
  if (window.scrollY > height) {
      nav.classList.add('scrolled');
  } else {
      nav.classList.remove('scrolled');
  }
};
