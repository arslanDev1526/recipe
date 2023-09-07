import React, { useState } from "react";
import styles from "./tips.module.css";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpLoadedImg from "./uploadedimg";

const Tips = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img_url, setImg_url] = useState("");
  const [formerror, setFormerror] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  const handleDeleteAll = () => { 
      
    setTitle("")
    setDescription("")
    setImg_url("")
    // setFormerror(null)
    setPreviewImage(null)
    setIsLoading(false)




  }

  const handleClick = (event) => {
    const { target = {} } = event || {};
    target.value = "";
  };

  const onImageChange = async (e) => {
    const date = Date.now();

    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setImg_url(reader.result);
      };
      reader.readAsDataURL(file);
    }

    const { data, error } = await supabase.storage
      .from("data_tips")
      .upload(`public/${date}.jpg`, file, {
        cacheControl: "3600",
        upsert: false,
      });
    console.log("success_img", data);
    console.log("error_img", error);
    if (data) {
      setImg_url(data.path);
    }
  };

  const handleImgDelete = () => {
    setPreviewImage(null);
    setFormerror(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !img_url) {
      setFormerror(" *Fill All Fields");

      return;
    }
    setIsLoading(true);

    const { data, error } = await supabase
      .from("tips")
      .insert([{ title, description, img_url }])
      .select();

    if (error) {
      console.log(error);
      toast.error("*Failed Notification!", {
        autoClose: 1000,
      });
      setFormerror("Fill All Fields");
    }

    if (data) {
      setIsLoading(false);
      toast.success("Success Notification!", {
        autoClose: 1000,
      });
      console.log(data, "postData");
      setFormerror(null);

      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    }
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
            value={title}
            onChange={onTitleChange}
            className={`my-2  p-2 fs-4 ${styles["tips-input"]}`}
            type="text"
            placeholder="Title:How to dice an onion"
          />

          <div className=" d-flex gap-2 align-items-center">
            <textarea
              id="fileInput"
              value={description}
              onChange={onDescriptionChange}
              rows={5}
              className={`p-2 fs-5 ${styles["tips-textarea"]}`}
              placeholder="To dice an onion, use a chef knife to cut the onion in half from the stem tip to the bottom root."
            />
          </div>
         

          <div
            className={`my-2 d-flex justify-content-between flex-column align-items-center border  ${styles.upload}`}
          >
            {!previewImage && (
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

            {previewImage && (
              <UpLoadedImg img_url={previewImage} onDelete={handleImgDelete} />
            )}

            <div className=" d-flex justify-content-center">
              {" "}
              <input
                onClick={handleClick}
                onChange={onImageChange}
                className=" border w-75"
                type="file"
              />{" "}
            </div>

            <p className=""> Demonstrate your tip </p>
          </div>
          <button> {isLoading ? <> creating</> : <>Submit</>}</button>
          <button onClick={handleDeleteAll} > Delete all  </button>
        </form>

      
      </div>
      <ToastContainer />
    </>
  );
};

export default Tips;
