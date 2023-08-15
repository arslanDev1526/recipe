import React from "react";
import styles from "./steps.module.css";
import { Dropdown, Container } from "react-bootstrap";
import { Hamerburger, Camera,ThreeDots } from "../../../components/index";


const Steps = () => {
  const handleDeleteRecipe = () => {
    console.log("delete");
  };
  return (
    <>
      <div className={`py-2 mb-5 ${styles["steps-container"]}`}>
        <h2 className="mx-4">Steps</h2>

        {[1,2,3].map((index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center justify-content-between mt-3 gap-3"  
          >
            <div className={`d-flex align-items-center justify-content-sm-between gap-3 ${styles["steps-input"]}`}>
              <Hamerburger />
              <textarea
                className={` ${styles["custome-textarea"]}`}
                rows={1}
                placeholder="Cover the mixture and leave to sit at room temperature for 24 - 36 hours"
                maxLength={500}
              ></textarea>

              <Dropdown className={`${styles.dropdown}`}>
                <Dropdown.Toggle
                  className={`${styles["dropdown-toggle"]}`}
                  variant=""
                  id="dropdown-basic"
                >
                  <ThreeDots />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleDeleteRecipe()}>
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className={` ${styles["steps-div"]} `}>
              <input
                className={` opacity-0 ml-3 my-5 ${styles["steps-input"]} `}
                type="file"
                name="file"
                aria-label="Add Photo"
                accept="image/*"
              />

              <div className={`${styles["steps-icon"]}`}>
                <Camera />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Steps;
