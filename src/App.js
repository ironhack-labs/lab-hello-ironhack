import React from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx'
import Content from './components/Content.jsx'
import Features from './components/Features.jsx'

function App() {

  let features = [
    {
      img: "/images/icon1.png",
      title: "Declarative",
      text: "React makes it Painless to create interactive UIs"
    },
    {
      img: "/images/icon2.png",
      title: "Components",
      text: "Build Encapsulated components that manage their state"
    },
    {
      img: "/images/icon3.png",
      title: "Single-way",
      text: "A ser of immutable values are passed to the components"
    },
    {
      img: "/images/icon4.png",
      title: "JSX",
      text: "Statically typed designed to run on modern browsers"
    },
  ]



  return (
    <div>
      <NavBar/>
      <Content/>
      <div className="features">
      {
        features.map(feature => {
          return <Features img={feature.img} title={feature.title} text={feature.text} />
        })
      }
      </div>
    </div>
  );
}

export default App;
