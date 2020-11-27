import React, {Component} from "react";

//Clases o Funciones
class Header extends Component {
    
    render(){
        const logo= './images/ironhack-logo.svg';
        const menu='./images/menu-top.svg'
    return(
        <div>
           <img className='derech' src={logo}/>
           <img className='izq' src={menu}/>
        </div>
    )
  }
}

//Exportaciones
export default Header