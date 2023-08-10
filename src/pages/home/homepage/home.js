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
        className={`d-flex mt-5 justify-content-center align-items-center ${styles.logo}`}
      >
        <div className={`d-flex mt-5`}>
          <img
            className="w-25 h-50 mt-1"
            src="https://global-web-assets.cpcdn.com/assets/logo_circle-d106f02123de882fffdd2c06593eb2fd33f0ddf20418dd75ed72225bdb0e0ff7.png "
          />

          <h1 className="my-3 mx-2"> SpiceCraft</h1>
        </div>
      </div>

      <div className=" mt-5 d-flex flex-column align-items-center">
        {" "}
        <SearchBox />
        <Link
          to="/home/categ"
          className={`my-2  border p-1 rounded  ${styles.categ}`}
        >
          Categories
        </Link>
      </div>

      <div className="mt-4 d-flex justify-content-center">
        <div className={`border  py-2 rounded ${styles.create}`}>
          <CreateRecipe />

          <Link
            to="/home/createRecipe"
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
