import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import { Link } from "react-router-dom";
import supabase from "../../../src/config/client";
import ProfileTipsCard from "./profiletipscard";
import Loader from "../../components/loader";

const ProfileTips = () => {
  // console.log(supabase);

  const [fetchError, setFetchError] = useState(null);
  const [tips, setTips] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const handleDelete = (id) => {
    setTips((prevTips) => {
      return prevTips.filter((ti) => ti.id !== id);
    });
  };

  useEffect(() => {
    const fetchTips = async () => {
      setIsLoading(true);
      const { data, error } = await supabase.from("tips").select();
      setIsLoading(false);
      if (error) {
        setFetchError("could not find the tips");
        setTips(null);
      }

      if (data) {
      
        setTips(data);
        setFetchError(null);
    
      }
    };

    fetchTips();
  }, []);

  return (
    <>
      <div className="mt-5 d-flex justify-content-center align-items-center border border-primary"> {isloading ? <Loader/>:    <div>
        {fetchError && <p> {fetchError} </p>}
        {tips && (
          <div>
            {tips.map((tip) => (
              <ProfileTipsCard key={tip.id} tip={tip} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>} </div>

    

      <div>
        <div className={`d-flex flex-column align-items-center py-4 `}>
          <div>
            <img src="https://global-web-assets.cpcdn.com/assets/empty_states/no_tips-0c5c91733369f17179a635c3fd99f23cf410e582982af1f2e9459229cd6a26c7.svg" />
          </div>
          <h2 className={`py-3`}> No tips added yet </h2>

          <Link
            className={`py-2 px-2 rounded  ${styles["saved-link"]}`}
            to="/tips"
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
