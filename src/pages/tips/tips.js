import React, { useState } from "react";
import styles from "./tips.module.css";
import { ThreeDots } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { tipsAdded } from "../../features/tips/tipsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import CondationalNav from '../header/condationalnav'

const Tips = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const dispatch = useDispatch();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSaveTipClicked = () => {
    if (title && description && img) {
      dispatch(
        tipsAdded({
          id: nanoid(),
          title,
          description,
          img
        })
      );

      setTitle("");
      setDescription("");
      setImg("")


      showSuccess();
    } else {
      showError();
    }
  };

  const showSuccess = () => {
    toast.success("Tip has been created", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const showError = () => {
    toast.error("Fill the Inputs", {
      position: "top-right",
      autoClose: 1000,
    });
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center py-4 bg-white ">
        <div
          className={` d-flex flex-column align-items-center bg-white ${styles["tips-container"]} `}
        >
          <input
            className={`my-2 py-2 fs-4 ${styles["tips-input"]}`}
            type="text"
            placeholder="Title:How to dice an onion"
            onChange={onTitleChange}
          />

          <div className=" d-flex gap-2 align-items-center">
            <textarea
              rows={2}
              className={`py-2 fs-5 ${styles["tips-textarea"]}`}
              placeholder="To dice an onion, use a chef knife to cut the onion in half from the stem tip to the bottom root."
              onChange={onDescriptionChange}
            />

            <ThreeDots />
          </div>

          <div
            className={`my-2 d-flex justify-content-center flex-column align-items-center  ${styles.upload}`}
          >
            <div>
              <img src="https://global-web-assets.cpcdn.com/assets/camera_plus-083c8cd5bd9218f7dd96846708edbf1b2a5aa80e7eed3d5917c2a96390214931.png" />
            </div>

            <h5 className="text-center mt-2"> Add a photo </h5>
            <input onChange={onImageChange} className="opacity-0" type="file" />
            <p className=""> Demonstrate your tip </p>
          </div>
        </div>
        <button type="button" onClick={onSaveTipClicked}>
          Tip saved
        </button>
        <ToastContainer />
      </div>
    </>
  );
};

export default Tips;
