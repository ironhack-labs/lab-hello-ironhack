import React from "react";

function Landing() {
	return (
		<div className="landing-container">
			<div className="hero">
				<h1>Say Hello to ReactJS</h1>
				<h3 className="phrase">
					You will learn how to use the most popular frontend library and become
					a super{" "}
					<a href="https://www.insidehighered.com/blogs/student-affairs-and-technology/you-are-not-social-media-jedi-ninja-sherpa-or-guru">
						Ninja{" "}
					</a>
					developer.
				</h3>
				<a
					target="_blank"
					href="https://reactjs.org/community/courses.html"
					className="btn-awesome"
					rel="noreferrer"
				>
					Awesome!
				</a>
			</div>
		</div>
	);
}

export default Landing