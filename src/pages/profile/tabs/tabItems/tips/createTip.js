import React from "react";
import styles from "./tips.module.css";
import UpLoadedImg from "./uploadedimg";
import { useTipsContext } from "../../../../../contexts";


export const CreateTip = () => {

  const {
    isSubmitting,
    isUploading,
    previewImageUrl,
    formData,
    formerror,
    handleChange,
    onImageChange,
    handleSubmit,
  } = useTipsContext()

  const { title, description } = formData

  const handleDeleteAll = () => {
  };

  const handleClick = (event) => {
    // const { target = {} } = event || {};
    // target.value = "";
  };


  const handleImgDelete = () => {
    // setPreviewImage(null);
    // setFormerror(null);
  };


  return (
    <>
      <div className="d-flex flex-column align-items-center py-4 bg-white ">
        {formerror && <h3 className="text-danger ">{formerror}</h3>}
        <form
          onSubmit={handleSubmit}
          className={` d-flex flex-column align-items-center bg-white ${styles["tips-container"]} `}
        >
          <input
          name="title"
            value={title}
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
            className={`my-2 d-flex gap-4  flex-column align-items-center  ${styles.upload}`}
          >
            {!previewImageUrl && (
              <div
                className={`d-flex justify-content-center flex-column  ${styles["upload-img"]}`}
              >
                <div>
                  {" "}
                  <img src="https://global-web-assets.cpcdn.com/assets/camera_plus-083c8cd5bd9218f7dd96846708edbf1b2a5aa80e7eed3d5917c2a96390214931.png" />{" "}
                </div>

                <h5 className="text-center mt-2"> Add a photo </h5>
              </div>
            )}

            {previewImageUrl && (
              <UpLoadedImg img_url={previewImageUrl} onDelete={handleImgDelete} />
            )}

            <div className=" d-flex justify-content-center">
              {" "}
              <input
                onClick={handleClick}
                onChange={onImageChange}
                className="border w-75"
                type="file"
              />{" "}
            </div>

            <p className=""> Demonstrate your tip </p>
          </div>
        </form>
      </div>
    </>
  );
};
