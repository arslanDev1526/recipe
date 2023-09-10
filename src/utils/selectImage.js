import { useEffect, useState } from "react";

export const useSelectImage = () => {
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [image, setImage] = useState(null);

  const clearImage = () => {
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


  //clear image when component unmount
  useEffect(() => {
    return clearImage()
  }, [])


  return { image, setImage, previewImageUrl, setPreviewImageUrl, clearImage, }
}

