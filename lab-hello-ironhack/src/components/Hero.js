import './Hero.css';

const Hero = props => {

    const title = `${props.title}`

    const logo = '/images/ironhack-logo.svg'

    const menu = '/images/menu-top.svg'

    const text = `${props.text}`

    const awesome = `${props.awesome}`

    return (
        <section className="hero" style={{ backgroundColor: '#1F2535' }}>
            <nav>
                <img src={logo} className="logo" alt="logo" />
                <img src={menu} className="menu" alt="menu" />
            </nav>
            <div className="hello">
            <h1 className="title">{props.title}</h1>
            <p className="text">{props.text}</p>
                <p className="awesome">{props.awesome}</p>
                </div>

        </section>
    )
}


export default Hero