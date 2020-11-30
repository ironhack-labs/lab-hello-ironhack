import './footer.css';
import icon1 from '../icon1.png';
import icon2 from '../icon2.png';
import icon3 from '../icon3.png';
import icon4 from '../icon4.png';


function Footer() {

    return (
        <footer className="Footer">

            <div>
                <img src={icon1}></img>
                <h3>Declarative</h3>
                <p>React makes it painles to create interactive UIS</p>
            </div>

            <div>
                <img src={icon2}></img>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>

            <div>
                <img src={icon3}></img>
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the component's</p>
            </div>
            
            <div>
                <img src={icon4}></img>
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>

        </footer>

    );
}

export default Footer;