import './Hero.css'

import Button from './Button'

const Hero = props => {
    return (
        <section className="hero">
            <img src={props.reactImg} alt={props.reactAlt} className="react1"/>
            <div className="heroText">
                <h1>{props.siteTitle}</h1>
                <p>{props.siteIntro}</p>
            </div>
            <Button buttonText={props.buttonText} />
        </section>
    )
}

export default Hero