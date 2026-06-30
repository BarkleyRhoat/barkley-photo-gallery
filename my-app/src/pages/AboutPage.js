import React from "react";
import Header from "../components/Header";

function AboutPage() {
	return (
		<div>
			<Header />
			<div className="about-card">
				<h1>About The Gallery</h1>
				<p>
					Hola friends, I'm Barkley. This gallery is a place where I share
					photos I've taken. This gallery was built as a project to practice
					React, routing, and working with a backend.
				</p>
				<p>
					Feel free to browse the gallery and like the photos you enjoy most.
					They'll show up in your Favorites.
				</p>
			</div>
		</div>
	);
}

export default AboutPage;
