import React, { useState } from "react";
import styles from "./profile.module.css";

const Tabs = ({ activeTab, handleTabClick }) => {
  const tabs = [
    { id: "tab1", label: "Saved" },
    { id: "tab2", label: "Your Recipes" },
    { id: "tab3", label: "Cooksnap" },
    { id: "tab4", label: "Tips" },
  ];

  return (
    <>
      <div className="border w-75 bg-white">
        <div className={` ${styles["custom-tabs"]}`}>
          <div className={` w-50 d-flex justify-content-between`}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={` py-3  ${styles["tab-button"]} ${
                  activeTab === tab.id ? styles.active : ""
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
