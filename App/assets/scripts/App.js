import '../styles/style.css'
import MobNav from './modules/_mob-nav'
import Accordion from "./modules/_accordions"

new Accordion()
new MobNav()

if(module.hot){
    module.hot.accept()
}