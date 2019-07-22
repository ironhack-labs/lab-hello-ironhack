import React, {Component} from 'react';
import '../App.css';
import './Main.css';

class Main extends Component {

  showName = () => {
    let fullName = 'Steve Englander';
    return (fullName)
  }

  showPhoto = () => {
    let photoURL = 'https://avatars3.githubusercontent.com/u/769366?s=460&v=4';
    return (photoURL)
  }

  showSummary = () => {
    let summary = `With 20+ years of experience as a product, platform and ecosystem architect, I am an innovator and lifelong learner focused on ad tech, ecommerce, education, workforce, and blockchain technology. I find inspiration in decentralization technologies such as Solid, IPFS & IPLD, Holochain, Bitcoin & Ethereum (learning Solidity), and am keen on applying these and similar protocols and platforms to build decentralized and distributed censorship-resistant networks and applications for the betterment of humanity.`;
    return (summary)
  }

  showAccomplishments = () => {
    let arrayOfAccomplishments = [
      `Learn Full Stack Web Application Development at Ironhack Miami`,
      `Design an artificial intelligence product for recruiting`,
      `Architect a gamified ad tech and marketplace ecosystem involving blockchain technology`,
      `Build an ERC20 crypto consumer rewards token`,
      `Bring big data and predictive modeling solutions to ad tech`,
      `Develop solutions for ecommerce retailers to better merchandise product`,
      `Design and develop data center solutions for tracking network equipment and planning (DCIM)`,
      `Work with Fortune 500 organizations on implementations of content management (ECM) platforms`, 
      `Productize affiliate marketing / performance marketing solutions for the world's top ecommerce retailers`
    ];
    return (
      arrayOfAccomplishments.map((eachAccomplishment, i) => {
        return (
          <li key={i}>
            {eachAccomplishment}
          </li>
        )
      })
    )
  }
  
  showProfiles = () => {
    let arrayOfProfiles = [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/recsci/' },
      { name: 'Github', url: 'https://github.com/confidenti-al' },
      { name: 'Angel.co', url: 'https://angel.co/recsci'},
      { name: 'Medium', url: 'https://medium.com/@stevenenglander'},
      { name: 'per.hr', url: 'http://perhr.herokuapp.com/5d322737b35fdd0017c708ac'}
    ];
    return (
      arrayOfProfiles.map((eachProfile, i) => {
        return (
          <li key={i}>
            <span className="bold">{eachProfile.name}: </span>
            <a className="green" href={eachProfile.url} alt={eachProfile.name}>
              {eachProfile.url}
            </a>
          </li>
        )
      })
    )
  }

  render() {
    return (
      <div className="pad dark">
        <img className="photo" src={this.showPhoto()} alt={this.showName()}/>
        <h1>
          {this.showName()}
        </h1>
        <h4>Summary:</h4>
        <p>
          {this.showSummary()}
        </p>
        <h4>Accomplishments:</h4>
        <ul>
          {this.showAccomplishments()}
        </ul>
        <h4>Profiles:</h4>
        <ul>
          {this.showProfiles()}
        </ul>
      </div>
    );
  }
}

export default Main;
