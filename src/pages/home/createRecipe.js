import React, { useState } from "react";
import { Dropdown, Container } from "react-bootstrap";
import styles from "./createRecipe.module.css";

import { Hamerurger } from "./svgs";
import { ThreeDots } from "./svgs";
import { Camera } from "./svgs";

const CreateRecipe = () => {
  const [inputValue, setInputValue] = useState("");
  const [serveValid, setServeValid] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isServeFocused, setIsServeFocused] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;

    if (value.length <= 50) {
      setInputValue(value);
    }
  };

  const handleServeChange = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setServeValid(value);
    }
  };

  const handleServeFocused = () => {
    setIsServeFocused(true);
  };

  const handleServeBlur = () => {
    setIsServeFocused(false);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleDeleteRecipe = () => {
    console.log("delete");
  };
  
  
  return (
    <>
      <div className="my-5">
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
      <Container className={` ${styles["custome-container"]}`}>
        <div className=" px-3 py-2 d-flex justify-content-center gap-3 flex-column align-items-center ">
          <input
            className={`w-100 p-2 ${styles.input}`}
            placeholder="Title:My best-ever pea soup"
            type="text"
          />

          <textarea
            className={`w-100 p-2 ${styles.input}`}
            placeholder="Share a little more about recipe"
            cols={50}
            rows={5}
          ></textarea>
          <input
            className={`w-100 p-2 ${styles.input}`}
            placeholder="Add recipe origin"
            type="text"
          />

          <div className="d-flex justify-content-between  w-100">
            <span> Servers </span>
            <input
              className={`w-50 p-2 ${styles.input} ${
                serveValid.length >= 50 ? "border border-danger" : ""
              }`}
              placeholder="2 people"
              type="text"
              value={serveValid}
              onChange={handleServeChange}
              maxLength={50}
              onFocus={handleServeFocused}
              onBlur={handleServeBlur}
            />
          </div>

          {isServeFocused && (
            <span className={`${styles["input-valid"]}`}>
              {" "}
              {serveValid.length} / 50
            </span>
          )}

          <div className="d-flex justify-content-between  w-100">
            <span> Cook time </span>
            <input
              className={`w-50 p-2 ${styles.input} ${
                inputValue.length >= 50 ? "border border-danger" : ""
              }`}
              placeholder="1 hr"
              type="text"
              value={inputValue}
              onChange={handleChange}
              maxLength={50}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          {isInputFocused && (
            <span className={`${styles["input-valid"]}`}>
              {" "}
              {inputValue.length} / 50
            </span>
          )}
        </div>
      </Container>

      <Container className={`my-3 py-2 ${styles["custome-container"]}`}>
        <h2>Ingredients</h2>
        <div className="px-3 py-3 d-flex justify-content-center gap-3 flex-column align-items-center">
          <div className="d-flex align-items-center gap-2 w-100">
            <Hamerurger />

            <input
              className={` w-100 p-2 ${styles.input}`}
              type="text"
              placeholder="ineg"
            />

            <ThreeDots />
          </div>

          <div className="d-flex align-items-center gap-2 w-100">
            <Hamerurger />
            <input
              className={` w-100 p-2 ${styles.input}`}
              type="text"
              placeholder="ineg"
            />

            <ThreeDots />
          </div>

          <div className="d-flex align-items-center gap-2 w-100">
            <Hamerurger />
            <input
              className={` w-100 p-2 ${styles.input}`}
              type="text"
              placeholder="ineg"
            />

            <ThreeDots />
          </div>

          <div className="d-flex align-items-center gap-2 w-100">
            <Hamerurger />
            <input
              className={` w-100 p-2 ${styles.input}`}
              type="text"
              placeholder="ineg"
            />

            <ThreeDots />
          </div>
        </div>
      </Container>

      <Container className={`my-3 py-2 ${styles["custome-container"]}`}>
        <h2>Steps</h2>
        <div className="px-3 py-3 d-flex justify-content-center gap-3 flex-column align-items-center">
          <div className="d-flex align-items-center gap-2 w-100">
            <Hamerurger />
            <textarea
              className={`w-100 ${styles["custome-textarea"]}`}
              rows={1}
              placeholder="Cover the mixture and leave to sit at room temperature for 24 - 36 hours"
              maxLength={500}
            ></textarea>

            <ThreeDots />
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

        <div className="px-3 py-3 d-flex justify-content-center gap-3 flex-column align-items-center">
          <div className="d-flex align-items-center gap-2 w-100">
            <Hamerurger />
            <textarea
              className={`w-100 ${styles["custome-textarea"]}`}
              rows={1}
              placeholder="Cover the mixture and leave to sit at room temperature for 24 - 36 hours"
              maxLength={500}
            ></textarea>

            <ThreeDots />
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

        <div className="px-3 py-3 d-flex justify-content-center gap-3 flex-column align-items-center">
          <div className="d-flex align-items-center gap-2 w-100">
            <Hamerurger />
            <textarea
              className={`w-100 ${styles["custome-textarea"]}`}
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
      </Container>
    </>
  );
};

export default CreateRecipe;
