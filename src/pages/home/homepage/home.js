import React from "react";
import SearchBox from "../search/searchbox";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import SampleCard from "../recentrecipes/sampleCard";
import data from "../recentrecipes/data";
import CookCard from "../cooksnap/cookCard";
import cardData from "../cooksnap/cookdata";
import { CreateRecipe } from "../../../components/index";

const Home = () => {
  return (
    <>
      <div
        className={`d-flex mt-3 justify-content-center align-items-center mt-5 ${styles.logo}`}
      >
        <div className={`d-flex mt-5`}>
          <img
            className="w-25 h-50 mt-1  d-none d-sm-block"
            src="https://global-web-assets.cpcdn.com/assets/logo_circle-d106f02123de882fffdd2c06593eb2fd33f0ddf20418dd75ed72225bdb0e0ff7.png "
          />

          <h1 className="my-3 mx-2 d-none d-sm-block"> SpiceCraft</h1>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center mt-sm-5">
        <SearchBox />
        <Link
          to="/categ"
          className={`my-2 border p-1 rounded d-none d-sm-block  ${styles.categ}`}
        >
          Categories
        </Link>
      </div>

      <div className="mt-3 d-flex justify-content-center  ">
        <div className={`border d-none d-sm-block  py-2 rounded ${styles.create}`}>
          <CreateRecipe />

          <Link
            to="/createRecipe"
            className={` mx-1 ${styles["main-text"]}`}
          >
            Create Recipe
          </Link>
        </div>
      </div>

      
      <SampleCard cards={data} />
      <CookCard cardsData={cardData} />
    </>
  );
};

export default Home;
