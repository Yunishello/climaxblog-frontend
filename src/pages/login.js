import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Top from "../nav/top";
import "../utils/blog/css/animate.css";
import "../utils/blog/css/bootstrap.css";
import "../utils/blog/css/style.css";

export default function Login() {
  let emailError = "";
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
          window.location.href = "/login";
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
        emailError =
          '<div className="alert alert-danger">' +
          error.response.data.errors +
          "</div>";
      });
    e.preventDefault();
  };
  return (
    <>
      {/* Login Container Start*/}

      <main class="boxed container mt-5">
        <Link to="/" className="btn btn-primary" type="submit">
          Home
        </Link>
        <div className="authorbox">{emailError}</div>
        <div className="content boxed-comment clearfix">
          <form className="big-contact-form" onSubmit={(e) => handleSubmit(e)}>
            <h2 className="small-title">Welcome!</h2>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email Here"
                  onChange={(e) => handleChangeMail(e)}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password Here"
                  onChange={(e) => handleChangePass(e)}
                  required
                />
              </div>
            </div>
            <div className="col-md-12">
              <br />
              <button className="btn btn-primary" type="submit">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </main>
      {/* Login End */}

      {/* Footer */}

      {/* <Footer /> */}
    </>
  );
}
