import { useState } from 'react';
import PhotoCard from './PhotoCard';

function Carousel({ photos, onDelete, onLike, onUnlike }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	function handlePrev() {
		setCurrentIndex((index) => (index === 0 ? photos.length - 1 : index - 1));
	}

	function handleNext() {
		setCurrentIndex((index) => (index === photos.length - 1 ? 0 : index + 1));
	}

	if (photos.length === 0) return <p>No photos yet.</p>;

	return (
		<div className="carousel">
			<button onClick={handlePrev}>🏃</button>
			<PhotoCard
				photo={photos[currentIndex]}
				onDelete={onDelete}
				onLike={onLike}
				onUnlike={onUnlike}
			/>
			<button onClick={handleNext}>🏃‍➡️</button>
		</div>
	);
}

export default Carousel;
