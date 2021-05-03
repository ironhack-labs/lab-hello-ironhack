import './Header.css'
import Button from "./Button"

const Header = props => {
    // JSX element
    const className = "hero"                            // JS regular const

    const fullComponent = (
        <>
            <header className={className}>
                <h1>Say hello to <br /> ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
                <Button />
            </header>
        </>
    )

    return fullComponent
}

export default Header