document.querySelector('header').className = 'header'
document.querySelector('.header > div').className = 'container'
 document.querySelector('header > div > div').className = 'header__content'
 document.querySelector('h1').className = 'logo'
document.querySelector('menu').className = 'header__menu'
 document.querySelector('.header__content > button').className = 'header__menu-button'
 document.querySelector('section').className = 'gallery'
 document.querySelectorAll('section img').forEach((img) => {
  img.className = 'gallery__item__image'
 })
  // document.querySelectorAll('section h3').forEach((h3) => {
  //   h3.className = 'gallery__item'
  // })
 document.querySelectorAll('section p').forEach((p) => {
  p.className = 'gallery__item__text'
 })
 document.querySelector('.container > button').className = 'subscribe subscribe__button'
 document.querySelector('.container > input').className = 'subscribe__input'
 document.querySelector('.container > p').className = 'subscribe__text'


//  document.querySelector('button, input ').className = 'subscribe__input, subscribe__button'



document.querySelectorAll('section > div').forEach((div) => {
  div.className = 'gallery__item';
})
