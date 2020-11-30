import './section2.css'

let Section2= props =>{
    return(
        <div class='section2'>
        <article>
            <img src={props.logo} />
            <h5>{props.title}</h5>
            <p>{props.text}</p>
        </article>
        </div>
    )
}

export default Section2