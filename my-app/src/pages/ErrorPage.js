import React from "react";
import Header from "../components/Header";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<>
			<Header />
			<main>
				<h1>Oops! Looks like something went wrong.</h1>
			</main>
		</>
	);
}

export default ErrorPage;
