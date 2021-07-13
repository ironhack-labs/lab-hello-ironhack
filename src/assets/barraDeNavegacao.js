import ironLogo from '../src/assets/images/ironhack-logo.svg'
import menuTopo from '../src/assets/images/menu-top.svg'

function BarraDeNavegacao() {
    return(
    <nav id='barraDeNavegacao'>
    <img src = {ironLogo}></img>
    <img src = {menuTopo}></img>
    </nav>);
}

export default BarraDeNavegacao