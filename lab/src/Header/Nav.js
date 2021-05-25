import React from 'react'
import Icon from '../Icon'

export default function Nav() {

    const images = {
        icon1: "./images/ironhack-logo.svg",
        icon2: "./images/menu-top.svg"

    }
    return (
        <div class="d-flex justify-content-between p-4">
            <Icon images={images.icon1}/>
            <Icon images={images.icon2}/>
        </div>
    )
}
