import React, {Component} from 'react'
import Nav from "./components/Nav"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"


class App extends Component {
    render(){
        return (
            <div>
                <Nav />
                <Section1 />
                <Section2 />
            </div>
        )
    }
}


export default App