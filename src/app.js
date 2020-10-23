import React from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as logoIronhack } from '../public/images/ironhack-logo.svg';

const logo = () => {
  return (
    <div>
      <logoIronhack />
    </div>
  )
};

const App = () => {
  return (
    <div>
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
      <Button variant="secondary">Awesome!</Button>{' '}
    </div>
  )
};

export default App;
export default logo;