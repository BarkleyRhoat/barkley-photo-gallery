import { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import Header from "../components/Header";

function FavoritesPage() {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/photos?liked=true')
			.then((r) => r.json())
			.then((data) => setFavorites(data));
	}, []);

	if (favorites.length === 0) return <p>No favorites yet.</p>;

	return (
    <div>
      <Header />
			<h1>Favorites</h1>
			<Carousel photos={favorites} />
		</div>
	);
}

export default FavoritesPage;
