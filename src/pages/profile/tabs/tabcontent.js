import React from "react";
import styles from "./tabcontent.module.css";
import { CookSnap, Saved, Recipe, Tips } from "./tabItems";


const tabContent = {
  "Saved": ({ activeTab }) => (
    <div className={` mt-3  ${styles["tab1-content"]}`}>
      <Saved />
    </div>
  ),
  "Your Recipes": ({ activeTab }) => (
    <div>
      <Recipe />
    </div>
  ),
  "Cooksnap": ({ activeTab }) => (
    <div className={`boder py-5 d-flex flex-column align-items-center`}>
      <CookSnap />
    </div>
  ),
  "Tips":  ({ activeTab }) =>(
    <div
      className={`d-flex flex-column align-items-center py-4 `}
      style={{ display: activeTab === "Tips" ? "block" : "none" }}
    >
      <Tips />  
    </div>
  ),
};

export const tabs = Object.keys(tabContent)

export const TabContent = ({ activeTab }) => {
  const Tab =  tabContent[activeTab] || <p>Selected tab content is not available</p>;
  return <Tab activeTab={activeTab} />
};
