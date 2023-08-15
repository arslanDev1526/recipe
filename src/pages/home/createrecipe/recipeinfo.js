import React, { useState } from "react";
import styles from "./recipeinfo.module.css";

import { Container } from "react-bootstrap";

const RecipeInfo = () => {
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
  return (
    <>
      <Container className={`d-flex justify-content-center align-items-center ${styles["recipeinfo-container"]}`}>
        <div className="py-2 d-flex justify-content-between flex-column">
          <input
            className={` p-2 mt-2 ${styles.input}`}
            placeholder="Title:My best-ever pea soup"
            type="text"
          />

          <textarea
            className={`mt-3 p-2 ${styles.input}`}
            placeholder="Share a little more about recipe"
            cols={50}
            rows={5}
          ></textarea>
          <input
            className={`mt-2 p-2 ${styles.input}`}
            placeholder="Add recipe origin"
            type="text"
          />

          <div className={`d-flex justify-content-between align-items-center ${styles.serves}`}>
            <span className="mt-2"> Serves </span>
            <input
              className={`w-50 p-2 mt-3 ${styles.input} ${
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
            <span className={` ${styles["input-valid"]}`}>
              {" "}
              {serveValid.length} / 50
            </span>
          )}

          <div className={`d-flex mt-3  justify-content-between align-items-center ${styles.serves}`}>
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
    </>
  );
};

export default RecipeInfo;
