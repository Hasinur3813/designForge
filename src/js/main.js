"use strict";
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

function openMenu() {
  mobileMenu.classList.toggle("hidden");
}

const swiper = new Swiper(".testimonials_slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const partnerSlides = new Swiper(".trusted_partner_slider", {
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
  },
});
