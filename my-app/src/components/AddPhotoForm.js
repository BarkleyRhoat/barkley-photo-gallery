import { useState } from "react";

function AddPhotoForm({ onAddPhoto }) {
	const [url, setUrl] = useState("");
	const [mode, setMode] = useState("url");

	function handleFileChange(event) {
		const file = event.target.files[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onloadend = () => setUrl(reader.result);
		reader.readAsDataURL(file);
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (!url) return;

		fetch("http://localhost:3001/photos", {
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
			<button type="button" onClick={() => setMode("url")}>URL</button>
			<button type="button" onClick={() => setMode("file")}>File</button>

			{mode === "url" ? (
				<input
					type="text"
					placeholder="Enter Image URL"
					value={url}
					onChange={(event) => setUrl(event.target.value)}
				/>
			) : (
				<input type="file" accept="image/*" onChange={handleFileChange} />
			)}

			<button type="submit">Add Photo</button>
		</form>
	);
}

export default AddPhotoForm;
