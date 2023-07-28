import React from "react";
import { Container,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./create.module.css";
// import  CreateRecipe  from "./home/createRecipe";
// import CreateRecipe from "../pages/home/createRecipe";

const Create = () => {
  return (
    <>
      <Container
        className={`d-flex justify-content-center align-items-center w-50 bg-white ${styles["create-container"]} `}
      >
        <div className="mt-5  d-flex flex-column align-items-center ">
          <div>
            <img src="https://global-web-assets.cpcdn.com/assets/empty_states/no_recipes-a5203523e141a99f30dd6aff049d55ffa46e6ec28f120732bfbbb1d7c52074fc.svg" />
          </div>
          <h5 className="text-center"> Store your cooking notes </h5>
          <p> Help our community find new ideas </p>

          <div> 

          {/* <Link to="/pages/home/createRecipe" className={` mt-5 ${styles["main-text"]}`}>
            Create Recipe
          </Link> */}
          <Button>CLICK</Button>


          </div>
        </div>
      </Container>
    </>
  );
};

export default Create;
