import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Top from "../nav/top";
// import Footer from '../footer/footer';
import "../utils/css/style.css";
// import "../utils/js/login"

export default function Login() {
  let emailError = '';
  const [email, setMail] = useState({ email: "" });
  const [password, setPass] = useState({ password: "" });

  let handleChangeMail = (e) => {
    let input = e.target.value;
    setMail({ email: input });
  };

  let handleChangePass = (e) => {
    let input = e.target.value;
    setPass({ password: input });
  };
  // verifing user
  let handleSubmit = (e) => {
    axios
      .post("http://climax.com/api/signin", {
        email: { email },
        password: { password },
      })
      .then((res) => {
        if (res.data.Details === undefined) {
          alert("The provided credential doesn't match");
          window.location.href = "/";
        } else {
          const islog = true;
          sessionStorage.setItem("islogin", islog);
          alert("You are Logged In, Please Proceed to Dashboard!");
          const resp = JSON.stringify(res.data.Details);
          sessionStorage.setItem("Details", resp);
          window.location.href = "./dashboard";
        }
      })
      .catch((error) => {
        alert(error.response.data.errors.email);
      });
    e.preventDefault();
  };
  return (
    <>
      {/* Top Namvigation */}
      <Top />
      {/* Login Container Start*/}

      <main class="container">
        <header>
          <h1>Welcome!</h1>
          <p>Enter Details to Login</p>
        </header>
        <form onSubmit={(e) => handleSubmit(e)} id="form">
          <div className="form-file">
            <input
              type="email"
              placeholder="Email"
              className="email form-control"
              id="loginEmail"
              onChange={(e) => handleChangeMail(e)}
            />
            <small>Error message</small>
            <div className="alert alert-danger mt-2">{emailError}</div>
          </div>
          <div className="form-file">
            <input
              type="password"
              placeholder="Password"
              className="password form-control"
              id="loginPassword"
              onChange={(e) => handleChangePass(e)}
            />
            <small>Error message</small>
          </div>
          <button type="submit" className="btn button" id="login">
            Login
          </button>
        </form>
        <p class="login-link">
          You don't have an account? <Link to="../register">Register Here</Link>
        </p>
      </main>
      {/* Login End */}

      {/* Footer */}

      {/* <Footer /> */}
    </>
  );
}

// import '../utils/js/login';
