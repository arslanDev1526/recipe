import React from "react";
import styles from "./tips.module.css";
import Loader from "../../../../../components/loader";
import { Link } from "react-router-dom";
import { TipCard } from "./tipCard";
import { useGetTips } from "../../../utils";


export const Tips = () => {
  const { tips, setTips, isLoading, fetchError } = useGetTips()

  const handleDelete = (id) => {
    setTips((prevTips) => {
      return prevTips.filter((ti) => ti.id !== id);
    });
  };



  if (isLoading) return <Loader />;
  if (tips && tips.length > 0) {
    return (
      <>
        <div>
          {tips.map((tip) => (
            <TipCard key={tip.id} tip={tip} onDelete={handleDelete} />
          ))}
        </div>
        <Link
          className={`py-2 px-2 rounded  ${styles["saved-link"]}`}
          to="tips/create"
        >
          Create tips
        </Link>
      </>
    )
  }

  return (
    <>
      <div className=" d-flex justify-content-center flex-column align-items-center">
        <div>
          <div
            className={`d-flex flex-column justify-content-center align-items-center ${styles["no-tip-section"]}`}
          >
            <div>
              <img src="https://global-web-assets.cpcdn.com/assets/empty_states/no_tips-0c5c91733369f17179a635c3fd99f23cf410e582982af1f2e9459229cd6a26c7.svg" />
            </div>
            <h2 className={`py-3`}> No tips added yet  yes </h2>
          </div>
        </div>
        <Link
          className={`py-2 px-2 rounded  ${styles["saved-link"]}`}
          to="tips/create"
        >
          Create tips
        </Link>
      </div>
    </>
  );
};
