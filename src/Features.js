import React, { Component } from 'react'
import './Features.css'
// import icon1 from "./icon1.png"
// import icon2 from "./icon2.png"
// import icon3 from "./icon3.png"
// import icon4 from "./icon4.png"

export class Features extends Component {
  render() {
    return (
      <section className='features'>
        <div className="row">
          <div className="col">
            <article>
              <img src='./images/icon1.png' alt="icon 1" />
              <h4>Declarative</h4>
              <p>React makes it painless to create interactive UIs</p>
            </article>
          </div>
          <div className="col">
            <article>
              <img src='./images/icon1.png' alt="icon 1" />
              <h4>Declarative</h4>
              <p>React makes it painless to create interactive UIs</p>
            </article>
          </div>
          <div className="col">
            <article>
              <img src='./images/icon1.png' alt="icon 1" />
              <h4>Declarative</h4>
              <p>React makes it painless to create interactive UIs</p>
            </article>
          </div>
          <div className="col">
            <article>
              <img src='./images/icon1.png' alt="icon 1" />
              <h4>Declarative</h4>
              <p>React makes it painless to create interactive UIs</p>
            </article>
          </div>
        </div>
      </section>
    )
  }
}

export default Features
