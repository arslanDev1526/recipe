import React from "react";
import styles from "./createRecipe.module.css";

const RecipePhoto = () => {
  return (
    <>
      <div className="">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div>
            <img
              className={` mt-5 ${styles["main-camera"]}  `}
              src="https://global-web-assets.cpcdn.com/assets/camera-f90eec676af2f051ccca0255d3874273a419172412e3a6d2884f963f6ec5a2c3.png"
              alt="camImg"
            />
          </div>
          <h3 className="mt-4">Upload recipe photo</h3>
          <p>show others to your dish</p>
        </div>
      </div>
    </>
  );
};

export default RecipePhoto;
