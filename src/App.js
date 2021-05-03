import React from 'react';
import Logo from './components/logo/Logo';
import MenuButton from './components/menu-button/MenuButton';
import Title from './components/title/Title';
import Button from './components/button/Button';

const App = () => {
    return (
        <main id="container">

            <section id="top">
                <div id="navbar">
                    <Logo />
                    <MenuButton />
                </div>

                <Title />
                
                <Button />
            </section>

            <section id="bottom">

            </section>

        </main>
    )
}

export default App;