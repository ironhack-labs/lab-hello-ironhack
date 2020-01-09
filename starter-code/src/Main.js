import React from 'react'
import Menu from './Menu'
import Header from './Header'
import './Main.css'

const Main = () => {
    return ( 
        <div className="mainContainer">
            <Menu/>
            <Header/>
        </div>
     );
}
 
export default Main;