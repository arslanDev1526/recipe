import React from "react";
import styles from "./profile.module.css";

export const ProfileDetails = () => {
  return (
    <>
      <div className={`bg-white py-4 rounded ${styles["profile-container"]}`}>
        <div className="d-flex gap-2 mx-3">
          <img
            className={`${styles["profile-img"]}`}
            src="https://img-global.cpcdn.com/users/ce62491fd3e07cc8/108x108cq50/avatar.webp"
          />

          <div className="">
            <h3 className="m-0"> Arslan Younas </h3> 
            <span> @arslan_react </span>
            <button className={` d-none d-sm-block border rounded mt-sm-2 ${styles.btn}`}>
              View Public Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
