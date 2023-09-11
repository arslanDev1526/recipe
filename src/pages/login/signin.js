import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

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
      email: !emailPattern.test(email) ? "Invalid email address" : "",
      password: password.length < 8 ? "Password must be 8 characters long" : "",
    };

    setError(newErrors);

    if (!newErrors.email && !newErrors.password) {
      setSubmitted(true);
      setError({});
      navigate("/home");
    }
  };

  return (
    <>
    <div className={`  d-flex flex-column justify-content-center align-items-center ${styles.wrapper}`}> 
      <Container>
        <div className="">
          <h1 className="text-center">Sign In</h1>
          <p className="text-center">Put your name and email here</p>

          <div className="row justify-content-center">
            <div className="col-sm-8 col-md-6 col-lg-6">
              <Card className={` d-flex flex-column vh-75 ${styles.card}`}>
                <form
                  className="d-flex flex-column gap-3"
                  onSubmit={handleSubmit}
                >
                  <div className="d-flex flex-column gap-1 mt-4"></div>
                  <div className="d-flex flex-column gap-1">
                    <label className="mx-4">Email Address</label>
                    <input
                      className="p-2 rounded mx-3 border"
                      type="email"
                      placeholder="Email"
                      onChange={handleEmail}
                      value={email}
                    />
                    {error.email && (
                      <span className="mx-3 text-danger">{error.email}</span>
                    )}
                  </div>

                  <div className="d-flex flex-column gap-1">
                    <label className="mx-4">Password</label>
                    <input
                      className="p-2 rounded mx-3 border"
                      type="password"
                      placeholder="Password"
                      onChange={handlePassword}
                      value={password}
                    />
                    {error.password && (
                      <span className=" mx-3 text-danger">
                        {error.password}
                      </span>
                    )}
                  </div>

                  <button
                    className={`mx-3 py-2 mb-4 my-1 rounded text-center  ${styles["signup-btn"]} `}
                  >
                    Sign In
                  </button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </Container>
      </div>
    </>
  );
};

export default SignIn;
