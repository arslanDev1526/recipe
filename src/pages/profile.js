import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import styles from "./profile.module.css";

import { Search } from "../pages/home/svgs";
import { Link } from "react-router-dom";
// import Saved from "../pages/saved"

const Profile = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <Container className="my-4 border align-items-center gap-2 d-flex flex-column">
        <div className="bg-white py-4 mt-5 w-75">
          <div className="d-flex gap-4 mx-4">
            <img
              className={` mt-3 ${styles["profile-img"]} `}
              src="https://img-global.cpcdn.com/users/ce62491fd3e07cc8/108x108cq50/avatar.webp"
            />

            <div>
              <h3> arslan younas </h3>
              <p> @arslan_react </p>
              <button className={` border-1 rounded ${styles.btn}`}>
                {" "}
                View Public Profile{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="border w-75 bg-white">
          <div className={` ${styles["custom-tabs"]}`}>
            <div className={` w-50 d-flex justify-content-between`}>
              <button
                className={` py-3  ${styles["tab-button"]} ${
                  activeTab === "tab1" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("tab1")}
              >
                Saved
              </button>
              <button
                className={` py-3 ${styles["tab-button"]} ${
                  activeTab === "tab2" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("tab2")}
              >
                Your Recipes
              </button>
              <button
                className={`py-3 ${styles["tab-button"]} ${
                  activeTab === "tab3" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("tab3")}
              >
                Cooksnap
              </button>
              <button
                className={`py-3 ${styles["tab-button"]} ${
                  activeTab === "tab4" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("tab4")}
              >
                Tips
              </button>
            </div>
          </div>
        </div>

        <div
          className={`  w-75 ${styles["tab-content"]}`}
          style={{ display: activeTab === "tab1" ? "block" : "none" }}
        >
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

        

              <Link className={`py-2 px-2 rounded  ${styles["saved-link"]}`}
               to="/profile/home/search"
              >Start new search</Link>
            </div>
          </div>
        </div>

        <div
          className="tab-content"
          style={{ display: activeTab === "tab2" ? "block" : "none" }}
        >
          <div>
            <h3 className={`w-100  py-4 ${styles["tab2-text"]}`}>
              No Recipe yet
            </h3>
          </div>
        </div>

        <div
          className="tab-content"
          style={{ display: activeTab === "tab3" ? "block" : "none" }}
        >
          <div className={`boder py-5 d-flex flex-column align-items-center`}>
            <div>
              {" "}
              <img src="https://global-web-assets.cpcdn.com/assets/empty_states/no_cooksnaps-f66c55e9ba9f02804b9b58a14dc73fe273ee54c782dd7d95406bb79613016612.svg" />{" "}
            </div>

            <h2 className={`mt-3`}>Let's start Cooksnapping!</h2>
            <p className={`w-50 py-3 text-center`}>
              {" "}
              Taking a Cooksnap enables you to keep track of what you've cooked
              and share it with our community. Why not explore our recipes to
              find something to cook?
            </p>

            {/* <button> Link for search component </button> */}

            <Link className={`py-2 px-2 rounded  ${styles["saved-link"]}`}
                 to="/profile/home/search" > Find inspiring recipes   </Link>
          </div>
        </div>

        <div
          className="tab-content"
          style={{ display: activeTab === "tab4" ? "block" : "none" }}
        >
          <div
            className={`d-flex flex-column align-items-center py-4 `}
            style={{ display: activeTab === "tab4" ? "block" : "none" }}
          >
            <div>
              <img src="https://global-web-assets.cpcdn.com/assets/empty_states/no_tips-0c5c91733369f17179a635c3fd99f23cf410e582982af1f2e9459229cd6a26c7.svg" />
            </div>
            <h2 className={` py-3 `}> No tips added yet </h2>
       
            <Link className={`py-2 px-2 rounded  ${styles["saved-link"]}`}
                 to="/profile/create/tips" > Create tips   </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
