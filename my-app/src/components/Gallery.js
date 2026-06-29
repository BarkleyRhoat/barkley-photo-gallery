import { useState, useEffect } from "react";
import AddPhotoForm from "./AddPhotoForm";
import PhotoCard from "./PhotoCard";

function Gallery() {
	const [photos, setPhotos] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showForm, setShowForm] = useState(false);

	function handleAddPhoto(newPhoto) {
		setPhotos((prev) => [...prev, newPhoto]);
		setCurrentIndex(photos.length);
		setShowForm(false);
	}

	function handleDeletePhoto(id) {
		fetch(`http://localhost:3001/photos/${id}`, {
			method: "DELETE",
		}).then(() => {
			setPhotos((prev) => prev.filter((photo) => photo.id !== id));
			setCurrentIndex(0);
		});
	}

	useEffect(() => {
		fetch("http://localhost:3001/photos")
			.then((response) => response.json())
			.then((data) => setPhotos(data));
	}, []);

	function handlePrev() {
		setCurrentIndex((index) => (index === 0 ? photos.length - 1 : index - 1));
	}

	function handleNext() {
		setCurrentIndex((index) => (index === photos.length - 1 ? 0 : index + 1));
	}

	if (photos.length === 0) return <p>Loading...</p>;

	return (
		<div>
			<h1>Gallery</h1>
			<button onClick={handlePrev}>⬅️</button>
			<button onClick={handleNext}>➡️</button>
			<div className="carousel">
				<PhotoCard photo={photos[currentIndex]} onDelete={handleDeletePhoto} />
			</div>
			<button onClick={() => setShowForm((prev) => !prev)}>
				{showForm ? "Cancel" : "Add Photo"}
			</button>
			{showForm && <AddPhotoForm onAddPhoto={handleAddPhoto} />}
		</div>
	);
}

export default Gallery;
