import React from 'react'

import { FeatureWrapper, StyledImg, StyledH1 } from './Feature.styled';


const Feature = ({feature}) => (
    <FeatureWrapper>
        <StyledImg src={feature.img}/>
        <StyledH1>{feature.title}</StyledH1>
        <p>{feature.desc}</p>
    </FeatureWrapper>
)

export default Feature;