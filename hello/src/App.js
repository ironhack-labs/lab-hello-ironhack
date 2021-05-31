import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Body from './components/Body';

function App() {
  const images = [
    {
      imagen: "/images/icon1.png",
      title: "Declarative",
      parrafo: "React makes it painless to create interactive UIs"
    },
    {
      imagen: "/images/icon2.png",
      title: "Components",
      parrafo: "Build encapsulated components that manage their state"
    },
    {
      imagen: "/images/icon3.png",
      title: "Single-Way",
      parrafo: "A set of immutable values are passed to the component's"
    },
    {
      imagen: "/images/icon4.png",
      title: "JSX",
      parrafo: "Statically-typed, designed to run on modern browser"
    }

  ]
  return (
    <div className="App">
      <Header />
      <Body imagenes={images} />
    </div>
  );
}

export default App;