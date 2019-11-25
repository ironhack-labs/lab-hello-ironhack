import React, { Component } from 'react'
import PictureText from "./Collection/PictureText"

export class Collection extends Component {
    render() {
        return (
            <div className = "collectionClass">
                <PictureText imgVal="/images/icon1.png" headerVal="Declarative" parVal="React makes it painless to create interactive UIs."/>
                <PictureText imgVal="/images/icon2.png" headerVal="Components" parVal="Build encapsulated components that manage their state."/>
                <PictureText imgVal="/images/icon3.png" headerVal="Single-way" parVal="A set of immutible values are passed to the components."/>
                <PictureText imgVal="/images/icon4.png" headerVal="JSX" parVal="Statically typed designed to run on modern browsers."/>
            </div>
        )
    }
}

export default Collection
