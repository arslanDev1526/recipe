import React, { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./header.module.css";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import LinkItem from "./linkitem";
import CondationalNav from "./condationalnav"

import navItems from "./navitem"

// import onSaveTipClicked from "../tips"




function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = (e) => {
    setIsNavOpen((isNavOpen) => !isNavOpen);
  };

  const ignoreRoutes = ["/", "/signin", "/categ"];
  if (ignoreRoutes.includes(location.pathname)) return null;

  const secondNav = ["/tips", "/createRecipe"];
  if (secondNav.includes(location.pathname)) return <CondationalNav  />;

  return (
    <>
      <Navbar
        className={`fixed-top ${styles.navbar}`}
        collapseOnSelect={true}
        expand="sm"
        bg="#3b82f680"
        data-bs-theme=" "
        onToggle={toggleNav}
        onSelect={() => setIsNavOpen(true)}
      >
        <Container className={`${styles.wrapper}`}>
          <div
            className={`d-flex gap-2 justify-content-center align-items-center ${styles.logo}`}
          >
            <div>
              <img
                className={styles["nav-img"]}
                src="https://global-web-assets.cpcdn.com/assets/logo_circle-d106f02123de882fffdd2c06593eb2fd33f0ddf20418dd75ed72225bdb0e0ff7.png"
                alt="pic"
              />
            </div>
            <Navbar.Brand className="pb-2" href="#">
              SpiceCraft
            </Navbar.Brand>
          </div>
          <Navbar.Toggle
            className={` ${styles["nav-toggle"]}`}
            aria-controls="resposive-navbar-nav"
          >
            {isNavOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </Navbar.Toggle>

          <Navbar.Collapse>
            <Nav
              className={`mt-2 d-flex gap-2 justify-content-between ${styles.nav}`}
            >
              {navItems.map(({ icon, redirectPath, label }, index) => {
                return (
                  <LinkItem
                    key={index}
                    eventKey={index}
                    label={label}
                    icon={icon}
                    redirectPath={redirectPath}
                  />
                );
              })}
              <LinkItem />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
