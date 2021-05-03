import './App.css'
import Header from "./Header"
import Navbar from "./Navbar"
import Article from "./Article"
import icon1 from "./icon1.png"
import icon2 from "./icon2.png"
import icon3 from "./icon3.png"
import icon4 from "./icon4.png"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <section>

        <Article
          image={icon1}
          title="Declarative"
          paragraph="React makes it painless to create interactive UIs"
        />
        <Article
          image={icon2}
          title="Components"
          paragraph="Build encapsulated components that manage their state"
        />
        <Article
          image={icon3}
          title="Single-way"
          paragraph="A set of immutable values are passed to the component's "
        />
        <Article
          image={icon4}
          title="JSX"
          paragraph="Statically-typed, designed to run modern browsers"
        />

      </section>

    </div >
  )
}

export default App