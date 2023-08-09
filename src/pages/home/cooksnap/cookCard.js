import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import styles from "./cards.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { BorderdHerat } from "../svgs";

export const Next = (props) => {
  const { className, style, onClick } = props;

  console.log( "styles here", {...style });
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, marginRight:"64px" }}
    >
      Next
    </div>


  );
};

export const Prev = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, marginLeft: "14px" , zIndex: "1"  }}
    >
      Previous
    </div>
  );
};

function CookCard({ cardsData }) {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };

  return (
    <Container className="my-5">
      <div className="d-flex">
        <div>
          <BorderdHerat />
        </div>

        <h4 className=" mx-2 mb-3">Latest Cooksnap</h4>
      </div>

      <div className="">
        <Slider {...settings}>
          {cardsData.map((item, index) => (
            <div key={index}>
           
              <Card style={{ width: "321px" }}>
                <Card.Body>
                  <div className="d-flex gap-3">
                    <div>
                      <img
                        className="rounded"
                        src={item.cardImg}
                        alt="Card content"
                      />
                    </div>

                    <div>
                      <p>{item.comment}</p>

                      <div className="d-flex gap-2">
                        {item.svgCode}

                        <p className="mb-2"> {item.additionCom}</p>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column gap-2">
                    <div>
                      <FontAwesomeIcon icon={faUtensils} />
                      <span className="mx-2">{item.dishName}</span>
                    </div>

                    <div className="mx-4">
                      <img
                        className="rounded-3"
                        src={item.cardProfile}
                        alt="Card content"
                      />
                      <span className="fs-6">{item.userName}</span>
                    </div>
                    <div className="mt-2">
                      <button
                        type="button"
                        className={`d-flex align-items-center justify-content-around ${styles["card-hearth-btn"]}`}
                      >
                        <span className={`fs-4 text-danger`}>&#x2665;</span>
                        <span>{item.numb}</span>
                      </button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
}

export default CookCard;
