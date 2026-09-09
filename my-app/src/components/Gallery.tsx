import { useState, useEffect } from "react";
import AddPhotoForm from "./AddPhotoForm";
import Carousel from "./Carousel";
import { API_URL } from "../api";
import { Photo } from "../types";

function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  function handleAddPhoto(newPhoto: Photo): void {
    setPhotos((prev) => [...prev, newPhoto]);
    setShowForm(false);
  }

  function handleDeletePhoto(id: string): void {
    fetch(`${API_URL}/photos/${id}`, {
      method: "DELETE",
    }).then(() => {
      setPhotos((prev) => prev.filter((photo) => photo.id !== id));
    });
  }

  function handleLikePhoto(id: string): void {
    fetch(`${API_URL}/photos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ liked: true }),
    })
      .then((response) => response.json())
      .then((updatedPhoto: Photo) => {
        setPhotos((prev) =>
          prev.map((photo) => (photo.id === id ? updatedPhoto : photo))
        );
      });
  }

  useEffect(() => {
    fetch(`${API_URL}/photos`)
      .then((response) => response.json())
      .then((data: Photo[]) => {
        setPhotos(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <h1>Gallery</h1>
      <Carousel
        photos={photos}
        onDelete={handleDeletePhoto}
        onLike={handleLikePhoto}
      />
      <button
        className="btn-primary"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "Cancel" : "Add Photo"}
      </button>
      {showForm && <AddPhotoForm onAddPhoto={handleAddPhoto} />}
    </>
  );
}

export default Gallery;
