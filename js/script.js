"use strict";

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#carousel1", {
    type: "fade", // Enables fade transitions
    rewind: true,
    pauseOnHover: false,
    perPage: 1,
    perMove: 1,
    autoplay: true, // Enables autoplay
    interval: 2000, // Adjusts the speed of autoplay (in milliseconds)
    speed: 1000,
    pagination: false,
    arrows: false,
  }).mount();

  new Splide("#carousel2", {
    type: "loop",
    direction: "ttb",
    height: "400px",
    perPage: 3,
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: -1,
    },
  }).mount(window.splide.Extensions);

  new Splide("#carousel3", {
    type: "loop",
    direction: "ttb",
    height: "400px",
    perPage: 3,
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 1,
    },
  }).mount(window.splide.Extensions);

  new Splide("#carousel4", {
    type: "loop",
    perPage: 1,
    autoplay: {
      speed: 2,
    },
    breakpoints: {
      1024: {
        arrows: false,
      },
    },
  }).mount();


});
