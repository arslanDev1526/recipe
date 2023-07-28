import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBox from "./home/searchbox";

function Header() {
  const location = useLocation();

  const isSearchRoute = location.pathname === "/search";

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  return (
    <>
      <Navbar
        className={`fixed-top ${styles.Navbar}`}
        bg="#3b82f680"
        data-bs-theme=" "
      >
        <Container>
          <div>
            <img
              className={styles["nav-img"]}
              src="https://global-web-assets.cpcdn.com/assets/logo_circle-d106f02123de882fffdd2c06593eb2fd33f0ddf20418dd75ed72225bdb0e0ff7.png"
              alt="pic"
            />
            <Navbar.Brand className="m-2" href="#">
              SpiceCraft
            </Navbar.Brand>
          </div>
          {/* {isSearchRoute && <SearchBox className="border border-primary" />} */}
          <Nav className="">

        
            <div className="d-flex  mx-3">
              <FontAwesomeIcon className={styles.icon} icon={faHome} />

             

              <NavLink
                to="/home"
                className={`${styles["nav-links"]} ${
                  isActiveLink("/home") ? styles.active : ""
                } `}
              >
                {" "}
                Home{" "}
              </NavLink>
            </div>
            <div className="d-flex  mx-3">
              <FontAwesomeIcon
                className={styles.icon}
                icon={faMagnifyingGlass}
              />

              <NavLink
                to="/search"
                className={`${styles["nav-links"]} ${
                  isActiveLink("/search") ? styles.active : ""
                }`}
              >
                Search
              </NavLink>
            </div>
            <div className="d-flex mx-3">
              <FontAwesomeIcon className={styles.icon} icon={faSquarePlus} />
              <NavLink
                to="/create"
                className={`${styles["nav-links"]} ${
                  isActiveLink("/create") ? styles.active : ""
                }`}
              >
                Create
              </NavLink>
            </div>
            <div className="d-flex mx-3">
              <FontAwesomeIcon className={styles.icon} icon={faEnvelopeOpen} />
              <Link
                className={`${styles["nav-links"]} ${
                  isActiveLink("/activity") ? styles.active : ""
                }`}
                to="/activity"
              >
                Activity
              </Link>
            </div>
            <div className="d-flex mx-3">
              <FontAwesomeIcon className={styles.icon} icon={faUser} />
              <Link
                className={`${styles["nav-links"]} ${
                  isActiveLink("/profile") ? styles.active : ""
                }`}
                to="/profile"
              >
                Profile
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
