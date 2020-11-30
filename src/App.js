import React from "react";
import "./App.css";

const App = () => {
	return (

		<div className="App">

			<div className="header">

				<nav className="nav-bar">
					{/* Detecta las imágenes pero no las renderiza? --> Son imágenes en blanco! */}
					<div>
						<img src="/images/ironhack-logo.svg" alt="ironhack icon" />
					</div>

					<div>
						<img src="/images/menu-top.svg" alt="menu icon" />
					</div>
				</nav>

				<div className="top-section">
					<h1>Say Hello to React</h1>
					<p>You will learn how to use React</p>

					<br />

					<a href="">Awesome!</a>
				</div>

			</div>

			<section className="bot-section">

				<article className="card">

					<img src="/images/icon1.png" alt="icon1" />
					<h3>Declarative</h3>
					<p>React makes painless to create interactive UIs</p>

				</article>

				<article className="card">

					<img src="/images/icon2.png" alt="icon2" />
					<h3>Declarative</h3>
					<p>React makes painless to create interactive UIs</p>

				</article>

				<article className="card">

					<img src="/images/icon2.png" alt="icon2" />
					<h3>Declarative</h3>
					<p>React makes painless to create interactive UIs</p>

				</article>

				<article className="card">

					<img src="/images/icon2.png" alt="icon2" />
					<h3>Declarative</h3>
					<p>React makes painless to create interactive UIs</p>

				</article>


			</section>
		</div>
	)


}

export default App;