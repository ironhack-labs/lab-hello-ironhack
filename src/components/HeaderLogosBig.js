import React from 'react'
import ReactLogos from './logos/ReactLogos'
import './styles/HeaderLogosBig.css'

const headerLogosBig = () => {
    return (
        <div className="Header-logos-big">
            <ReactLogos />
            <em><ReactLogos /></em>
            <span><ReactLogos /></span>
        </div>
    )
}

export default headerLogosBig