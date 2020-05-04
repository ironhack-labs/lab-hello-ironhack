import React from 'react';
import './App.css';
// import icon1 from './../../../../icon1.png'; // Tell webpack this JS file uses this image
// import icon2 from './../../../../icon2.png'; // Tell webpack this JS file uses this image
// import icon3 from './../../../../icon3.png'; // Tell webpack this JS file uses this image
// import icon4 from './../../../../icon4.png'; // Tell webpack this JS file uses this image

import Header from './ui/header/Header'
import Button from './ui/button/Button'
import Card from './ui/card/Card'

function App() {
  return (
    
    <>
    <Header/>
    <Button link="https://www.google.com/" text="Awsome!!" />

    <div>
      <Card imgSource="icon1.png" imgAlt="icon1" cardTitle="Declarative" cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "/>
      <Card imgSource="icon2.png" imgAlt="icon2" cardTitle="Components" cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "/>
      <Card imgSource="icon3.png" imgAlt="icon3" cardTitle="Single way" cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "/>
      <Card imgSource="icon4.png" imgAlt="icon4" cardTitle="JSX" cardText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "/>
    </div>
    </>


  );
}

export default App;
