import React from "react";

function PhotoCard({ photo, onDelete }) {
	return (
		<div className="photo-card">
			<img src={photo.url} alt="gallery" />
			<button onClick={() => onDelete(photo.id)}>Delete</button>
		</div>
	);
}

export default PhotoCard;
