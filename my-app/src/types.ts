export interface Photo {
  id: string;
  url: string;
  liked: boolean;
  title?: string;
}

export type DeletePhotoHandler = (id: string) => void;
export type LikePhotoHandler = (id: string) => void;
export type UnlikePhotoHandler = (id: string) => void;
