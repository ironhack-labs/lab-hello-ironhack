import React from 'react'
import Button from './Button'
import './Article.css'


const Article = (props) => {
    return (
        <article className="article">
            <header>
                <p className="title">{props.name}</p>

            </header>
            <div>
                <p>{props.paragraph}</p>
            </div>
            <Button text="Awesome" href="#" />
        </article>
    )
}

export default Article