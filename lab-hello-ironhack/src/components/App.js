import './App.css';
import Header from './Header'
import icon1 from './image/icon1.png'
import icon2 from './image/icon2.png'
import icon3 from './image/icon3.png'
import icon4 from './image/icon4.png'
import Article from './Article'


function App() {
  return (
    <>
      <Header
        title="Say hello to ReactJS"
        text="You will learn how to use the most popular frontend library, and beacome a super ninja developer."
        btn="Awesome!"
      />
      <section>
        <Article source={icon1} title='Declarative' text='React makes it timeless to create inteactive UIS'></Article>
        <Article source={icon2} title='Components' text='Build encapsulated components that manage their state'></Article>
        <Article source={icon3} title='Single-way' text='A set of inmutable values are passed to the components'></Article>
        <Article source={icon4} title='JSX' text='Statically typed designed to run on modern browsers'></Article>
      </section>
    </>
  );
}

export default App;
