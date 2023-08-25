import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import styles from "./cards.module.css";

import styles from "./recentrecipes.module.css";

const SampleCard = ({ cards }) => {

  return (
    <Container className={`${styles.container}`}>
      <h4 className={` px-4 px-sm-0 mx-2 mx-sm-0`}>Recent Recipes</h4>

      <div className={`d-flex flex-wrap justify-content-between align-items-center`}>
        {cards.map((card, index) => (
          <>

          <div className={`${styles.wrapper}`}>
            <div
              className={`d-flex justify-content-between mb-1  ${styles["container-header"]}`}
              key={index}
            >
              <div>
                <img
                  className={`${styles["card-profile"]}`}
                  src={card.profileimg}
                  alt="img"
                />
                <span className="mx-2">{card.username}</span>
              
              </div>
              <div>{card.svgCode}</div>
            </div>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={card.recipeimg} />
              <Card.Body>
                <Card.Title>{card.cardtitle}</Card.Title>

                <button
                  type="button"
                  className={`d-flex align-items-center justify-content-around ${styles["card-hearth-btn"]}`}
                >
                  <span className={`fs-4 text-danger`}>&#x2665;</span>
                  <span>{card.number}</span>
                </button>
              </Card.Body>
            </Card>
            </div>

           
          </>
        ))}
      </div>
    </Container>
  );
};

export default SampleCard;
