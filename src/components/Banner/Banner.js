import React from 'react'
import { ContainerBanner } from './Banner.styled'

export default function Banner({ title, subtitle }) {
    return (
        <ContainerBanner>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <button>Awesome!</button>
        </ContainerBanner>
    )
}
