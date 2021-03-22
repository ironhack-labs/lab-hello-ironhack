import './App.css';
import Header from './components/header'
import icon1 from '../public/images/icon1.png'
import icon2 from '../public/images/icon2.png'
import icon3 from '../public/images/icon3.png'
import icon4 from '../public/images/icon4.png'
import Center from './components/center'


function App() {
  return (
    <>
      <Header
        title="Say hello to ReactJS"
        text="You will learn how to use the most popular frontend library, and beacome a super ninja developer."
        btn="Awesome!"
      />
      <section>
        <Center source={icon1} title='Declarative' text='React makes it timeless to create inteactive UIS'></Center>
        <Center source={icon2} title='Components' text='Build encapsulated components that manage their state'></Center>
        <Center source={icon3} title='Single-way' text='A set of inmutable values are passed to the components'></Center>
        <Center source={icon4} title='JSX' text='Statically typed designed to run on modern browsers'></Center>
      </section>
    </>
  );
}

export default App;