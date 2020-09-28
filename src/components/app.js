import React from 'react'

import Navbar from './navbar'

import Title from './title'

import Articles from './articles'

import './app.css'


const App = () => {

    return (

        <>
            <section className="firstSection">

                <Navbar/>

                <section className="welcome">
                
                    <Title/>
                    
                </section>
                
            </section>

            <section className="secondSection">

                <Articles/>

            </section>

        </>
    )

}



export default App
