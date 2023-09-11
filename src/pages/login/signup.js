import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let newErrors = {
      name: name.length < 3 ? "Name must be at least 3 characters" : "",

      email: !emailPattern.test(email) ? "Invalid email address" : "",
      password: password.length < 8 ? "Password must be 8 characters long" : "",
    }; 

    setError(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.password) {
      setSubmitted(true);
      setError({});
      navigate("/signin");
    }
  };



  return (
    <>
      <Container>
        <div className="mt-5">
          <h1 className="text-center">Sign Up</h1>
          <p className="text-center">Put your name and email here</p>

          <div className="row justify-content-center">
            <div className="col-sm-8 col-md-6 col-lg-6">
              <Card className="d-flex flex-column vh-75">
                <form
                  className="d-flex flex-column gap-3"
                  onSubmit={handleSubmit}
                >
                  <div className="d-flex flex-column gap-1 mt-4">
                    <label className="mx-3">Name</label>
                    <input
                      onChange={handleName}
                      className="py-1 mx-3 border"
                      value={name}
                      type="text"
                      placeholder="Name"
                    />
                    {error.name && (
                      <span className="  mx-3 text-danger">{error.name}</span>
                    )}
                  </div>
                  <div className="d-flex flex-column gap-1">
                    <label className="mx-3">Email Address</label>
                    <input
                      onChange={handleEmail}
                      className="py-1 mx-3 border"
                      value={email}
                      type="email"
                      placeholder="Email"
                    />
                    {error.email && (
                      <span className="  mx-3 text-danger">{error.email}</span>
                    )}
                  </div>
                  <div className="d-flex flex-column gap-1">
                    <label className="mx-3">Password</label>
                    <input
                      onChange={handlePassword}
                      className="py-1 mx-3 border"
                      value={password}
                      type="password"
                      placeholder="Password"
                    />
                    {error.password && (
                      <span className=" mx-3 text-danger">
                        {error.password}
                      </span>
                    )}
                  </div>
                  <button
                    className={` mx-3 py-2  my-1 rounded ${styles["signup-btn"]}`}
                    type="submit"
                    // onClick={handleNavigation}
                  >
                    Sign Up
                  </button>



                  <p className=" text-center">
                    Already Sign Up?
                    <span className="mx-2">
                      <Link to="/signin">Sign In</Link>
                    </span>
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
