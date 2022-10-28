import React, { useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai/";
import { BiUserCircle } from "react-icons/bi/";

// import { GoogleLogin } from "react-google-login";
// import { gapi } from "gapi-script";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import { useDispatch, useSelector } from "react-redux";
import {
  getLogin,
  getRegist,
  getOauth,
  logout,
} from "../redux/features/auth/authSlice";

let dataLocal = false;
const dataLocalStr = localStorage.getItem("data");
if (dataLocalStr) dataLocal = JSON.parse(dataLocalStr);

const NavigationBar = () => {
  const navigate = useNavigate();
  const [, setsearchInput] = useState("");
  const { name } = useParams();

  const [show, setShow] = useState(false);
  const [showRegist, setShowRegist] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseRegist = () => setShowRegist(false);
  const handleShowRegist = () => setShowRegist(true);

  const [password, setpassword] = useState("password");
  const [passwordRegist, setpasswordregist] = useState("password");
  const [passwordConfirmation, setpasswordConfirmation] = useState("password");
  const [type, settype] = useState(false);

  const [eye, seteye] = useState(true);
  const [eyeRegist, seteyeRegist] = useState(true);
  const [EyeregistConfirmation, setEyeregistConfirmation] = useState(true);

  const [emailInput, setemailInput] = useState();
  const [passwordInput, setpasswordlInput] = useState();

  const [FirstnameInput, setFirstnameInput] = useState();
  const [LastnameInput, setLastnameInput] = useState();
  const [EmailregistInput, setEmailRegistInput] = useState();
  const [PasswordregistdInput, setPasswordregistlInput] = useState();
  const [PasswordconfirmationInput, setPasswordconfirmationlInput] = useState();

  const handleShowclose = () => setShow(false);
  const handleRegistclose = () => setShowRegist(false);

  const [data] = useState(dataLocal);

  const Eye = () => {
    if (password === "password") {
      setpassword("text");
      seteye(false);
      settype(true);
    } else {
      setpassword("password");
      seteye(true);
      settype(false);
    }
  };

  const EyeRegist = () => {
    if (passwordRegist === "password") {
      setpasswordregist("text");
      seteyeRegist(false);
      settype(true);
    } else {
      setpasswordregist("password");
      seteyeRegist(true);
      settype(false);
    }
  };

  const eyeRegistConfirmation = () => {
    if (passwordConfirmation === "password") {
      setpasswordConfirmation("text");
      setEyeregistConfirmation(false);
      settype(true);
    } else {
      setpasswordConfirmation("password");
      setEyeregistConfirmation(true);
      settype(false);
    }
  };

  // login & regist
  const { login, Inputlogin } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  // OAuth login
  const credentialResponse = (credential) => {
    dispatch(getOauth(credential));
    handleShowclose();
  };

  useEffect(() => {
    if (name) setsearchInput(name);
  }, [name, setsearchInput]);

  // function validate Login
  const validateEmail = () => {
    if (emailInput === undefined) return true;
    return String(emailInput)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = () => {
    if (passwordInput === undefined) return true;
    return String(passwordInput);
  };

  // function validate register
  const validateFirstname = () => {
    if (FirstnameInput === undefined) return true;
    return String(FirstnameInput);
  };

  const validateLastname = () => {
    if (LastnameInput === undefined) return true;
    return String(LastnameInput);
  };

  const validateEmailregist = () => {
    if (EmailregistInput === undefined) return true;
    return String(EmailregistInput)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePasswordregist = () => {
    if (PasswordregistdInput === undefined) return true;
    return String(PasswordregistdInput);
  };

  const validatePassworconfirmation = () => {
    if (PasswordconfirmationInput === undefined) return true;
    return String(PasswordconfirmationInput);
  };

  return (
    <GoogleOAuthProvider clientId="1016231200394-24ufdrehmu4j2chnafgrf2047c1i8i0r.apps.googleusercontent.com">
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: "20",
        }}
      >
        <Navbar>
          <div
            className="d-flex justify-content-between"
            style={{ padding: "10px", gap: "12rem", marginLeft: "20px" }}
          >
            <Navbar.Brand
              onClick={() => navigate("/")}
              style={{ width: "200px", marginTop: "10px" }}
            >
              <img
                alt=""
                src="https://movielist-react-app.netlify.app/static/media/Logo.eeba5c17ddf85f2145e83dd963662921.svg"
              />
            </Navbar.Brand>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <input
                onChange={(event) => {
                  setsearchInput(event.target.value);
                  navigate("/search/" + event.target.value);
                }}
                className="search hover-overlay"
                placeholder="what do you want to watch?"
                style={{
                  color: "white",
                  border: "1px solid white",
                  outline: "none",
                  borderRadius: "100px",
                  width: "400px",
                  height: "40px",
                  marginTop: "10px",
                  padding: "20px",
                  background: "transparent",
                }}
              />
              <img
                src="/icons/magnifying-glass-solid.svg"
                style={{
                  position: "relative",
                  right: "40px",
                  width: "15px",
                }}
                alt="icon"
              />
            </form>

            <Nav style={{ gap: "1rem", width: "200px", marginTop: "10px" }}>
              {Inputlogin === true ? (
                ""
              ) : (
                <Button
                  variant="outline-danger"
                  onClick={handleShow}
                  className="bg-transparent"
                  style={{
                    borderColor: "red",
                    color: "red",
                    borderRadius: "50px",
                    width: "100px",
                    height: "40px",
                  }}
                >
                  Login
                </Button>
              )}

              <Modal show={show} onHide={handleClose} size="md">
                <Modal.Header closeButton>
                  <Modal.Title>Login To Your Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <div className="icon icon-mail relative">
                      <i
                        style={{
                          position: "absolute",
                          top: "20px",
                          right: "30px",
                        }}
                      >
                        <AiOutlineMail />
                      </i>

                      <Form.Control
                        value={emailInput}
                        onChange={(event) => {
                          setemailInput(event.target.value);
                        }}
                        style={{ borderRadius: "50px" }}
                        type="email"
                        placeholder="Email Address"
                        className="hover:border-rose-700 focus:bg-rose-700"
                      />
                    </div>

                    <div style={{ height: "13px" }}>
                      {!validateEmail() && (
                        <p
                          style={{
                            color: "red",
                          }}
                        >
                          Please input your email!
                        </p>
                      )}
                    </div>
                  </Form.Group>
                  {/* Password */}
                  <Form.Group className="mb-3">
                    <Form.Control
                      value={passwordInput}
                      onChange={(event) => {
                        setpasswordlInput(event.target.value);
                      }}
                      style={{ borderRadius: "50px" }}
                      type={password}
                      placeholder="Password"
                      className={`  ${
                        type ? "type_password" : ""
                      } hover:border-rose-700`}
                    />

                    <div className="icon icon-eye-login relative">
                      <i
                        onClick={Eye}
                        style={{
                          position: "absolute",
                          top: "87px",
                          right: "30px",
                        }}
                      >
                        {eye === true ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </i>
                    </div>
                    <div style={{ height: "13px" }}>
                      {!validatePassword() && (
                        <p style={{ color: "red" }}>
                          Please input your password!
                        </p>
                      )}
                    </div>
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer
                  className="d-flex justify-content-start"
                  style={{ border: "transparent", marginTop: "-30px" }}
                >
                  <Button
                    onClick={() => {
                      dispatch(getLogin({ passwordInput, emailInput }));
                      setemailInput(undefined);
                      setpasswordlInput(undefined);
                      handleShowclose();
                    }}
                    variant="danger"
                    style={{
                      borderRadius: "20px",
                      width: "70px",
                      height: "40px",
                    }}
                  >
                    Login now
                  </Button>
                  {Inputlogin === true ? (
                    ""
                  ) : (
                    <GoogleLogin
                      onSuccess={credentialResponse}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  )}
                </Modal.Footer>
              </Modal>

              {Inputlogin === true ? (
                ""
              ) : (
                <Button
                  variant="outline-danger"
                  onClick={handleShowRegist}
                  className=" bg-danger"
                  style={{
                    color: "white",
                    border: "10px",
                    borderRadius: "30px",
                    width: "100px",
                    height: "40px",
                  }}
                >
                  Register
                </Button>
              )}
              <Modal show={showRegist} onHide={handleCloseRegist} size="md">
                <Modal.Header closeButton>
                  <Modal.Title>Create Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group
                    className="mb-3"
                    // controlId="exampleForm.ControlInput1"
                  >
                    <div className="icon icon-user relative">
                      <i
                        style={{
                          position: "absolute",
                          top: "20px",
                          right: "30px",
                        }}
                      >
                        <AiOutlineUser />
                      </i>

                      <Form.Control
                        value={FirstnameInput}
                        onChange={(event) => {
                          setFirstnameInput(event.target.value);
                        }}
                        type="text"
                        placeholder="First Name"
                        className="hover:border-rose-700 focus:bg-rose-700"
                      />
                    </div>
                    <div style={{ height: "13px" }}>
                      {!validateFirstname() && (
                        <p style={{ color: "red" }}>
                          Please input your first name
                        </p>
                      )}
                    </div>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    // controlId="exampleForm.ControlInput1"
                  >
                    <div className="icon icon-user relative">
                      <i
                        style={{
                          position: "absolute",
                          top: "86px",
                          right: "30px",
                        }}
                      >
                        <AiOutlineUser />
                      </i>

                      <Form.Control
                        value={LastnameInput}
                        onChange={(event) => {
                          setLastnameInput(event.target.value);
                        }}
                        type="text"
                        placeholder="Last Name"
                        className="hover:border-rose-700 focus:bg-rose-700"
                      />
                    </div>
                    <div style={{ height: "13px" }}>
                      {!validateLastname() && (
                        <p style={{ color: "red" }}>
                          Please input your last name!
                        </p>
                      )}
                    </div>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <div className="icon icon-mail relative">
                      <i
                        style={{
                          position: "absolute",
                          top: "155px",
                          right: "30px",
                        }}
                      >
                        <AiOutlineMail />
                      </i>

                      <Form.Control
                        value={EmailregistInput}
                        onChange={(event) => {
                          setEmailRegistInput(event.target.value);
                        }}
                        style={{ borderRadius: "10px" }}
                        type="email"
                        placeholder="Email Address"
                        className="hover:border-rose-700 focus:bg-rose-700"
                      />
                    </div>
                    <div style={{ height: "13px" }}>
                      {!validateEmailregist() && (
                        <p style={{ color: "red" }}>Please input your email!</p>
                      )}
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      value={PasswordregistdInput}
                      onChange={(event) => {
                        setPasswordregistlInput(event.target.value);
                      }}
                      style={{ borderRadius: "10px" }}
                      type={passwordRegist}
                      placeholder="Password"
                      className={`  ${
                        type ? "type_password" : ""
                      } hover:border-rose-700`}
                    />

                    <div className="icon icon-eye-login realtive">
                      <i
                        onClick={EyeRegist}
                        style={{
                          position: "absolute",
                          top: "225px",
                          right: "30px",
                        }}
                      >
                        {eyeRegist === true ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </i>
                    </div>
                    <div style={{ height: "13px" }}>
                      {!validatePasswordregist() && (
                        <p style={{ color: "red" }}>
                          Please input your password!
                        </p>
                      )}
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      value={PasswordconfirmationInput}
                      onChange={(event) => {
                        setPasswordconfirmationlInput(event.target.value);
                      }}
                      style={{ borderRadius: "10px" }}
                      type={passwordConfirmation}
                      placeholder="Password Confirmation"
                      className={`  ${
                        type ? "type_password" : ""
                      } hover:border-rose-700`}
                    />

                    <div className="icon icon-eye-login relative">
                      <i
                        onClick={eyeRegistConfirmation}
                        style={{
                          position: "absolute",
                          top: "289px",
                          right: "30px",
                        }}
                      >
                        {EyeregistConfirmation === true ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </i>
                    </div>
                    <div style={{ height: "13px" }}>
                      {!validatePassworconfirmation() && (
                        <p style={{ color: "red" }}>
                          Please input your password!
                        </p>
                      )}
                    </div>
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer
                  className="d-flex justify-content-start"
                  style={{ border: "transparent", marginTop: "-30px" }}
                >
                  <Button
                    onClick={() => {
                      dispatch(
                        getRegist({
                          FirstnameInput,
                          LastnameInput,
                          EmailregistInput,
                          PasswordregistdInput,
                          PasswordconfirmationInput,
                        })
                      );
                      setFirstnameInput(undefined);
                      setLastnameInput(undefined);
                      setEmailRegistInput(undefined);
                      setPasswordregistlInput(undefined);
                      setPasswordconfirmationlInput(undefined);
                      handleRegistclose();
                    }}
                    variant="danger"
                    style={{
                      borderRadius: "30px",
                      width: "150px",
                      height: "45px",
                    }}
                  >
                    Register Now
                  </Button>
                </Modal.Footer>
              </Modal>

              {Inputlogin === false ? (
                ""
              ) : (
                <div
                  className="d-flex align-items-center "
                  style={{
                    gap: "1rem",
                    marginRight: "100px",
                  }}
                >
                  {data.imageUrl ? (
                    <img
                      alt=""
                      src={data.imageUrl}
                      style={{
                        borderRadius: "100px",
                        width: "50px",
                        height: "50px",
                      }}
                    />
                  ) : (
                    <BiUserCircle
                      style={{
                        width: "40px",
                        height: "40px",
                        color: "red",
                        marginBottom: "10px",
                      }}
                    />
                  )}

                  <p
                    style={{
                      whiteSpace: "nowrap",

                      color: "white",
                      marginTop: "10px",
                    }}
                  >
                    {login.data.first_name}
                    {login.data.last_name}
                  </p>

                  <Button
                    onClick={() => {
                      dispatch(logout());
                      handleShowclose();
                      localStorage.clear();
                    }}
                    className="align-items-center"
                    style={{
                      border: "none",
                      borderRadius: "100px",
                      backgroundColor: "red",
                    }}
                  >
                    <h6 style={{ color: "white", marginTop: "1px" }}>Logout</h6>
                  </Button>
                </div>
              )}
            </Nav>
          </div>
        </Navbar>
      </div>
    </GoogleOAuthProvider>
  );
};

export default NavigationBar;
