export default class Card {
  constructor({ data, templateSelector }) {
    this._cardTitle = data.title;
    this._cardDescription = data.description;
    this._cardIcon = data.icon;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const item = document
      .querySelector(this._templateSelector)
      .content.querySelector(".swiper-slide")
      .cloneNode(true);
    return item;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".benefits__item-title").textContent =
      this._cardTitle;
    this._element.querySelector(".benefits__item-icon").src = this._cardIcon;
    this._element.querySelector(".benefits__item-description").textContent =
      this._cardDescription;
    return this._element;
  }
}
