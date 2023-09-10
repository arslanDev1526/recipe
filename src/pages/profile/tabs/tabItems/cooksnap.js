import React from "react";
import styles from "./cooksnap.module.css";
import { Link } from "react-router-dom";

export const CookSnap = () => {
  return (
    <>
      <div>
        <div className={`boder d-flex flex-column align-items-center`}>
          <div>
            {" "}
            <img src="https://global-web-assets.cpcdn.com/assets/empty_states/no_cooksnaps-f66c55e9ba9f02804b9b58a14dc73fe273ee54c782dd7d95406bb79613016612.svg" />{" "}
          </div>

          <h2 className={`mt-3`}>Let's start Cooksnapping!</h2>
          <p className={`py-3 col-sm-8 col-lg-6 text-center`}>
            {" "}
            Taking a Cooksnap enables you to keep track of what you've cooked
            and share it with our community. Why not explore our recipes to find
            something to cook?
          </p>

          <Link
            className={`py-2 px-2 rounded  ${styles["saved-link"]}`}
            to="/home"
          >
          
            Find inspiring recipes
          </Link>
        </div>
      </div>
    </>
  );
};
