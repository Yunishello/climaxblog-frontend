import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Top from "../nav/top";

export default function Login() {
  let [message, setMessage] = useState("");
  const [email, setMail] = useState({ email: "" });
  const [password, setPass] = useState({ password: "" });
  const [disable, setDisable] =  useState(true);

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
    setMessage("Please wait, Loading...");
    axios
      .post("http://climax.com/api/signin", {
        email: { email },
        password: { password },
      })
      .then((res) => {
        if (res.data.length === 0) {
          console.log(res);
          // alert("The provided credential doesn't match");
          setMessage(
            <div className="alert alert-danger">
              The provided credentials doesn't match any record, check your
              input and try again!!!
            </div>
          );
        } else {
          setMessage(
            <div className="alert alert-success">
              you have successfully login in, you are being redirected to your
              dashboard in a second!!!
            </div>
          );
          setDisable(false);
          function timer() {
            // Setting islogin and User Details
            sessionStorage.setItem("islogin", 1);
            console.log(sessionStorage.getItem("islogin"));
            sessionStorage.setItem("Details", JSON.stringify(res.data));
          }
          setTimeout(timer, 4000);
        }
      })
      .catch((error) => {
        setMessage(
          <div className="alert alert-danger">Something Went Wrong!!!</div>
        );
      });
    e.preventDefault();
  };
  return (
    <>
      <Top />
      {/* Login Container Start*/}

      <main className="container mt-5">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 shadow rounded p-5">
            <Link to="/" className="btn btn-outline-dark" type="submit">
              <i className="fa fa-arrow-left"></i> Home
            </Link>
            <div className="card p-4 my-3">{message}</div>
            <div className="content boxed-comment clearfix">
              <form className="" onChange={(e) => handleSubmit(e)}>
                <h2 className="mb-3">Welcome!</h2>
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
                <br />
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
                <div className="col-md-12">
                  <br />
                  <button className="btn btn-outline-dark" disabled={disable} type="submit">
                    <i className="fa fa-sign-in"></i> LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </main>
      {/* Login End */}

      {/* Footer */}

      {/* <Footer /> */}
    </>
  );
}
