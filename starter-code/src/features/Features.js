import React from "react"
import Item from "./Item"

export default class Features extends React.Component {
    render(){
        return (
            <section id="features">
                <Item image="/images/icon1.png" title="Declarative" paragraph="React makes it painless to create interactive UIs."></Item>
                <Item image="/images/icon2.png" title="Components" paragraph="Build encapsulated components that manage their state."></Item>
                <Item image="/images/icon3.png" title="Single-Way" paragraph="A set of immutable values are pased to the component's."></Item>
                <Item image="/images/icon4.png" title="JSX" paragraph="Statically-typed designed to run on modern browsers."></Item>

            </section>
        )
    }
}