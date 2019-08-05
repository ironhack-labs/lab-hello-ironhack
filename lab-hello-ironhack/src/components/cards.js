import React from 'react';
import "./Footer.css"

// FUNCTION COMPONENT

const card = ({image, title, text}) => {
    return (
        <div className="card">
            <img src={image} alt="card"/>
            <div className="card-text">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
  }
  
// CLASS COMPONENT

// class card extends React.Component {
//     render() {
//         return (
//             <div className="card">
//                 <img src={this.props.image} alt="card"/>
//                 <h2>{this.props.title}</h2>
//                 <p>{this.props.text}</p>
//             </div>
//         )
//     }
// }

  export default card;