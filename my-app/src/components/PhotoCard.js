import React from "react";

function PhotoCard({ photo, onDelete, onLike }) {
	return (
		<div className="photo-card">
			<img src={photo.url} alt="gallery" />
			{onLike && (
				<button onClick={() => onLike(photo.id)} disabled={photo.liked}>
					{photo.liked ? "❤️ Liked" : "🤍 Like"}
				</button>
			)}
			{onDelete && <button onClick={() => onDelete(photo.id)}>Delete</button>}
		</div>
	);
}

export default PhotoCard;
