import { useState, useEffect } from "react";
import AddPhotoForm from "./AddPhotoForm";
import Carousel from "./Carousel";

function Gallery() {
	const [photos, setPhotos] = useState([]);
	const [showForm, setShowForm] = useState(false);

	function handleAddPhoto(newPhoto) {
		setPhotos((prev) => [...prev, newPhoto]);
		setShowForm(false);
	}

	function handleDeletePhoto(id) {
		fetch(`http://localhost:3001/photos/${id}`, {
			method: 'DELETE',
		}).then(() => {
			setPhotos((prev) => prev.filter((photo) => photo.id !== id));
		});
	}

	function handleLikePhoto(id) {
		fetch(`http://localhost:3001/photos/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ liked: true }),
		})
			.then((response) => response.json())
			.then((updatedPhoto) => {
				setPhotos((prev) =>
					prev.map((photo) => (photo.id === id ? updatedPhoto : photo))
				);
			});
	}

	useEffect(() => {
		fetch('http://localhost:3001/photos')
			.then((response) => response.json())
			.then((data) => setPhotos(data));
	}, []);

	if (photos.length === 0) return <p>Loading...</p>;

	return (
		<div>
			<h1>Gallery</h1>
			<Carousel
				photos={photos}
				onDelete={handleDeletePhoto}
				onLike={handleLikePhoto}
			/>
			<button onClick={() => setShowForm((prev) => !prev)}>
				{showForm ? 'Cancel' : 'Add Photo'}
			</button>
			{showForm && <AddPhotoForm onAddPhoto={handleAddPhoto} />}
		</div>
	);
}

export default Gallery;
