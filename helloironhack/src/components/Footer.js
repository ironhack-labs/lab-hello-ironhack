import './App.css'
import img1 from './icon1.png'
import img2 from './icon2.png'
import img3 from './icon3.png'
import img4 from './icon4.png'



const Footer = props => {
    const className = "footer"
    const fullComponent = (
        <>
            <footer className={className}>
            <article>
            <img src={img1} alt="Icon 1"/>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
            </article>
            <article>
            <img src={img2} alt="Icon 2"/>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
            </article>
            <article>
            <img src={img3} alt="Icon 3"/>
            <h3>Single-Way</h3>
            <p>A set of inmutable values are passed to the component's.</p>
            </article>
            <article>
            <img src={img4} alt="Icon 4"/>
            <h3>JSX</h3>
            <p>Statically-Typed, designed to run on modern browsers</p>
            </article>
            </footer>
        </>
    )
    return fullComponent
}



export default Footer