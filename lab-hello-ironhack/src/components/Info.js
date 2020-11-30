import "./Info.css"

const Info = () => {
    return (
        <div class="container info">
            <section class="row">            
            <article class="col-3">
                <img src="../../images/icon1.png" />
                <h4>Declarative</h4>
                <p>React makes it painless to create interactive UIs</p>
            </article>

            <article class="col-3">
                <img src="../../images/icon2.png"/>
                <h4>Components</h4>
                <p>Build encapsulated components that manage their state</p>
            </article>

            <article class="col-3">
                <img src="../../images/icon3.png"/>
                <h4>Single-Way</h4>
                <p>A set of immutable values are passed to the component's</p>
            </article>

            <article class="col-3">
                <img src="../../images/icon3.png"/>
                <h4>JSX</h4>
                <p>Statically-typed, designed to run on modern browsers</p>
            </article>
        </section>  
        </div>
                  
   )
}

export default Info