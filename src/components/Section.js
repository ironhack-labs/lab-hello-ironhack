import React from 'react'
import DeclarativeCard from './cards/DeclarativeCard.js'
import ComponentsCard from './cards/ComponentsCard.js'
import SingleWayCard from './cards/SingleWayCard.js'
import JsxCard from './cards/JsxCard.js'
import './styles/Section.css'

const section = () => {
    return (
        <section className="Section">
            <DeclarativeCard></DeclarativeCard>
            <ComponentsCard></ComponentsCard>
            <SingleWayCard></SingleWayCard>
            <JsxCard></JsxCard>

        </section>
    )
}

export default section