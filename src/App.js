
import './App.css'
import Header from './Header'
import Article from './Article'
import img1 from './icon1.png'
import img2 from './icon2.png'
import img3 from './icon3.png'
import img4 from './icon4.png'



function App() {
  return (
    <>

      <Header />
      <section>
        <Article
          image={img1}
          title="declarative"
          content=" React makes it painless to create interactive Uls."
        />
        <Article
          image={img2}
          title="components"
          content=" Build encapsulated components that manage their state."
        />
        <Article
          image={img3}
          title="single-Way"
          content=" a set of immutable values are passed to the component^s."
        />
        <Article
          image={img4}
          title="JSX"
          content=" statically-typed. designed to run on modern browsers."
        />

      </section>
    </>




  )
}

export default App;
