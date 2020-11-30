import './Content.css';

const Content = props => {

    const image = props.image
    
    const title = props.title

    const text = props.text


    return (
            <div className="column">
            <img src={image} className="image" alt="image" />
            <h3 className="content-title">{props.title}</h3>
            <p className="content-text">{props.text}</p>
            </div>

    )
}


 

export default Content
