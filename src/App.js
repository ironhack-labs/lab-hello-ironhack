import './App.css';
import Header from './Header';
import Icon from './Icon';
import Image1 from './icon1.png';
import Image2 from './icon2.png';
import Image3 from './icon3.png';
import Image4 from './icon4.png';

function App() {

  return (
    <>

      <Header></Header>
      <Icon
        text="Declarative"
        subText="React makes it painless to create interactive ULs"
        image={Image1}
      />
      <Icon
        text="Components"
        subText="Build encapsulated components"
        image={Image2}
      />
      <Icon
        text="Single-way"
        subText="A set of inmutable values "
        image={Image3}
      />
      <Icon
        text="JSX"
        subText="Statically-typed, designed to run on modern browsers"
        image={Image4}
      />
    </>
  )
}
export default App;
