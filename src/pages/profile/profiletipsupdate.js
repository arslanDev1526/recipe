import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeDots } from "../../components/index";
import supabase from "../../config/client";
import styles from "../tips/tips.module.css";

const ProfileTipsUpdate = () => {
  const navigate = useNavigate();
  const { profiletipsupdate } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formerror, setFormerror] = useState(null);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      setFormerror("Please fill all fields");
      return;
    }

    const { data, error } = await supabase
      .from("tips")
      .update({ title, description })
      .eq("id", profiletipsupdate)
      .select();

    if (error) {
      console.log(error);
      setFormerror("Please fill all fields");
    }

    if (data) {
    //   console.log(data, "updated data");
      setFormerror(null);
      navigate("/profiletips");
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
        setTitle(data.title);
        setDescription(data.description);
        // console.log(data, "data is here ");
      }
    };

    fetchtips();
  }, [profiletipsupdate, navigate]);
  return (
    <>
      {/* <div className="mt-5 py-5"> update - {profiletipsupdate} </div> */}

      <form
        onSubmit={handleSubmit}
        className={` mt-5 d-flex flex-column align-items-center bg-white ${styles["tips-container"]} `}
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
        {/* {formerror && <p>{formerror}</p>} */}

        <button> Edit </button>
        <div
          className={`my-2 d-flex justify-content-center flex-column align-items-center  ${styles.upload}`}
        >
          <div>
            <img src="https://global-web-assets.cpcdn.com/assets/camera_plus-083c8cd5bd9218f7dd96846708edbf1b2a5aa80e7eed3d5917c2a96390214931.png" />
          </div>

          <h5 className="text-center mt-2"> Add a photo </h5>
          <input className="opacity-0" type="file" />
          <p className=""> Demonstrate your tip </p>
        </div>
      </form>
    </>
  );
};

export default ProfileTipsUpdate;
