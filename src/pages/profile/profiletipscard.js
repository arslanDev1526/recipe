import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../../config/client";
import styles from "./profiletipscard.module.css";
import { DeleteIcon } from "../../components/index";
import { EditIcon } from "../../components/index";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const getImgUrl =  async ({ bucketName, path }) => {
//   const { data } = await supabase.storage
//     .from(bucketName)
//     .getPublicUrl(path);

//   const { url } = data;
//   return url;
// };

const ProfileTipsCard = ({ tip, onDelete }) => {
  // const [url, setUrl] = useState(null);
  // const url = getImgUrl({
  //   bucketName: "tips",
  //   path: tip.img_url,
  // });

  // console.log("getImgUrl", url)

  useEffect(() => {


    // getImgUrl({
    //   bucketName: "tips",
    //   path: tip.img_url,
    // });
  }, []);

  const handleDelete = async () => {
    const deletingToastId = toast.info("Deleting...", {
      autoClose: false,
      className: "deletion-toast",
    });

    const { data, error } = await supabase
      .from("tips")
      .delete()
      .eq("id", tip.id)
      .select();

    toast.dismiss(deletingToastId);
    if (error) {
      console.log(error);

      toast.error("Error deleting tip");
    }

    if (data) {
      console.log(data, "listing data");
      toast.success("Deleted Successfully!", { autoClose: 1000 });
      onDelete(tip.id);
    }
  };
  return (
    <>
      <div className={`${styles.container} `}>
        <h2 className="text-center">{tip.title}</h2>
        <p>{tip.description}</p>

        <div className={`${styles["img-container"]} `}>
          <img className={`${styles.img} `} src={tip.img_url} alt="user" />
        </div>

        <div className=" mt-3 ">
          <Link to={"/tips/" + tip.id} state={tip}>
            <button className={` mx-2 ${styles.btn}`}>
              {" "}
              <EditIcon />{" "}
            </button>
          </Link>

          <button className={`${styles.btn}`} onClick={handleDelete}>
            {" "}
            <DeleteIcon />{" "}
          </button>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default ProfileTipsCard;
