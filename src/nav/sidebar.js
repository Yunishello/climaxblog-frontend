import React from "react";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/dashboard">
                <span data-feather="home"></span>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post">
                <span data-feather="file"></span>
                Add Post
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                <span data-feather="shopping-cart"></span>
                Add Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                <span data-feather="users"></span>
                Profile
              </Link>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Other Options</span>
            <Link className="link-secondary" to="#" aria-label="Add a new report">
              <span data-feather="plus-circle"></span>
            </Link>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                <span data-feather="file-text"></span>
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
