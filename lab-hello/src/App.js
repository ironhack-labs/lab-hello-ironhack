import React from 'react'
import Main from './main/main'
import Header from './header/header'
import Button from './button/button'
import Imageicons from './imageicons/imageicons'

import './App.css'

function App () {
  return (
    <div className='App'>
      <div className='appcenter'>
        <Header />
        <Main />
        <Button />
      </div>
      <Imageicons />
    </div>
  )
}

export default App
