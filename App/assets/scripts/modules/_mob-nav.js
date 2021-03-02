
export default class MobNav{
    constructor(){
        // variables and initializing the events:
        this.burgerMenu = document.querySelector('.burger-menu')


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
    }
}