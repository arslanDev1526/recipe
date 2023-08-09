import React from "react";
import SearchBox from "../home/search/searchbox";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./search.module.css";

const Search = () => {
  return (
    <>
      <Container>
        <div
          className={`d-flex mt-5 justify-content-center align-items-center ${styles.logo}`}
        >
          <div className={`d-flex mt-5`}>
            <img
              className="w-25 h-50 mt-1"
              src="https://global-web-assets.cpcdn.com/assets/logo_circle-d106f02123de882fffdd2c06593eb2fd33f0ddf20418dd75ed72225bdb0e0ff7.png "
            />

            <h1 className="my-3 mx-2"> SpiceCraft</h1>
          </div>
        </div>

        <div className="mt-5 d-flex flex-column align-items-center">
          {" "}
          <SearchBox />
          <Link
            to="/home/categ"
            className={`my-2 border p-1 rounded  ${styles.categ}`}
          >
            Categories
          </Link>
        </div>

        <div className="d-flex justify-content-center">
          <div className=" mt-5 w-50">
            <img
              className={` ${styles["search-img"]}`}
              src="https://global-web-assets.cpcdn.com/assets/empty_states/no_recipes-a5203523e141a99f30dd6aff049d55ffa46e6ec28f120732bfbbb1d7c52074fc.svg"
            />

            <h2 className="text-center"> Chicken, Spinach</h2>
            <p className="text-center">
              {" "}
              Did you know you can search with multiple ingredients?
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Search;
