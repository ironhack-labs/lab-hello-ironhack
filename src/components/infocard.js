

const Infocard = props => {
    return(
    <article> 
        <img src={props.img}/>
        <h2>{props.title}</h2>
        <p>{props.text1}<br/>{props.text2}<br/>{props.text3}</p>
    </article>
    )

}

export default Infocard