import { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import Header from "../components/Header";
import { API_URL } from "../api";

function FavoritesPage() {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		fetch(`${API_URL}/photos?liked=true`)
			.then((r) => r.json())
			.then((data) => setFavorites(data));
  }, []);
  
  function handleUnlikePhoto(id) {
    fetch(`${API_URL}/photos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({liked: false}),
    })
      .then(() => {
      setFavorites((prev) => prev.filter((photo) => photo.id !== id))
    })
  }

  if (favorites.length === 0) return (
		<div>
			<Header />
			<p>No favorites yet.</p>
		</div>
	);
	return (
    <div>
      <Header />
			<h1>Favorites</h1>
			<Carousel photos={favorites} onUnlike={handleUnlikePhoto} />
		</div>
	);
}

export default FavoritesPage;
