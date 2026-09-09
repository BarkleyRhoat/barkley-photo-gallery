import React, { useState, useEffect } from 'react'
import Carousel from './Carousel'
import { API_URL } from '../api'

function Favorites() {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		fetch(`${API_URL}/photos?liked=true`)
			.then((r) => r.json())
			.then((data) => setFavorites(data));
	}, []);

	function handleUnlikePhoto(id) {
		fetch(`${API_URL}/photos/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ liked: false }),
		}).then(() => {
			setFavorites((prev) => prev.filter((photo) => photo.id !== id));
		});
	}

	if (favorites.length === 0) return <p>No favorites yet.</p>;
	return (
		<div>
			<h1>Favorites</h1>
			<Carousel photos={favorites} onUnlike={handleUnlikePhoto} />
		</div>
	);
}

export default Favorites;