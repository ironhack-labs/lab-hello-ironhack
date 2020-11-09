import React ,{Component} from "react"
import "./App.css";

class Card extends Component {
    render(props) {
  
      return ( <div class="cajaslogos"> <img src={this.props.imgsrc}/> {this.props.h1}{this.props.p}</div> )
    }
}

export default Card;