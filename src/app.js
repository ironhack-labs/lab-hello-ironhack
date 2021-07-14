import React from 'react'
import './style.css'
import Navbar from './navigator'
import Container from './ContainerPrincipal'
import Itens from './Itens'
const app = () =>{
    return (
    <div>
        <section id = "bgDark">
            <div>
              <Navbar></Navbar>
            </div>
            <Container></Container>
        </section>
        <Itens/>
    </div>
        
    )
}

export default app