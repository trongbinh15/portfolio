
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');


// eslint-disable-next-line no-undef
const tl = gsap.timeline();


// eslint-disable-next-line no-undef
tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })