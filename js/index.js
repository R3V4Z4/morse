"use strict";

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#carousel1", {
    type: "fade", // Enables fade transitions
    rewind: true,
    pauseOnHover: false,
    perPage: 1,
    perMove: 1,
    autoplay: true, // Enables autoplay
    interval: 3000, // Adjusts the speed of autoplay (in milliseconds)
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
    gap: "20px",
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
    gap: "20px",
    autoScroll: {
      speed: 1,
    },
  }).mount(window.splide.Extensions);

  new Splide("#carousel5", {
    type: "loop",
    perPage: 6,
    direction: "rtl",
    gap: "20px",
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      500: {
        perPage: 5,
      },
      415: {
        perPage: 4,
      },
    },
  }).mount(window.splide.Extensions);

  new Splide("#carousel6", {
    type: "loop",
    perPage: 6,
    direction: "ltr",

    pagination: false,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      500: {
        perPage: 5,
      },
      415: {
        perPage: 4,
      },
    },
  }).mount(window.splide.Extensions);
});
