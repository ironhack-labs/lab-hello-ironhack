import React from 'react'
import '../css/comp-content2.css'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

const Content2 = (props) => {

    return (
    <section className="section2">
        <div>
            <img src={icon1} alt="Logo"/>
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
            <img src={icon2} alt="Logo"/>
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
            <img src={icon3} alt="Logo"/>
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
            <img src={icon4} alt="Logo"/>
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
    </section>
    )
    
 
  
  }
  
  export default Content2