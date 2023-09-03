import React from "react";
import styles from "./profile.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const ProfileTips = () => {
  const tips = useSelector((state) => state.tips);

  const renderTips = tips.map((tip) => (
   



    <Card style={{ width: '28rem' }}>
   
    <Card.Body>
      <Card.Title>{tip.title}</Card.Title>
      <Card.Text>
      {tip.description}
      </Card.Text>
  
    </Card.Body>

    <Card.Img src={tip.img} />
  </Card>


  ));

  return (
    <>
      {tips.length > 0 ? (
        renderTips
      ) : (
        <div className={`d-flex flex-column align-items-center py-4 `}>
          <div>
            <img
              src="https://global-web-assets.cpcdn.com/assets/empty_states/no_tips-0c5c91733369f17179a635c3fd99f23cf410e582982af1f2e9459229cd6a26c7.svg"
              alt="No tips added"
            />
          </div>
          <h2 className={` py-3 `}> No tips added yet </h2>
          <Link
            className={`py-2 px-2 rounded  ${styles["saved-link"]}`}
            to="/tips"
          >
            {" "}
            Create tips{" "}
          </Link>
        </div>
      )}
    </>
  );
};

export default ProfileTips;
