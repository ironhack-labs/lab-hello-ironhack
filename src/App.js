import logo from './logo.svg';
import imag1 from "./images/icon1.png"
import imag2 from "./images/icon2.png"
import imag3 from "./images/icon3.png"
import imag4 from "./images/icon4.png"
import './App.css';

const Intro = () => <div>
  <h1>Say Hello to React JS</h1>
  <p> You will learn bla </p>
  <button> Awesome! </button>
</div>

const Box =(props) => <div>
  <h2>{props.title}</h2>
  <p>{props.text}</p>
  <img  src={props.link}></img>

</div>

function App() {
  return (
    <div>
      <div className="intro">
        <Intro />
      </div>
      <div className="box">
        <Box title="Declarative" text="React makes it painless to create interatic UI's" link={imag1}/>
        <Box title="Declarative" text="React makes it painless to create interatic UI's" link={imag2}/>
        <Box title="Declarative" text="React makes it painless to create interatic UI's" link={imag3}/>
        <Box title="Declarative" text="React makes it painless to create interatic UI's" link={imag4}/>
      </div>
    </div>
  );
}

export default App;
