import React from 'react'
import Icon from '../Icon'

export default function Footer() {
    const images = {
        icon1: "./images/icon1.png",
        icon2: "./images/icon2.png",
        icon3: "./images/icon3.png",
        icon4: "./images/icon4.png"

    }
    return (
        <>
        <div class="d-flex justify-content-center">
        <Icon images={images.icon1}/>
        <Icon images={images.icon2}/>
        <Icon images={images.icon3}/>
        <Icon images={images.icon4}/>
        </div>
        </>
    )
}
