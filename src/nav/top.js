import React from "react";
import Sidebar from "./sidebar";
import { Outlet, Link } from "react-router-dom";

export default function Top() {
  // const user = sessionStorage.getItem("Details");
  // console.log(user.name);
  return (
    <>
      {/* <!-- Top Navigations --> */}

      <header>
        <nav
          className="navbar navbar-expand-sm navbar-dark bg-dark"
          aria-label="Third navbar example"
        >
          <div className="container-fluid">
            <Link className="navbar-brand text-uppercase" to="/">
              climax
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample03"
              aria-controls="navbarsExample03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample03">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <Sidebar /> */}
      <Outlet />
    </>
  );
}
