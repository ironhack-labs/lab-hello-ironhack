import './App.css';
import Hero from './Hero'
import Card from './Card'

function App() {
  return (
    <main>
      <section className="blueBG">
        <div className="navbar">
          <nav>
            <img src="../../images/ironhack-logo.svg" alt="Ironhack Logo" />
            <img src="../../images/menu-top.svg" alt="burguer Logo"/>
          </nav>
        </div>
        <div className="hero">
          <div>
            <Hero
            title='Say hello to ReactJs'
            text='You will learn how to use the most popular frontend library, and become a super Ninja developer.'
            buttonText='Awesome!'
            />
          </div>
          <div>
            <img src="../../images/react-logo.svg" alt="burguer Logo"/>
          </div> 
        </div>
      </section>
      <section className="cards">
        <Card
          icon='../../images/icon1.png'
          title='Declarative'
          text='React makes it painless to credate interactive UIs.'
        />
        <Card
          icon='../../images/icon2.png'
          title='Components'
          text='Build encapsulated components that manage their slate.'
        />
        <Card
          icon='../../images/icon3.png'
          title='Single-Way'
          text="A set of immutable values are passed to the component's."
        />
        <Card
          icon='../../images/icon4.png'
          title='JSX'
          text='Statically-typed, designed to run on modern browsers.'
        />
      </section>
    </main>
  )
}

export default App;
