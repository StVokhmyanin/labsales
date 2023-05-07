import Swiper, { Pagination, Grid, Navigation } from "swiper";
import { swiperData } from "../vendor/data";

//свайпер баннера
export const swiperBanner = new Swiper(".swiper_banner", {
  slideToClickedSlide: true,
  spaceBetween: 36,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});

//свайпер преимущества
export const swiperBenefits = new Swiper(".swiper_benefits", {
  modules: [Grid, Pagination, Navigation],
  spaceBetween: 30,
  grid: {
    rows: 2,
    fill: "column",
  },
  pagination: {
    el: ".swiper-pagination_benefits",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

//слайдер описания ЖК
export const swiperSpecification = new Swiper(".swiper_specification", {
  modules: [Pagination, Grid],
  grid: {
    rows: 1,
  },
  pagination: {
    el: ".swiper-pagination_specification",
    clickable: true,
    type: "bullets",
    renderBullet: function (index, className) {
      return (
        '<div class="' +
        className +
        '">' +
        "<h3>" +
        swiperData[index] +
        "</h3>" +
        "</div>"
      );
    },
  },

  slidesPerView: 1,
  spaceBetween: 30,
});

