import React, {Component} from "react"
import InfoText from './components/InfoText'
import LandingTitle from './components/LandingTitle'

class App extends Component {
    render(){
        return(
            <div>
            <div id="navbar">
            <img src="../images/icon1.png"/>
            <img src="../images/icon1.png"/>
            </div>
            <div>
                <LandingTitle/>
             </div>

            <div id="cuadroscontainer">
                <InfoText/>
            </div>

            </div>
        )
    }
}

export default App;