import React, {Component} from "react";

class Section extends Component {
    render() {
      const {img, title, description } = this.props;
      console.log(name);
      return (   
        <div class="a-section">
            <div class="row">
                <img width="100" src={img}/>
            </div>

            <strong> {title} </strong>
            <p> {description} </p>
        </div>
      );
    }
  }

  export default Section;

