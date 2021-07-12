
import logoSource from './ironhack-logo.svg'
import menuSource from './menu-top.svg'
import './Header.css'

const Header = () => {

    return (

        <header>


            <img src={logoSource} alt="Logotipo" />
            <img src={menuSource} alt="menu" />



        </header>
    )
}

export default Header