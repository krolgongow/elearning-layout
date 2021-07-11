"use strict";

const menuBtn = document.querySelector(".fa-bars");
const menu = document.querySelector(".header__menu");
const math = document.querySelector(".main__math");
const polish = document.querySelector(".main__polish");
const english = document.querySelector(".main__english");
const mathOptions = document.querySelector(".main__math .main__options");
const polishOptions = document.querySelector(".main__polish .main__options");
const englishOptions = document.querySelector(".main__english .main__options");
const cover = document.querySelector(".cover");

const createCover = function () {
  cover.classList.add("active");
  cover.addEventListener("click", function () {
    cover.classList.remove("active");
  });
};

math.addEventListener("click", function () {
  mathOptions.classList.add("active");
  createCover();
  cover.addEventListener("click", function () {
    mathOptions.classList.remove("active");
    cover.classList.remove("active");
  });
});

polish.addEventListener("click", function () {
  polishOptions.classList.add("active");
  createCover();
  cover.addEventListener("click", function () {
    polishOptions.classList.remove("active");
    cover.classList.remove("active");
  });
});

english.addEventListener("click", function () {
  englishOptions.classList.add("active");
  createCover();
  cover.addEventListener("click", function () {
    englishOptions.classList.remove("active");
    cover.classList.remove("active");
  });
});

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
});
