import '../styles/style.css'
import './modules/test'
import MobNav from './modules/_mob-nav'

new MobNav()

if(module.hot){
    module.hot.accept()
}