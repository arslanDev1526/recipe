import React from "react";
import styles from "./profile.module.css";
import Saved from "./saved";
import Recipe from "./recipe";
import CookSnap from "./cooksnap";
import ProfileTips from "./profiletips";

const TabContent = ({ activeTab }) => {
  const tabContent = {
    tab1: (
      <div className={` mt-3  ${styles["tab1-content"]}`}>
        <Saved />
      </div>
    ),
    tab2: (
      <div>
        <Recipe />
      </div>
    ),

    tab3: (
      <div className={`boder py-5 d-flex flex-column align-items-center`}>
        <CookSnap />
      </div>
    ),
    tab4: (
      <div
        className={`d-flex flex-column align-items-center py-4 `}
        style={{ display: activeTab === "tab4" ? "block" : "none" }}
      >
        <ProfileTips />  
      </div>
    ),
  };

  return tabContent[activeTab] || null;
};

export default TabContent;
