import { useEffect, useState } from "react";

export const useSelectImage = () => {
    const [previewImageUrl, setPreviewImageUrl] = useState(null);
    const [image, setPreviewImage] = useState(null);
    
    const clearImage = () => {
        setPreviewImage(null)
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
        return clearImage
    }, [])


    return { image, previewImageUrl, setPreviewImage, clearImage, }
  }

