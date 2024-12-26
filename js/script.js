"use strict";

let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  lastScrollTop = scrollTop;
});

const buttons = document.querySelectorAll(".data");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const link = this.dataset.link;
    window.location.href = link;
  });
});

let divAccArray = document.querySelectorAll(".one-accordion");

divAccArray.forEach(function (item) {
  item.addEventListener("click", function () {
    // Close all other accordions
    divAccArray.forEach((accordion) => {
      if (accordion !== this) {
        accordion.classList.remove("active");
      }
    });

    // Toggle the clicked accordion
    this.classList.toggle("active");
  });
});
