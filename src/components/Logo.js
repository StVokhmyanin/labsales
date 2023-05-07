import logoImage from '../assets/logo.svg';
import logoWhite from '../assets/logoWhite.svg';

export default function setLogo (menuStatus) {
  const logo = document.querySelector('.header__logo');
  if (menuStatus === true) {
    console.log('open')
    return logo.setAttribute('src', logoWhite);
  } else {
    console.log('close');
    return logo.setAttribute('src', logoImage);
  }
}