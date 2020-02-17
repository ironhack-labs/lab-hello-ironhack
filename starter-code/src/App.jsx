import React from 'react'
import Navbar from './components/navbar.jsx'
import Splashtext from './components/splashtext.jsx'
import Button from './components/button.jsx'
import Keypoint from './components/keypoint.jsx'

import './main.css'

 const App = () => {
  return (
    <div id="main-container">

      <div id="splash-container">

        <Navbar />

        <Splashtext
            bigText="Say hello to ReactJS"
            smallText="You will learn a frontend framework from scratch, to become a Ninja Developer."
            />

        <Button text="Awesome" />

      </div>

      <div id="keypoints-container">
        <Keypoint
          title="Declarative"
          desc="React makes it painless to create interactive UIs."
          imgSrc="/images/icon1.png"
          />

        <Keypoint
          title="Components"
          desc="Build encapsulated components that manage their state."
          imgSrc="/images/icon2.png"
          />

        <Keypoint
          title="Single-Way"
          desc="A set of immutable values are passed to the component."
          imgSrc="/images/icon3.png"
          />

        <Keypoint
          title="JSX"
          desc="Statically-typed, designed to run on modern browsers."
          imgSrc = "/images/icon4.png"
          />
      </div>

    </div>
  )
}


export default App;
