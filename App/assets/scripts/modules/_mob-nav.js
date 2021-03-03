
export default class MobNav{
    constructor(){
        // variables and initializing the events:
        this.burgerMenu = document.querySelector('.burger-menu')
        this.navBar = document.querySelector('.header__navbar')
        
        // initializing the events:
        this.event()
    }
    // events:
    event(){
        this.burgerMenu.addEventListener('click', () => this.animateBurger())
    }
    // all the methods here:

    // showing the nav bar en activating the burgers:
    animateBurger(){
        this.burgerMenu.classList.toggle('burger-menu--active')
        this.navBar.classList.toggle('header__navbar--active')
    }
}