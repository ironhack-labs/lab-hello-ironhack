//1. IMPORTACIONES
import React from 'react'
import Nav from './Nav'
import Content from './Content'
import Atom from './Atom'

//2. FUNCION
function Header(){

    return(
        <div class="bg-dark text-white p-4">
        <Nav/>
        <div class="d-flex">
            <Content/>
            <Atom/>
        </div>

        </div>

    
    )
}

//3. EXPORTACION

export default Header
