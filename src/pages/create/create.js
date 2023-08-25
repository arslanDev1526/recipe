import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./create.module.css";
import { CreateRecipeWhite } from "../../components/index";
import { Tips } from "../../components/index";

const Create = () => {
  return (
    <>
      <Container
        className={`d-flex justify-content-center align-items-center bg-white mt-4 ${styles["create-container"]} `}
      >
        <div className="mt-5 d-flex flex-column align-items-center ">
          <div>
            <img src="https://global-web-assets.cpcdn.com/assets/empty_states/no_recipes-a5203523e141a99f30dd6aff049d55ffa46e6ec28f120732bfbbb1d7c52074fc.svg" />
          </div>
          <h5 className="text-center"> Store your cooking notes </h5>
          <p> Help our community find new ideas </p>

          <div className="  d-flex justify-content-center gap-2">
            <div className={`border py-2 px-2 rounded ${styles.create}`}>
              <CreateRecipeWhite />

              <Link
                to="/createRecipe"
                className={` mx-1 ${styles["main-text"]}`}
              >
                Recipe
              </Link>
            </div>

            <div className={` py-2 px-2 rounded ${styles["tips-parent"]}`}>
              <Tips />
              <Link className={`mx-2 ${styles.tips}`} to="/tips">
                Tips
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <h3 className={` mt-5 text-center ${styles.drafts}`}> Drafts recipes </h3>
    </>
  );
};

export default Create;
