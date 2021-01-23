const navbar = document.querySelector('.nav');
const btn = document.querySelector('.title__btn');
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav__list');
const aboutSection = document.querySelector('#about');
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('.section');

// View my work button
btn.addEventListener('click', function (e) {
  aboutSection.scrollIntoView({
    behavior: 'smooth',
  });
});

//Toggle navbar
navToggle.addEventListener('click', function () {
  navList.classList.toggle('show-links');
  if (!navbar.classList.contains('sticky')) navbar.classList.add('sticky');
});

// Smooth scrolling
const makeNavLinksSmooth = () => {
  for (let n in navLinks) {
    if (navLinks.hasOwnProperty(n)) {
      navLinks[n].addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(navLinks[n].hash).scrollIntoView({
          behavior: 'smooth',
        });
      });
    }
  }
};

// Spy scrolling
const spyScrolling = () => {
  window.onscroll = () => {
    this.scrollY > 20
      ? navbar.classList.add('sticky')
      : navbar.classList.remove('sticky');

    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (let s in sections)
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
        const id = sections[s].id;
        document.querySelector('.active').classList.remove('active');
        document
          .querySelector(`a[href*=${id}]`)
          .parentNode.classList.add('active');
      }
  };
};

makeNavLinksSmooth();
spyScrolling();

/* // Highlight links on scroll
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
}); */

// copyright year
let year = document.querySelector('.year');

year.textContent = new Date().getFullYear();
