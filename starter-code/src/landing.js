import React, { Component } from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Article from '../components/article'

import '../public/css/main.css'
import '../public/css/header.css'
import '../public/css/nav.css'
import '../public/css/article.css'



class Landing extends Component {

    render() {

        const header = {
            title: 'Say hello to ReactJs',
            description: 'You will learn a Frontend framework from scratch, to become an Ninja Developer.',
            buttonName: 'Awesome!'
        }

        const nav = {
            logo: 'images/ironhack-logo.svg',
            menu: 'images/menu-top.svg'
        }

        const article = {
            icon: ['images/icon1.png', 'images/icon2.png', 'images/icon3.png', 'images/icon4.png'],
            title: ['Declarative', 'Components', 'Single-Way', 'JSX'],
            description: [
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
            ]
        }

        return (
            <div>
                <Nav logo={nav.logo} menu={nav.menu} />

                <Header title={header.title} description={header.description} buttonName={header.buttonName} />

                <section className='articles'>
                    <Article icon={article.icon[0]} title={article.title[0]} description={article.description[0]} />
                    <Article icon={article.icon[1]} title={article.title[1]} description={article.description[1]} />
                    <Article icon={article.icon[2]} title={article.title[2]} description={article.description[2]} />
                    <Article icon={article.icon[3]} title={article.title[3]} description={article.description[3]} />
                </section>

            </div>
        )
    }




}



export default Landing