import React, { useState } from "react";
import styles from "./tips.module.css";
import { ThreeDots } from "../../components/index";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tips = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img_url, setImg_url] = useState("");
  const [formerror, setFormerror] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

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
    console.log("success", data);
    console.log("error", error);
    if (data) {
      setImg_url(data.path);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    if (!title || !description || !img_url) {
      setFormerror("please fill all fields");
     
      return;
    }

    const { data, error } = await supabase
      .from("tips")
      .insert([{ title, description, img_url }])
      
      .select();
    


    if (error) {
      console.log(error);
      setFormerror("error detcted");
    }

    if (data) {
      toast.success("Success Notification !");
      console.log(data, "postData");
      setFormerror(null);
      navigate("/profiletips");
    }
  };




  const notify = () => {
 
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center py-4 bg-white ">
        <form
          onSubmit={handleSubmit}
          className={` d-flex flex-column align-items-center bg-white ${styles["tips-container"]} `}
        >
          <button onClick={notify}> Notify </button>
          <input
            value={title}
            onChange={onTitleChange}
            className={`my-2  py-2 fs-4 ${styles["tips-input"]}`}
            type="text"
            placeholder="Title:How to dice an onion"
          />

          <div className=" d-flex gap-2 align-items-center">
            <textarea
              value={description}
              onChange={onDescriptionChange}
              rows={2}
              className={`  py-2 fs-5 ${styles["tips-textarea"]}`}
              placeholder="To dice an onion, use a chef knife to cut the onion in half from the stem tip to the bottom root."
            />
            <button> Submit </button>
            <ThreeDots />
          </div>
          {formerror && <p>{formerror}</p>}

          <div
            className={`my-2 d-flex justify-content-center flex-column align-items-center  ${styles.upload}`}
          >
            <div>
              <img src="https://global-web-assets.cpcdn.com/assets/camera_plus-083c8cd5bd9218f7dd96846708edbf1b2a5aa80e7eed3d5917c2a96390214931.png" />
            </div>

            {previewImage && (
              <img className="w-50" src={previewImage} alt="Preview" />
            )}
            <h5 className="text-center mt-2"> Add a photo </h5>
            <input onChange={onImageChange} className="opacity-0" type="file" />
            <p className=""> Demonstrate your tip </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Tips;
