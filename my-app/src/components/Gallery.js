import { useState, useEffect } from 'react';

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/photos')
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
			<div className="carousel">
				<button onClick={handlePrev}>⬅️</button>
				<img src={photos[currentIndex].url} alt={currentIndex + 1} />
				<button onClick={handleNext}>➡️</button>
			</div>
		</div>
	);
}

export default Gallery;
