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
      name: (name.length < 3 || /\d/.test(name)) ? "Name must be at least 3 characters" : "",

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
      <div
        className={`d-flex flex-column justify-content-center align-items-center ${styles.wrapper}`}
      >
        <Container>
          <div className="mt-4 mt-md-0 mt-lg-0"> 

            <h1 className="text-center">Sign Up</h1>
            <p className="text-center">Put your name and email here</p>
            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-6">
                <Card className={`d-flex flex-column vh-75 ${styles.card}`}>
                  <form
                    className="d-flex flex-column gap-4"
                    onSubmit={handleSubmit}
                  >
                    <div className="d-flex flex-column gap-1 mt-4">
                      <div class="d-flex justify-content-between mb-1">
                      <label className="ms-4">Name</label>
                      {error.name && (
                        <span className= {`mx-3 text-danger  ${styles['fs-sm-14']}`}>{error.name}</span>
                      )}
                      </div>
                    
                      <input
                        onChange={handleName}
                        className="p-2 rounded mx-3 border"
                        value={name}
                        type="text"
                        placeholder="Name"
                      />
                    
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <div class="d-flex justify-content-between mb-1"> 
                        <label className="ms-4">Email Address</label>
                        {error.email && (
                          <span className={`mx-3 text-danger ${styles['fs-sm-14']}`}>{error.email}</span>
                        )}
                      </div>
                      <input
                        onChange={handleEmail}
                        className="p-2 rounded mx-3 border"
                        value={email}
                        type="email"
                        placeholder="Email"
                      />
                     
                    </div>
                    <div className="d-flex flex-column gap-1">
                      <div class="d-flex justify-content-between mb-1"> 
                      <label className="ms-4">Password</label>
                      {error.password && (
                        <span className={`mx-3 text-danger ${styles['fs-sm-14']}`}>
                          {error.password}
                        </span>
                      )}
                      </div>
                      <input
                        onChange={handlePassword}
                        className="p-2 rounded mx-3 border"
                        value={password}
                        type="password"
                        placeholder="Password"
                      />
                    
                    </div>
                    <button
                      className={`mx-3 py-2  my-2 rounded ${styles["signup-btn"]}`}
                      type="submit"
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
      </div>
    </>
  );
};

export default SignUp;
