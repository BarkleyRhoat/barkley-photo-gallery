import { useState } from "react";
import PhotoCard from "./PhotoCard";

function Carousel({ photos, onDelete, onLike, onUnlike }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	if (photos.length === 0) return <p>No photos yet.</p>;

	const correctedIndex = Math.min(currentIndex, photos.length - 1);

	function handlePrev() {
		setCurrentIndex(correctedIndex === 0 ? photos.length - 1 : correctedIndex - 1);
	}

	function handleNext() {
		setCurrentIndex(correctedIndex === photos.length - 1 ? 0 : correctedIndex + 1);
	}

	return (
		<div className="carousel">
			<button onClick={handlePrev}>🏃</button>
			<PhotoCard
				photo={photos[correctedIndex]}
				onDelete={onDelete}
				onLike={onLike}
				onUnlike={onUnlike}
			/>
			<button onClick={handleNext}>🏃‍➡️</button>
		</div>
	);
}

export default Carousel;
