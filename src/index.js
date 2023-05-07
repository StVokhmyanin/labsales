import "./index.scss";
import Card from "./components/Card";
import Section from "./components/Section";
import { benefits, swiperData } from "./vendor/data";
import {
  swiperBanner,
  swiperSpecification,
  swiperBenefits,
  infSwiper
} from "./components/swiper";
import init from "./components/map";
import setLogo from "./components/Logo";

let menuStatus = false;
const header = document.querySelector(".header");
const navList = document.querySelector(".header__nav");
const headerButton = document.querySelector(".header__button");

headerButton.addEventListener("click", () => {
  header.classList.toggle("header_active");
  navList.classList.toggle("header__nav_active");
  headerButton.classList.toggle("header__button_active");
  menuStatus = !menuStatus;
  setLogo(menuStatus);
});

setLogo(menuStatus);

// функция создания карточки
const returnCard = (data) => {
  const card = new Card({
    data: data,
    templateSelector: "#benefit-item",
  });
  return card;
};

//функция добавления карточки в контейнер
const cardSection = new Section({
  renderer: (cardItem) => {
    const card = returnCard(cardItem);
    const cardElem = card.generateCard();
    cardSection.appendItem(cardElem);
  },
  containerSelector: ".swiper-wrapper_benefits",
});

// рендер карточек
cardSection.renderItems(benefits);

//init карты
ymaps.ready(init);

class CatButton {
  constructor(buttonId) {
    this.buttonId = buttonId;
    this.button = document.querySelector(`#${buttonId}`);
  }

  addListener() {
    this.button.addEventListener("click", () => {
      const points = document.querySelectorAll(`.${this.buttonId}`);
      points.forEach((item) => {
        item.classList.toggle("placemark_layout_container_active");
      });
      this.button.classList.toggle("infrastructure__cat-item_active");
    });
  }
}

const shopButton = new CatButton("shop");
const gasButton = new CatButton("gas");
const kinderButton = new CatButton("kinder");
const pointButton = new CatButton("point");
const pharmacyButton = new CatButton("pharmacy");
pharmacyButton.addListener();
pointButton.addListener();
gasButton.addListener();
shopButton.addListener();
kinderButton.addListener();
