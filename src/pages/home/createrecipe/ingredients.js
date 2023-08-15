import React from "react";
import styles from "./ingredients.module.css";
import { Container } from "react-bootstrap";
import { Hamerburger, ThreeDots } from "../../../components/index";

const Ingredients = () => {
  return (
    <>
      <Container className={`my-3 py-2 bg-white ${styles["custome-container"]}`}>
        <h2>Ingredients</h2>
        <div className="px-3 py-3 d-flex justify-content-center gap-3 flex-column align-items-center">
          {[1, 2, 3].map((index) => (
            <div key={index} className="d-flex align-items-center gap-2 w-100">
              <Hamerburger />

              <input
                className={`p-2 ${styles.input}`}
                type="text"
                placeholder="ineg"
              />

              <ThreeDots />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Ingredients;
