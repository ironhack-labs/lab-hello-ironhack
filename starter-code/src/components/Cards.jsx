import React from "react";
import CardItem from "./CardItem";

function Cards(props) {
  return (
    <div className='cards'>
      <CardItem
        header='Declarative'
        icon='./images/icon1.png'
        copy='React makes it painless to create interactive UIs.'
      />
      <CardItem
        header='Components'
        icon='./images/icon2.png'
        copy='Build encapsulated components that manage their state.'
      />
      <CardItem
        header='Single-way'
        icon='./images/icon3.png'
        copy='A set of immutable values are passed to the components.'
      />
      <CardItem
        header='JSX'
        icon='./images/icon4.png'
        copy='Statically-typed, designed to run on modern browsers.'
      />
    </div>
  );
}

export default Cards;

// Trying out classes, works as well

// export default class Cards extends Component {
//   render() {
//     return (
//       <div className='cards'>
//         <CardItem
//           header='Declarative'
//           icon='./images/icon1.png'
//           copy='React makes it painless to create interactive UIs.'
//         />
//         <CardItem
//           header='Components'
//           icon='./images/icon2.png'
//           copy='Build encapsulated components that manage their state.'
//         />
//         <CardItem
//           header='Single-way'
//           icon='./images/icon3.png'
//           copy='A set of immutable values are passed to the components.'
//         />
//         <CardItem
//           header='JSX'
//           icon='./images/icon4.png'
//           copy='Statically-typed, designed to run on modern browsers.'
//         />
//       </div>
//     );
//   }
// }
