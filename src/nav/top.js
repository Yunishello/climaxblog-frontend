import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../utils/blog/css/bootstrap.css";
import "../utils/blog/css/style.css";

export default function Top() {
  const login = sessionStorage.getItem("islogin");
  const isLogin = login;

  console.log(isLogin);

  if (isLogin === true) {
    return (
      <>
        <div class="container">
          <nav className="navbar navbar-expand-lg container row yamm">
            <div className="col-1 ml-5">
              <Link className="navbar-brand" to="#">
                Climax
              </Link>
            </div>
            <div className="col-10"></div>
            <div className="col-1">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <ul className="navbar-nav mr-auto">
                <li className="dropdown hassubmenu">
                  <Link
                    to="/"
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Yunishello
                  </Link>
                  <div
                    className="dropdown-menu"
                    role="menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="#">Notification</Link>
                    </li>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/logout">
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Outlet />
      </>
    );
  } else {
    return (
      <>
        <div className="container-fluid row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/login" className="btn btn-primary">
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Outlet />
      </>
    );
  }
}
