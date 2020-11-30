import './Section.css'

const Section = props => {

    const array = props.articles

    return (
        <section className="articles">
            <article>
                <img src={array[0].img} alt={array[0].alt} />
                <h4>{array[0].title}</h4>
                <p>{array[0].text}</p>
            </article>
            <article>
                <img src={array[1].img} alt={array[1].alt} />
                <h4>{array[1].title}</h4>
                <p>{array[1].text}</p>
            </article>
            <article>
                <img src={array[2].img} alt={array[2].alt} />
                <h4>{array[2].title}</h4>
                <p>{array[2].text}</p>
            </article>
            <article>
                <img src={array[3].img} alt={array[3].alt} />
                <h4>{array[3].title}</h4>
                <p>{array[3].text}</p>
            </article>
        </section>
    )
}

export default Section