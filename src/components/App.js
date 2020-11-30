import './App.css';
import Title from './title'
import Text from './text'
import Button from './button'
import Infocard from './infocard'
import Logo from './logo'

function App() {
  return (
    <main>
      <section className="section1">
        <Logo img="https://techsalesgroup.files.wordpress.com/2016/10/ironhack-logo-negro1.jpg"/>
        <Title text1="Say hello to" text2="ReactJS"/>
        <Text text1="You will learn how to use" text2="the most popular front-end library," text3="and become a super Ninja developer"/>
        <Button text="Awesome!"/>
      </section>
      <section className="section2">
      <Infocard img="./../../images/icon1.png" title="Declarative" text1="React makes it" text2="painless to create" text3="interactive UIs"/>
      <Infocard img="./../../images/icon2.png" title="Components" text1="Build encapsulated" text2="components that" text3="manage their state"/>
      <Infocard img="./../../images/icon3.png" title="Single-way" text1="A set of immutable" text2="values are passed to" text3="the component's"/>
      <Infocard img="./../../images/icon4.png" title="JSX" text1="Statically-type," text2="designed to run on" text3="modern browsers"/>
      </section>
    </main>
  );
}

export default App;
