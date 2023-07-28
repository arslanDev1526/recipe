import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import styles from "./cards.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function CookCard({ cardsData }) {
  // const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  };

  return (
    <Container className="my-5">
      <div className="d-flex">
        <div>
          <svg
            className="fs-4 w-100 "
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-chat-square-heart"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12ZM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z" />
            <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
          </svg>
        </div>

        <h4 className=" mx-2 mb-3">Latest Cooksnap</h4>
      </div>

      
        {/* <div  >
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronRight/>
        </button>

       
        </div> */}
        <div className="">
        <Slider {...settings}>
          {cardsData.map((item, index) => (
            <div key={index}>
              <div className="d-flex gap-2">
                <div>
                  <img
                    className="rounded-4"
                    src={item.profileImg}
                    alt="Profile"
                  />
                </div>
                <div className="d-flex flex-column">
                  <span>{item.profileName}</span>
                  <span className="pb-2">{item.time}</span>
                </div>
              </div>
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
        {/* <button onClick={sliderRef?.slickNext}>
            <FaChevronLeft />
          </button> */}
      </div>
    </Container>
  );
}

export default CookCard;
