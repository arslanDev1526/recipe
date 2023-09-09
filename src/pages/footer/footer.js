import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
  const location = useLocation();

  const ignoreRoutes = ["/", "/signin", "/categ", "/createRecipe" , "/tips" ,];

  if (ignoreRoutes.includes(window.location.pathname)) return null;

  if (/tips\/\d+/.test(location.pathname)) return null;

  return (
    <>
      <div className={`${styles.footer}`}>
        <Container className={`pt-4`}>
          <div className={`d-flex gap-4 gap-sm-5 flex-column flex-sm-row`}>
            <div className="px-2">
              <h3> About Us </h3>
              <p>
                Our mission at Cookpad is to make everyday cooking fun, because
                we believe that cooking is key to a happier and healthier life
                for people, communities and the planet. We empower homecooks all
                over the world to help each other by sharing recipes and cooking
                tips.
              </p>
            </div>
            <div
              className={`gap-1 d-flex flex-column px-2 ${styles["about-links"]}`}
            >
              {" "}
              <h3>Learn More</h3>
              <a href="#">Careers</a>
              <a href="#">Feedback</a>
              <a href="#">Terms of Services</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>

          <div className=" my-3 text-center">
            Copyright © Cookpad Inc. All Rights Reserved
          </div>

          <div className="overflow-hidden d-flex justify-content-center">
            <img
              className=" "
              src="https://global-web-assets.cpcdn.com/assets/footer/footer-210d183ce6443eb41fa78f10b270fb773bab56416e2680a35328f51e8ddf85d0.png"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
