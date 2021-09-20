const Item = (props) => {

return (

<div className="bottom-item">
           <img src={props.icon} alt='declarative' />
           <h4>{props.title}</h4>
           <p>{props.text}</p>
        </div>

)


}

export default Item
