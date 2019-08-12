import React from 'react'
import Icon from './Icon'
// import Foto from '../../public/images/icon1.png'

const Columns = () => {
        return  <div className="container">
                <div className="row">

                    <Icon image= "../images/icon1.png" title= "Declarative"
                            subtitle= "React mekes it painless to create interactive UIs.">
                            
                    </Icon>

                    <Icon image= "../images/icon2.png" title= "Components"
                            subtitle= "Build encanpsulated components that manage their state.">
                            
                    </Icon>

                    <Icon image= "../images/icon3.png" title= "Single-Way"
                            subtitle= "A set of inmutable values are passed to the components.">
                            
                    </Icon>

                    <Icon image= "../images/icon4.png" title= "JSX"
                            subtitle=  "Statically-typed, designed to run on modern browsers.">
                            
                    </Icon>
                </div>
            </div>
    
}

export default Columns