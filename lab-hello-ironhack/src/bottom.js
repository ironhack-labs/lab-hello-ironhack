import './bottom.css'

function bottom(){
    const icon1='./icon1.png'
    const icon2='./icon2.png'
    const icon3='./icon3.png'
    const icon4='./icon4.png'
    return (
        <div className="bottom">
        <div className="card">
        <img src={icon1} className="logo-top" alt="logo" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="card">
        <img src={icon2} className="logo-top" alt="logo" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="card">
        <img src={icon3} className="logo-top" alt="logo" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's</p>
        </div>
        <div className="card">
        <img src={icon4} className="logo-top" alt="logo" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
        </div>
    )
}

export default bottom