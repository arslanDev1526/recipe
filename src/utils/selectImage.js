import { useEffect, useState } from "react";

export const useSelectImage = () => {
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [image, setImage] = useState(null);

  const clearImage = () => {
    console.log("hello")
    setImage(null)
    setPreviewImageUrl(null)
  }

  if (image) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImageUrl(reader.result);
    };
    reader.readAsDataURL(image);
  }



  return { image, setImage, previewImageUrl, setPreviewImageUrl, clearImage, }
}

