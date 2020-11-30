import React from 'react'
import ReactLogos from './logos/ReactLogos'
import './styles/HeaderLogosSmall.css'

const headerLogosSmall = () => {
    return (
        <div className="Header-logos-small">
            <ReactLogos />
            <ReactLogos />
            <ReactLogos />
        </div>
    )
}

export default headerLogosSmall