import './Header.css'
import Title from './Title'
import Button from './Button'
import Nav from './Nav'

const Header = props => {

    const subText = <p>{props.subtitleText}</p>         // JSX element
    const className = "hero"                            // JS regular const

    const fullComponent = (
        <>
            <header className={className}>
                <Nav />
                <Title text={props.titleText} />
                {subText}
                <Button href="#" text="Awesome!"/>
            </header>
        </>
    )

    return fullComponent
}

export default Header