import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../../config/client";
import styles from "../tips/tips.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const ProfileTipsUpdate = () => {
  const navigate = useNavigate();
  const { profiletipsupdate } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [img_url, setImg_url] = useState("");
  const [formError, setFormError] = useState(null);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  const onImageChange = async (e) => {
    const date = Date.now();
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg_url(reader.result);
      };
      reader.readAsDataURL(file);
    }

    const { data, error } = await supabase.storage
      .from("data_tips")
      .update(`${date}.jpg`, file, {
        cacheControl: "3600",
        upsert: true,
      });
    console.log("success_img", data);
    console.log("error_img", error);
    if (data) {
      setImg_url(data.path);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!title || !description || !img_url) {
      setFormError("*Fill All Fields");
      return;
    }

    setIsLoading(true);

    const { data, error } = await supabase
      .from("tips")
      .update({ title, description, img_url })
      .eq("id", profiletipsupdate)
      .select();

    if (error) {

      console.log(error);
      toast.error("*Update  Failed !", {
        autoClose: 1000,
      });
      setFormError("*Fill All Fields");
      console.log(error, "update data error");
      // setFormerror("backend error");
    }

    if (data) {

      setIsLoading(false);
      toast.success("Success Notification!", {
        autoClose: 1000,
      });

      setFormError(null);
     

      setTimeout(() => {
        navigate("/profile");
      }, 1000);

     
    }
  };

  useEffect(() => {
    const fetchtips = async () => {
      const { data, error } = await supabase
        .from("tips")
        .select()
        .eq("id", profiletipsupdate)
        .single();
      if (error) {
        navigate("/profiletips", { replace: true });
      }
      if (data) {
        console.log(data, "update data fetch");
        setTitle(data.title);
        setDescription(data.description);

      
      }
    };

    fetchtips();
  }, [profiletipsupdate, navigate]);
  return (
    <>
      <div className="d-flex flex-column align-items-center py-4 bg-white mt-5 ">
        {formError && <h3 className="text-danger ">{formError}</h3>}
        <form
          onSubmit={handleUpdate}
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
            className={`my-2 py-2 d-flex justify-content-between flex-column align-items-center ${styles.upload}`}
          >
            <div className={`${styles["update-img-contain"]}`}>
             
              <img className={`${styles["update-img"]}`} src={img_url} />
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

          <button> {isLoading ? <> Updating</> : <> Update </>}</button>
        
      </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProfileTipsUpdate;
