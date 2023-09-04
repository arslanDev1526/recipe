import React, { useState } from "react";
import styles from "./tips.module.css";
import { ThreeDots } from "../../components/index";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/client";

const Tips = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const[img_url, setImg_url] = useState("");
  const [formerror, setFormerror] = useState(null);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onImgChange = (e) => setImg_url(e.target.value);
  // const onFormErrorChanged = (e) => setFormerror(e.target.value);


  const handleSubmit = async(e) => { 
    e.preventDefault();

    if(!title || !description ){ 
      setFormerror("please fill all fields")
      return
    }

    const {data, error} = await supabase
    .from("tips")
    .insert([{ title, description}])
    .select()

    if(error){ 
      console.log(error)
      setFormerror("please fill all fields")
    }

    if(data){ 
      console.log(data, "data")
      setFormerror(null)
      navigate('/profiletips')
    }

    console.log("i am clicked")
  }
  // console.log(title, description, "i am here");

  return (
    <>
      <div className="d-flex flex-column align-items-center py-4 bg-white ">
        <form
        onSubmit={handleSubmit}
          className={` d-flex flex-column align-items-center bg-white ${styles["tips-container"]} `}
        >
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
              placeholder="TO dice an onion, use a chef knife to cut the onion in half from the stem tip to the bottom root."
            />

            <ThreeDots />
          </div>
          {formerror && <p>{formerror}</p>}

          <button> Submit </button>
          <div
            className={`my-2 d-flex justify-content-center flex-column align-items-center  ${styles.upload}`}
          >
            <div>
              <img src="https://global-web-assets.cpcdn.com/assets/camera_plus-083c8cd5bd9218f7dd96846708edbf1b2a5aa80e7eed3d5917c2a96390214931.png" />
            </div>

            <h5 className="text-center mt-2"> Add a photo </h5>
            <input value={img_url} onChange={onImgChange} className="opacity-0" type="file" />
            <p className=""> Demonstrate your tip </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Tips;
