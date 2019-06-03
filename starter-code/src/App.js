import React, {
  Component
} from 'react'

import './App.css'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import Article from './components/Article/Article'


class App extends Component {
  render() {
    return (
    <div>
      <Navigation />
      <Hero />
      <section>
        <Article 
          image='images/icon1.png'
          title='Declarative'
          info='React makes it painless to create interactive UIs' />
        <Article 
          image='images/icon2.png'
          title='Components'
          info='Build encapsulated components that manage their state' />
        <Article 
          image='images/icon3.png'
          title='Singe-Way'
          info='A set of immutable values are passed to the components' />
        <Article 
          image='images/icon4.png'
          title='JSX'
          info='Statically-typed, designe to run on modern browsers' />
      </section>
    </div>
     
    );
    }
  }
 

  export default App