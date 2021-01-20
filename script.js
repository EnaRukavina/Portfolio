const navbar = document.querySelector('.navbar');
const link = document.querySelectorAll('.nav__link');
const btnScrollTo = document.querySelector('.btn--dark');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.menu-list');
const navHeight = navbar.getBoundingClientRect().height;

// Sticky navbar
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add('sticky')
    : navbar.classList.remove('sticky');
};

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

// Scroll to section
links.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  // Matching strategy - to ingore clicks that don't happen on one of the links
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });

    links.classList.toggle('show-links');
  }
});

//Toggle navbar
navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links');
  if (!navbar.classList.contains('sticky')) navbar.classList.add('sticky');
});

// Highlight links on scroll
document.addEventListener('DOMContentLoaded', () => {
  (function scrollSpy() {
    const targets = document.querySelectorAll('.section'),
      options = {
        root: null,
        threshold: 0.5,
      };
    // check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      (() => {
        const inView = target => {
          const interSecObs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              const elem = entry.target;
              let currentNav = document.querySelector(
                `.nav__link[href="#${elem.id}"]`
              );
              entry.isIntersecting
                ? currentNav.classList.add('active')
                : currentNav.classList.remove('active');
            });
          }, options);
          interSecObs.observe(target);
        };
        targets.forEach(inView);
      })();
    }
  })();
});

// copyright year
let year = document.querySelector('.year');

year.textContent = new Date().getFullYear();
