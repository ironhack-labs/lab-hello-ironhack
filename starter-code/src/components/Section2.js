import React,{Component} from 'react'
import Cards from './Cards'

class Section2 extends Component {
    render(){
        return (
            <div className="section2">
                <Cards img="./images/icon1.png" title="Declarative" desc="React makes it painless to create interactive UIs."/>
                <Cards img="./images/icon2.png" title="Components" desc="Build encapsulated componens that manage their state."/>
                <Cards img="./images/icon3.png" title="Single-Way" desc="A set of immutable values are passed to the component's"/>
                <Cards img="./images/icon4.png" title="JSX" desc="Statically-typed designed to run on modern browsers."/>
            </div>
        )
    }
}

export default Section2