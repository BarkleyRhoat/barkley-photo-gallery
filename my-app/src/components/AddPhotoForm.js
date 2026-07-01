import { useState } from "react";
import { API_URL } from "../api";
import { compressImage } from "../compressImage";

function AddPhotoForm({ onAddPhoto }) {
	const [url, setUrl] = useState("");
	const [mode, setMode] = useState("url");
	const [processing, setProcessing] = useState(false);
	const [error, setError] = useState("");

	function handleFileChange(event) {
		const file = event.target.files[0];
		if (!file) return;
		setError("");
		setProcessing(true);
		compressImage(file)
			.then((dataUrl) => setUrl(dataUrl))
			.catch(() => setError("Sorry, that image couldn't be processed."))
			.finally(() => setProcessing(false));
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (!url) return;

		fetch(`${API_URL}/photos`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ url, liked: false }),
		})
			.then((response) => response.json())
			.then((newPhoto) => {
				onAddPhoto(newPhoto);
				setUrl("");
			});
	}

	return (
		<form onSubmit={handleSubmit}>
			<button
				type="button"
				className={`btn-toggle ${mode === "url" ? "active" : ""}`}
				onClick={() => setMode("url")}
			>
				URL
			</button>
			<button
				type="button"
				className={`btn-toggle ${mode === "file" ? "active" : ""}`}
				onClick={() => setMode("file")}
			>
				File
			</button>

			{mode === "url" ? (
				<input
					key="url-input"
					type="text"
					placeholder="Enter Image URL"
					value={url}
					onChange={(event) => setUrl(event.target.value)}
				/>
			) : (
				<input
					key="file-input"
					type="file"
					accept="image/jpeg,image/png,image/gif,image/webp"
					onChange={handleFileChange}
				/>
			)}

			{processing && <p className="upload-status">Processing image…</p>}
			{error && <p className="upload-error">{error}</p>}

			<button type="submit" className="btn-primary" disabled={processing}>
				Add Photo
			</button>
		</form>
	);
}

export default AddPhotoForm;
