import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Text from './Text';
import Btn from './Button';
import img1 from './images/ironhack-logo.svg'; import img2 from './images/menu-top.svg';


function App() {
  return (
    <div className="App">
      <nav>
        <img src={img1} alt="Patata" />
        <img src={img2} alt="Patata" />
      </nav>
      <header className="App-header">
        <Title titleText='Say hello to ReactJS' />
        <Text textText='You will learn how to use the most popular frontend library, and become a super Ninja developer' />
        <Btn btnText='Awesome!' />

      </header>
    </div>
  );
}

export default App;
