import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import { Link } from "react-router-dom";
import supabase from "../../../src/config/client";
import ProfileTipsCard from "./profiletipscard"

const ProfileTips = () => {
  console.log(supabase);

  const [fetchError, setFetchError] = useState(null);
  const [tips, setTips] = useState(null);


  const handleDelete = (id) => { 
    setTips(prevTips => { 
      return prevTips.filter(ti => ti.id !==id )
    })
  }

  useEffect(() => {
    const fetchTips = async () => {
      const { data, error } = await supabase.from("tips").select();

      if (error) {
        setFetchError("could not find the tips");
        setTips(null);
        // console.log(error);
        console.log("Error:", error);
      }

      if (data) {
        setTips(data);
        setFetchError(null);
        console.log("Data:", data);
      }

      console.log("Fetch Tips completed");
    };

    fetchTips();
  }, []);

  return (
    <>
      <div>
        {fetchError && <p> {fetchError} </p>}
        {tips && (
          <div>
            {tips.map((tip) => (
              // <div key={tip.id}>
              //   <p>{tip.title}</p>
              //   <p>{tip.description}</p>
              // </div>

              <ProfileTipsCard key={tip.id} tip={tip} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>

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
