// cSpell:enableCompoundWords
import React from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";

function Work() {
	return (
		<div className="container">
			<div className="main-text">
				{/* <span className="block"></span> */}
				<h1>UI and Web Design.</h1><h2>Designer by day, developer also by day.</h2>
				<Link to="/" className="link">thing 1</Link>
				<Link to="/" className="link">thing 2</Link>

			</div>
		</div>
	)
}

export default Work;