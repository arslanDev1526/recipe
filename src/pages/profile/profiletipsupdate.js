import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styles from "../tips/tips.module.css";
import { useTipsContext } from "../../contexts";

const ProfileTipsUpdate = () => {
  const location = useLocation();
  const tip = location.state

  const {
    isSubmitting,
    isUploading,
    previewImageUrl,
    formData,
    formerror:formError,
    handleChange,
    onImageChange,
    handleSubmit,
    loadContextData,
  } = useTipsContext()

  const { title, description } = formData


  useEffect(() => {
  const { id, title, description, img_url } = tip

    loadContextData({
      id,
      title, 
      description, 
      previewImageUrl:img_url,
    })
  }, [])


  return (
    <>
      <div className="d-flex flex-column align-items-center py-4 bg-white mt-5 ">
        {formError && <h3 className="text-danger ">{formError}</h3>}
        <form
          onSubmit={handleSubmit}
          className={` d-flex flex-column align-items-center bg-white ${styles["tips-container"]} `}
        >
          <input
            value={title}
            name="title"
            onChange={handleChange}
            className={`my-2  p-2 fs-4 ${styles["tips-input"]}`}
            type="text"
            placeholder="Title:How to dice an onion"
          />

          <div className=" d-flex gap-2 align-items-center">
            <textarea
              id="fileInput"
              name="description"
              value={description}
              onChange={handleChange}
              rows={5}
              className={`p-2 fs-5 ${styles["tips-textarea"]}`}
              placeholder="To dice an onion, use a chef knife to cut the onion in half from the stem tip to the bottom root."
            />
          </div>

          <div
            className={`my-2 py-2 d-flex gap-5 flex-column align-items-center border border-primary ${styles.upload}`}
          >
            <div className={`${styles["update-img-contain"]}`}>
              <img className={`${styles["update-img"]}`} src={previewImageUrl} />
            </div>

            <div className="d-flex justify-content-center">
              <input
                onChange={onImageChange}
                className=" border w-75"
                type="file"
              />
            </div>
            <p> Demonstrate your tip </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileTipsUpdate;
