import React, { useRef, useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
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
// import SearchBox from "../home/search/searchbox";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const ref = useRef()


  const toggleNav = () => {
    // debugger
    if (!isNavOpen) setIsNavOpen(true);
    else {
        setIsNavOpen(false)
        ref.current.classList.remove("show")
    }
}

//   const toggleNav = () => {
  
  
//    if(isNavOpen){ 
//     if ( ref.current.classList.contains('show')) { 
//       setIsNavOpen(false)
     
//       ref.current.classList.remove("show");
//       return
//      }
//    }
  
//    setIsNavOpen(true)
//   //  ref.current.classList.add("show");
// }

  // const handleClose = () => {
  //   console.log("handleClose i am close");
  //   setIsNavOpen(false);
  // };

  // const handleNavLinkClick = () => {
  //   if (isNavOpen) {
  //     setIsNavOpen(false);
  //   }
  // };
  const location = useLocation();

  const ignoreRoutes = ["/", "/signin"];

  if (ignoreRoutes.includes(window.location.pathname)) return null;

  const isSearchRoute = location.pathname === "/search";

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  return (
    <>
      <Navbar
        // onSelect={handleNavLinkClick}
        className={`fixed-top ${styles.Navbar}`}
        collapseOnSelect
        expand="sm"
        bg="#3b82f680"
        data-bs-theme=" "
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
            onClick={toggleNav}
            className={` ${styles["nav-toggle"]}`}
            aria-controls="resposive-navbar-nav"
          >
            {isNavOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </Navbar.Toggle>

          <Navbar.Collapse ref={ref} >
            <Nav className={` d-flex align-items-center gap-4  ${styles.nav}`}>
              <div className="d-flex gap-1 gap-sm-0">
                <FontAwesomeIcon className={styles.icon} icon={faHome} />

                <NavLink
                  to="/home"
                  className={` ${styles["nav-links"]} ${
                    isActiveLink("/home") ? styles.active : ""
                  } `}
                  onClick={toggleNav}
                >
                  Home
               
                </NavLink>
              </div>
              <div className="d-flex gap-1 mx-1 gap-sm-0 mx-sm-0">
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
              <div className="d-flex gap-1 mx-3 gap-sm-0  mx-sm-0">
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
              <div className="d-flex gap-1 mx-3 gap-sm-0 mx-sm-0">
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faEnvelopeOpen}
                />
                <Link
                  className={`${styles["nav-links"]} ${
                    isActiveLink("/activity") ? styles.active : ""
                  }`}
                  to="/activity"
                >
                  Activity
                </Link>
              </div>
              <div className="d-flex gap-1 mx-3 gap-sm-0 mx-sm-0">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function Header() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;
