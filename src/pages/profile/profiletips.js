import React from "react";
import styles from "./profile.module.css";

import { Link } from "react-router-dom";

const ProfileTips = () => {
  return (
    <>
      <div>
        <div className={`d-flex flex-column align-items-center py-4 `}>
          <div>
            <img src="https://global-web-assets.cpcdn.com/assets/empty_states/no_tips-0c5c91733369f17179a635c3fd99f23cf410e582982af1f2e9459229cd6a26c7.svg" />
          </div>
          <h2 className={` py-3 `}> No tips added yet </h2>

          <Link
            className={`py-2 px-2 rounded  ${styles["saved-link"]}`}
            to="/profile/create/tips"
          >
            {" "}
            Create tips{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileTips;
