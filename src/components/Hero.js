const Hero = props => {

    return (
        <div className="heroText">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <button><strong>{props.buttonText}</strong></button>
        </div>   
)
}

export default Hero