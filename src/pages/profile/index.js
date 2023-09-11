import { Container } from "react-bootstrap";
import { ProfileDetails } from "./ProfileDetails";
import { Outlet } from "react-router-dom";

export const Profile = () => {
  return (
    <>
      <Container className="my-4 align-items-center gap-2 d-flex flex-column">
        <ProfileDetails />
        <Outlet />
      </Container>
    </>
  );
};
