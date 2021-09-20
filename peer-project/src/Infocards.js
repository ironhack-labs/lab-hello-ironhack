import './Infocards.css'

function Infocards (props) {

    return (
      <section className={props.className}>
        <img src={props.imgsource}></img>
        <h3>{props.infotitle}</h3>
        <p>{props.infotext}</p>
      </section>
    )
  }

  export default Infocards