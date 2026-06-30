import React from "react";

function PhotoCard({ photo, onDelete, onLike, onUnlike }) {
	return (
		<div className="photo-card">
			<img src={photo.url} alt="gallery" />
			{onLike && (
				<button
					className="btn-like"
					onClick={() => onLike(photo.id)}
					disabled={photo.liked}
				>
					{photo.liked ? "❤️ Liked" : "🤍 Like"}
				</button>
			)}
			{onUnlike && (
				<button className="btn-unlike" onClick={() => onUnlike(photo.id)}>
					💔 Unlike
				</button>
			)}
			{onDelete && (
				<button className="btn-delete" onClick={() => onDelete(photo.id)}>
					Delete
				</button>
			)}
		</div>
	);
}

export default PhotoCard;
