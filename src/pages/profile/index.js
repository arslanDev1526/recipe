import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styles from "./profile.module.css";
import { ProfileDetails } from "./ProfileDetails";
import { Tabs } from "./tabs";


export const Profile = () => {
  return (
    <>
      <Container className="my-4 align-items-center gap-2 d-flex flex-column">
        <ProfileDetails />
        <Tabs />
      </Container>
    </>
  );
};
