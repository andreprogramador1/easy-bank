//const enabled = document.querySelector('.enabled')
const burger = document.querySelector('.burger')
const navItems = document.querySelector('.nav-items')
const nav = document.querySelector('.nav')
const back = document.querySelector('.background')


function changeBackground() {
  back.src =  window.innerWidth >= 1024 ? './images/bg-intro-desktop.svg' : './images/bg-intro-mobile.svg'
}
changeBackground()
burger.addEventListener('click', () => {
  burger.src = burger.src.indexOf('images/icon-close.svg') !== -1  ? './images/icon-hamburger.svg' : './images/icon-close.svg'

  navItems.classList.toggle('enabled')
  //nav.classList.toggle('enabled')
  nav.classList.toggle('color')
})

window.addEventListener('resize', () =>{
  changeBackground()
})