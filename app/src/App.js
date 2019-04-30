import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LogoIH from './logo/logo';
import TopMenu from './burgermenu/burgermenu';
import Content from './content/content';
import Button from './button/button';
import Arguments from './arguments/arguments';







export default function App() {
  return (
    <div>
      <LogoIH bg="blue"/>
      <TopMenu bg="blue"/>
      <Content title="Say Hello to React JS" subtitle="You will learn a frontend framework from scratch, to became a ninka developer"/>
      <Button />
      <Arguments image="/images/icon1.png" txt="Declarative" />
      <Arguments image="/images/icon2.png" txt="Components" />
      <Arguments image="/images/icon3.png" txt="Single-Way" />
      <Arguments image="/images/icon4.png" txt="JSX" />
    </div>
  );
}