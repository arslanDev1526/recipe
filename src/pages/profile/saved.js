import React from "react";
import styles from "./profile.module.css";

import { Search } from "../../components/index";
import { Link } from "react-router-dom";

const Saved = () => {
  return (
    <>
      <div className={` ${styles["tab-content"]}`}>
        <div className={` ${styles["tab1-content"]}`}>
          <div
            className={`d-flex justify-content-between align-items-center ${styles["recipe-count"]}`}
          >
            <h6 className=""> 0 Recipes </h6>

            <div className={`d-flex gap-4`}>
              <div className={`border rounded px-2 py-1`}>
                <Search />
                <input
                  className={` ${styles["tab1-input"]} py-1 mx-3`}
                  type="text"
                  placeholder="Search Recipes"
                />
              </div>
              <button
                className={`rounded d-none d-sm-block ${styles["tab1-btn"]} `}
              >
                {" "}
                Search{" "}
              </button>
            </div>
          </div>

          <div className={`d-flex flex-column align-items-center my-5`}>
            <div className="">
              <img src="https://global-web-assets.cpcdn.com/assets/empty_states/no_bookmarks-496066a48bfb2bc28a2527a78b0870d7e17b794c2bcae70026647206e568a464.svg" />
            </div>
            <h3 className={`py-2 col-sm-8 text-center`}>
              You can find your bookmarked recipes here.
            </h3>
            <p className={`text-center col-sm-8`}>
              Bookmark recipes by clicking the bookmark symbol on any recipe
              page.
            </p>

            <Link
              to="/search"
              className={`py-2 px-2 rounded  ${styles["saved-link"]}`}
            >
              Start new search
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Saved;
