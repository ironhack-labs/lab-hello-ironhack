import './Footer.css'
import Article from './Article'

const Footer = props => {

    const fullComponent = (
        <>
            <footer className="secondpart">
                <Article
                    image="./../images/icon1.png" 
                    title="Declarative"
                    description="React makes it painless to create interactive UIs."
                />
                <Article
                    image="./../images/icon2.png"
                    title="Components"
                    description="Build encapsulated componentes that manage their state."
                />
                <Article
                    image="./../images/icon3.png"
                    title="Single-Way"
                    description="A set of immutable values are passed to the component’s."
                />
                <Article
                    image="./../images/icon4.png"
                    title="JSX"
                    description="Statically-typed, designed to run on modern browsers."
                />
            </footer>
        </>
    )
    return fullComponent
}

export default Footer