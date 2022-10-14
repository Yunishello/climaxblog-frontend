import { Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState, React } from "react";
import Top from "../nav/top";
import Users from "./addAdmin";
import Body from "./reply";
import axios from "axios";
import { render } from "@testing-library/react";
import TopDash from "../nav/topdash";
import SideNav from "../nav/sidebar";

export default function Dashboard() {
  // Setting variables
  const getLog = sessionStorage.getItem("islogin");
  // console.log(getLog);

  // setting states for comment, post, loading
  const [comment, setComment] = useState("");
  const [post, setPost] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      // axios request for comment
    axios
      .get("http://climax.com/api/comment/show")
      .then((res) => {
        setComment(
          res.data.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td className="text-capitalize">{element.name}</td>
              <td>{element.email}</td>
              <td>
                <div className="btn-group">
                  <button title="View" className="btn btn-outline-success">
                  <i className="fa fa-pencil"></i>
                  </button>
                  <button title="Reply" className="btn btn-outline-warning">
                  <i className="fa fa-send"></i>
                  </button>
                  <button title="Delete" className="btn btn-outline-danger">
                  <i className="fa fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))
        );
      })
      .catch((error) => {
        console.log(error);
      });
      // axios request for post
    axios
      .get("http://climax.com/api/view")
      .then((res) => {
        setLoading(false);
        setPost(
          res.data.map((element) => (
            <tr key={element.id}>
              <td>{}</td>
              <td className="text-capitalize">{element.title}</td>
              <td>{element.description}</td>
              <td>
                <span className="">pending</span>
              </td>
              <td>
                <div className="btn-group">
                  <button className="btn btn-outline-success">
                    <i className="fa fa-pencil"></i>
                  </button>
                  <button className="btn btn-outline-warning">
                    <i className="fa fa-send"></i>
                  </button>
                  <button className="btn btn-outline-danger">
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // if (getLog == 1) {
  return (
    <>
      <div className="row">
        <TopDash />
        {/* <SideNav /> */}
        {/* <!-- Right side column. Contains the navbar and content of the page --> */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Share
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Export
                </button>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary dropdown-toggle"
              >
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>
          {isLoading ? (
            <h3> Loading Posts, Please Wait!!! </h3>
          ) : (
            <div>
              <h4>All Posts</h4>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Posted Title</th>
                      <th scope="col">Post Description</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>{post}</tbody>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Posted Title</th>
                      <th scope="col">Post Description</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <h4>All Comments</h4>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Commented By</th>
                      <th scope="col">Email</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>{comment}</tbody>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Posted By</th>
                      <th scope="col">Poster Email</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
      {/* <ModalScript /> */}
    </>
  );
  // } else {
  //   window.location.href = "/";
  // }
}
