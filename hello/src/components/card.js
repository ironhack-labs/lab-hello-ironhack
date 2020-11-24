function Card (props) {
  return (
    <li className="flex-item">
      <div>
        <img src={props.image}/>
      </div>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </li>
  )
}

export default Card