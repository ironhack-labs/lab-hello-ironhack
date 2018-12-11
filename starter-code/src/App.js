import React, { Component } from 'react'
import '../public/styles/styles.css'

class App extends Component {
render() {
  return(
 <div className='container'>

   <nav className='navbar'>
    <img src='../images/ironhack-logo.svg' />
    <img src='../images/menu-top.svg'    />
   </nav>
   {/* <div className='reacts'>
   <img src='../images/react-logo.svg' />
   <img src='../images/react-logo.svg' />
   <img src='../images/react-logo.svg' />
   <img src='../images/react-logo.svg' />

   </div> */}
  <div>
    <h2 className='titulo'>Say hello to ReactJS</h2>
    <h5 className='info'>You will learn a FrontEnd 
  framework form scratch, to
  becoma a Ninja Developer </h5>


    <button className='boton'>Awesome!</button>
  </div>
 
  <div className='parte2'>
      <div className='card'>
    <img src='../images/icon1.png'/>
    <h4>Declarative</h4>
    <p className='descripcion'>React makes it painles to create interactive IUs</p>
      </div>
      <div className='card'>
    <img src='../images/icon2.png'/>
    <h4>Declarative</h4>
    <p className='descripcion'>React makes it painles to create interactive IUs</p> 
    </div>
    <div className='card'>
    <img src='../images/icon3.png'/>
    <h4>Declarative</h4>
    <p className='descripcion'>React makes it painles to create interactive IUs</p>
    </div>
    <div className='card'>
    <img src='../images/icon4.png'/>
    <h4>Declarative</h4>
    <p className='descripcion'>React makes it painles to create interactive IUs</p>
    </div>
</div>
  </div>
 
  )
}


}
export default App