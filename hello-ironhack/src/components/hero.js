import './hero.css'
import Button from './button'

const Hero = props => {

    return (
        <section className="hero">
            <h1>{props.title}</h1>
            <p>{props.info}</p>
            <Button />
        </section>
    )

}

export default Hero