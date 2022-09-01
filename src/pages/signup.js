import React, { useState } from "react";
import axios from "axios";
import {Link } from 'react-router-dom'
import Top from "../nav/top";
import "../utils/css/style.css";
import "../utils/js/signup";

export default function Signup() {
  // const [name, setName] = useState({name: ''});
  // const [email, setPass] = useState({email: ''});
  // const [pass, setPass] = useState({pass: ''});

  // let handleChangeName = (e) => {
  //     let input = e.target.value;
  //     setName({name: input});
  // }

  // let handleChangeEmail = (e) => {
  //     let input = e.target.value;
  //     setPass({email: input});
  // }

  // let handleChangePass = (e) => {
  //     let input = e.target.value;
  //     setName({name: input});
  // }

  // // verifing user
  // let handleSubmit = (e) => {
  //     axios.post('climax.com/api/signup', {
  //         name: {name},
  //         email: {email},
  //         pass: {pass}

  //     })
  //     .then((res) => {
  //         console.log(res);
  //         if (res.data.Details === undefined) {
  //             alert('the provided credential doesn\'t match');
  //             window.location.href = '/'
  //         }else {
  //             alert('You are Logged In, Please Proceed to Dashboard!');
  //             const resp = JSON.stringify(res.data.Details);
  //             sessionStorage.setItem("Details", resp);
  //             window.location.href = './dashboard';
  //         }
  //     });
  //     e.preventDefault();
  // }
  return (
    <>
      {/* Top navigation */}
      <Top />

      {/* Signup Container Start*/}

      <main class="container p-5">
        <header>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account!</p>
        </header>
        <form id="form">
            <div class="form-file firstNameDiv">
                <input type="text" placeholder="Full Name" className="form-control firstName" id="firstName" required/>
                <small>Error message</small>
            </div>
            <div class="form-file">
                <input type="email" placeholder="Email" className="form-control email" id="email" required/>
                <small>Error message</small>
            </div>
            <div class="form-file">
                <input type="password" placeholder="Password" className="form-control password" id="password" required/>
                <small>Error message</small>
            </div>
            <div class="form-file">
                <input type="password" placeholder="Confirm Password" className="form-control confirmPassword" id="confirmPassword"  required/>
                <small>Error message</small>
            </div>
            <label for="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" class="checkbox" required /> 
                I accept the <span>Term of Use</span> & <span>Privacy Policy</span>.
            </label>
            <button type="submit" class="button" id="signUp">Sign Up <i class="fa fa-spinner fa-spin"></i></button>
        </form>
        <p class="login-link">Already have an account? <Link to="../login">Login Here</Link></p>
    </main>
      {/* Signup End */}
    </>
  );
}
