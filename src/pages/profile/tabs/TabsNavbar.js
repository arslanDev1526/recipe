import React from "react";
import styles from "./tabsNavbar.module.css";
import { tabs } from "./tabcontent";


export const TabsNavbar = ({ activeTab, handleTabClick, children }) => {
  return (
    <>
      <div className={`bg-white ${styles["tabs-container"]}`}>
        <div className={` ${styles["custom-tabs"]}`}>
          <div className={`mx-3  mx-sm-3 col-sm-7 d-flex justify-content-between`}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={` py-3  ${styles["tab-button"]} ${activeTab === tab ? styles.active : ""
                  }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      {children}
    </>
  );
};
