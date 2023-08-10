import React from "react";
import styles from "./profile.module.css";
import { Button } from "react-bootstrap";
import { Search } from "../../components/index";

const Saved = () => {
  return (
    <>
      <div className={` ${styles["tab-content"]}`}>
        <div className={` mt-3 ${styles["tab1-content"]}`}>
          <div className="d-flex justify-content-between">
            <h5> 0 Recipes </h5>

            <div className={`d-flex gap-4`}>
              <div className={`border rounded px-2 py-1`}>
                <Search />
                <input
                  className={` ${styles["tab1-input"]} py-1 mx-3`}
                  type="text"
                  placeholder="Search Recipes"
                />
              </div>
              <button className={`rounded ${styles["tab1-btn"]} `}>
                {" "}
                Search{" "}
              </button>
            </div>
          </div>

          <div className={`d-flex flex-column align-items-center my-5`}>
            <div className="">
              <img src="https://global-web-assets.cpcdn.com/assets/empty_states/no_bookmarks-496066a48bfb2bc28a2527a78b0870d7e17b794c2bcae70026647206e568a464.svg" />
            </div>
            <h3 className={`py-2 w-50 text-center`}>
              {" "}
              You can find your bookmarked recipes here.{" "}
            </h3>
            <p className={` py-2 w-50 text-center`}>
              Bookmark recipes by clicking the bookmark symbol on any recipe
              page.
            </p>

            <Button> Start new search </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Saved;
