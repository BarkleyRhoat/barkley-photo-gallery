import { useState } from "react";
import PhotoCard from "./PhotoCard";

function Carousel({ photos, onDelete, onLike, onUnlike }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	if (photos.length === 0) return <p>No photos yet.</p>;

  function handlePrev() {
		setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
	}

	function handleNext() {
		setCurrentIndex(currentIndex === photos.length - 1 ? 0 : currentIndex + 1);
	}

	function handleDelete(id) {
    handlePrev();
    onDelete(id);
	}

	return (
		<div className="carousel">
			<button onClick={handlePrev}>🏃</button>
			<PhotoCard
				photo={photos[currentIndex]}
				onDelete={handleDelete}
				onLike={onLike}
				onUnlike={onUnlike}
			/>
			<button onClick={handleNext}>🏃‍➡️</button>
		</div>
	);
}

export default Carousel;
