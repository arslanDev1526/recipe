import React from 'react'
import { Link, useLocation } from "react-router-dom";
import NavLink from "react-bootstrap/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.css";


const useIsActiveLink = (link) => {
    const location = useLocation();
    return location.pathname === link;
  };
 
const LinkItem = ({ icon, eventKey, redirectPath, label } ) => {
    const isActiveLink = useIsActiveLink(redirectPath);

  return (
    <div className="d-flex gap-2 justify-content-center align-items-center gap-1 ">
    <FontAwesomeIcon className={styles.icon} icon={icon} />
    <NavLink
      as={Link}
      eventKey={String(eventKey)}
      to={redirectPath}
      className={`p-sm-0 ${styles["nav-links"]} ${
        isActiveLink ? styles.active : ""
      } `}
    >
      {label}
    </NavLink>
  </div>


  )
}

export default LinkItem;