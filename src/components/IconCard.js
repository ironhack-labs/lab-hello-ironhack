import './IconCard.css';


const IconCard = ({img, title, text}) => {
    return (
        <article>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
        </article>
    )
}

export default IconCard