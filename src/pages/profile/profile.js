import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styles from "./profile.module.css";
import ProfileImg from "./profileimg";
import Tabs from "./tabs";
import TabContent from "./tabcontent";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <Container className="my-4 align-items-center gap-2 d-flex flex-column">
        <ProfileImg />

        <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />

        <TabContent activeTab={activeTab} />
      </Container>
    </>
  );
};

export default Profile;
