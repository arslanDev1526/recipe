import React from "react";
import styles from "./tips.module.css";
import { ThreeDots } from "./home/svgs";

const Tips = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="border w-50 d-flex flex-column align-items-center bg-white my-4">
          <input
            className={`my-3 mt-5 py-2 fs-4 ${styles["tips-input"]}`}
            type="text"
            placeholder="Title:How to dice an onion"
          />

          <div className=" d-flex gap-2">
            <textarea
              rows={2}
              className={`  py-2 fs-5 ${styles["tips-textarea"]}`}
              placeholder="TO dice an onion, use a chef knife to cut the onion in half from the stem tip to the bottom root."
            />

            <ThreeDots />
          </div>

          <div
            className={`my-2 d-flex justify-content-center align-items-center ${styles.upload}`}
          >
            <div>
              <img src="https://global-web-assets.cpcdn.com/assets/camera_plus-083c8cd5bd9218f7dd96846708edbf1b2a5aa80e7eed3d5917c2a96390214931.png" />

              <h5 className="text-center"> Add a photo </h5>
              {/* <input className="opacity-0" type="file"/> */}
              <p> Demonstrate your tip </p>
            </div>
          </div>
          <h1 className="text-start w-100 px-4"> +Steps </h1>
        </div>


      </div>
    </>
  );
};

export default Tips;
