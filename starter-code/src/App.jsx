import React, { Component } from "react";
import './App.css';
import Header from "../components/Header";
import Main from "../components/Main"

class App extends Component {
    render() {
        return (
					<div className="main-div">
						<section id="header-section">
							<Header></Header>
                        </section>
                
                     <section className="main-section">
                             <Main></Main>
                      </section>
					</div>
				);
    }
}

export default App;


