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
      <Container className={`my-3 py-2 ${styles["steps-container"]}`}>
        <h2>Steps</h2>

        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="px-3 py-3 d-flex justify-content-center gap-3 flex-column align-items-center"
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
      </Container>
    </>
  );
};

export default Steps;
