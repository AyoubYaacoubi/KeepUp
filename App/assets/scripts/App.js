import '../styles/style.css'
import './modules/test'
import Test from './modules/test'

new Test()

if(module.hot){
    module.hot.accept()
}