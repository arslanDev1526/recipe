import React from "react";
import styles from "./condationalnav.module.css";
import { Dropdown } from "react-bootstrap";
import { ThreeDots } from "../../components/index";
import { DeleteIcon } from "../../components/index";
import { useTipsContext } from "../../contexts";

const CondationalNav = () => {
  const { handleSubmit, isSubmitting } = useTipsContext()
  
  const handleDeleteRecipe = () => {
    console.log("delete");
  };

  return (
    <>
      <div className={` px-3 py-2 d-flex justify-content-between border-bottom  ${styles.container}`}>
        <div  className={`d-flex gap-2 align-items-center `}>
          {" "}
          <img
            className={styles["nav-img"]}
            src="https://global-web-assets.cpcdn.com/assets/logo_circle-d106f02123de882fffdd2c06593eb2fd33f0ddf20418dd75ed72225bdb0e0ff7.png"
            alt="pic"
          />
          <h5 className="mt-2"> SpiceCraft </h5>{" "}
        </div>

        <div className={`d-flex align-items-center`}> 
          {" "}
          <button disabled={isSubmitting} onClick={handleSubmit} className={`border-0 px-4 py-1 rounded text-white  ${styles. btn} `}> 
          { isSubmitting ? "Publishing":"Publish" }
          </button>
          <Dropdown className={`${styles.dropdown}`}>
            <Dropdown.Toggle
              className={`${styles["dropdown-toggle"]}`}
              variant=""
              id="dropdown-basic"
            >
              <ThreeDots />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleDeleteRecipe()}>
                <span className="mx-1" >  <DeleteIcon/> </span> Delete 
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>{" "}
        </div>
      </div>
    </>
  );
};

export default CondationalNav;
