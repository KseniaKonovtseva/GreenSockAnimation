let tl = gsap.timeline();
tl.from('.hero__title', {opacity: 0, y: 100, ease: "power2.out", duration: 1})
  .from('.hero__btn', {opacity: 0, y: 50, duration: 0.7}, "-=1")
  .from('.hero__descr', {opacity: 0, duration: 1}, "-=.3")
  .from('.photos-wrap img', {opacity: 0, scaleX: .8, scaleY: .8, ease: "power2.out", duration: 1.7, stagger: .5}, "-=1")
  .from('.photos__author', {opacity: 0, duration: 1}, "-=1.7");

let tlDelay = gsap.timeline({paused: true});
tlDelay.from('.menu__top', {opacity: 0, y: '-100%', duration: 1})
    .from('.menu', {opacity: 0, duration: 1}, "-=1")
    .from('.menu__nav', {opacity: 0, y: 100, duration: 1}, "-=.5")
    .from('.menu__container', {opacity: 0, y: 100, duration: 1}, "-=1")
    .from('.social', {opacity: 0, y: 100, duration: 1}, "-=.5")
    .from('.menu__right', {opacity: 0, y: 100, duration: 1}, "-=1");

//burger
document.querySelector(".burger").addEventListener("click", function() {
  document.querySelector(".menu").classList.add("menu--open");
  tlDelay.play();
})
document.querySelector(".close").addEventListener("click", function() {
  tlDelay.reverse();
  function shut() {
    document.querySelector(".menu").classList.remove("menu--open");
  } setTimeout(shut, 2500);
})
