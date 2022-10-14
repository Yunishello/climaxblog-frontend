import React from "react";
import Sidebar from "./sidebar";
import { Outlet, Link } from "react-router-dom";

export default function TopDash() {
  // const user = sessionStorage.getItem("Details");
  // console.log(user.name);
  return (
    <>
      {/* <!-- Top Navigations --> */}

      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap py-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">
          Climax Blog
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap text-light">
            {/* {user.name} */} Alexander Pierce
          </div>
        </div>
      </header>
      <Sidebar />
      <Outlet />
    </>
  );
}
