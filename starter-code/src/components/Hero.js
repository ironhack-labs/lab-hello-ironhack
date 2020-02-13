import React, {Component} from "react";
import "./../App.js"

class Hero extends Component{
    render(){
        return(
            <div className="Hero">
                <h1>Say hello  to <br/> ReactJS </h1>  
                <p> You will learn a Frontend <br/> framework  from scratch, to <br/> became a Ninka Developer</p>
                <button>Awesome!</button>
            </div>
        )
    }
}

export default Hero;