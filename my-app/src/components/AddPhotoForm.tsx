import { useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form"
import { API_URL } from "../api";
import { compressImage } from "../compressImage";
import { Photo } from "../types";

interface AddPhotoFormProps {
  onAddPhoto: (photo: Photo) => void;
}

type FormData = {
  mode: "url" | "file";
  url: string;
}

function AddPhotoForm({ onAddPhoto }: AddPhotoFormProps) {
  const [processing, setProcessing] = useState<boolean>(false);
  const [fileError, setFileError] = useState("");

  const {
    register, 
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      mode: "url",
      url: "",
    },
  });

  const mode = watch("mode");

  function handleFileChange(event: ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0];
    if (!file) return;
    setFileError("");
    setProcessing(true);
    compressImage(file)
      .then((dataUrl) => setValue("url", dataUrl))
      .catch(() => setFileError("Sorry, that image couldn't be processed."))
      .finally(() => setProcessing(false));
  }

  function onSubmit(data: FormData): void {
    fetch(`${API_URL}/photos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: data.url, liked: false }),
    })
      .then((response) => response.json())
      .then((newPhoto: Photo) => {
        onAddPhoto(newPhoto);
        setValue("url", "");
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button
        type="button"
        className={`btn-toggle ${mode === "url" ? "active" : ""}`}
        onClick={() => setValue("mode", "url")}
      >
        URL
      </button>
      <button
        type="button"
        className={`btn-toggle ${mode === "file" ? "active" : ""}`}
        onClick={() => setValue("mode", "file")}
      >
        File
      </button>

      {mode === "url" ? (
        <input
          key="url-input"
          type="text"
          placeholder="Enter Image URL"
          {...register("url", {
            required: "An image URL is required",
            pattern: {
              value: /^https?:\/\/.+/,
              message: "Please enter a valid URL starting with http:// or https://",
            },
          })}
        />
      ) : (
        <input
          key="file-input"
          type="file"
          accept="image/jpeg,image/png,image/gif,image/webp"
          onChange={handleFileChange}
        />
      )}

      {errors.url && <p className="upload-error">{errors.url.message}</p>}
      {fileError && <p className="upload-error">{fileError}</p>}
      {processing && <p className="upload-status">Processing image…</p>}

      <button
        type="submit"
        className="btn-primary"
        disabled={processing || !watch("url")}
      >
        Add Photo
      </button>
    </form>
  );
}

export default AddPhotoForm;
