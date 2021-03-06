
class Accordion{
    constructor(){
        this.accordionBox = document.querySelectorAll(".accordion__box")

        this.events()
    }
    events(){
        this.accordionBox.forEach(acc => acc.addEventListener("click", ()=> acc.classList.toggle("accordion__box--active")))
    }
}

export default Accordion