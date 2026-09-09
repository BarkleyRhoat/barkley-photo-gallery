import { useState } from "react";
import PhotoCard from "./PhotoCard";
import { Photo, DeletePhotoHandler, LikePhotoHandler, UnlikePhotoHandler } from "../types";

interface CarouselProps {
  photos: Photo[];
  onDelete?: DeletePhotoHandler;
  onLike?: LikePhotoHandler;
  onUnlike?: UnlikePhotoHandler;
}

function Carousel({ photos, onDelete, onLike, onUnlike }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (photos.length === 0) return <p>No photos yet.</p>;

  function handlePrev(): void {
    setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
  }

  function handleNext(): void {
    setCurrentIndex(currentIndex === photos.length - 1 ? 0 : currentIndex + 1);
  }

  function handleDelete(id: string): void {
    handlePrev();
    onDelete?.(id);
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
