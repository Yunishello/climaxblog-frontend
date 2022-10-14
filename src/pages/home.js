import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Top from "../nav/top";
import axios from "axios";

export default function Home() {
  const [response, setResponse] = useState("");
  let [isLoading, setLoading] = useState(true);

  const handleISClicked = (e) => {
    setLoading(false);
    setResponse(
        <div className="col-md-4">
          <div className="bg-white shadow rounded my-2 pt-3 p-0">
            <div className="px-4 py-3">
              <div className="pb-2">
                <h6 className="card-title text-secondary text-capitalize">
                  Technology
                </h6>
              </div>
              <div className="pb-2">
                <img className="post-img" src="utils/1.png" />
              </div>
              <div>
                <h6 className="card-title text-secondary">
                  Posted On: {new Date("2013").toDateString()}
                </h6>
              </div>
              <h3 className="card-title text-dark text-uppercase">
                Post Title here
              </h3>
            </div>
            <div className="bg-dark">
              <p className="card-text text-white m-0 px-4 py-3 text-titlecase">
                description here{" "}
                <Link
                  to="/singleBlog"
                  className="text-secondary"
                >
                  Read More...
                </Link>
              </p>
            </div>
          </div>
        </div>
      )
      e.preventDefault();
  };

  // useEffect(() => {
  //   axios
  //     .get("http://climax.com/api/view")
  //     .then((res) => {
  //       if (res.data.length === 0) {
  //         setResponse(
  //           <div className="content blog-list">
  //             <div className="blog-wrapper clearfix">
  //               <div className="blog-meta">
  //                 <h3 className="text-center"> No Record Found </h3>
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       } else {
  //         setLoading(true);
  //         // Handle Click Event
  //         let handleClick = (postId) => {
  //           sessionStorage.setItem("post-id", postId);
  //           window.location.href = "/singleBlog";
  //         };
  //         setResponse(
  //           res.data.map((element) => (
  //             <div key={element.id} className="col-md-4">
  //               <div className="bg-white shadow rounded my-2 pt-3 p-0">
  //                 <div className="px-4 py-3">
  //                   <div className="pb-2">
  //                     <h6 className="card-title text-secondary text-capitalize">
  //                       Technology
  //                     </h6>
  //                   </div>
  //                   <div className="pb-2">
  //                     <img className="post-img" src="utils/1.png" />
  //                   </div>
  //                   <div>
  //                     <h6 className="card-title text-secondary">
  //                       Posted On: {new Date(element.created_at).toDateString()}
  //                     </h6>
  //                   </div>
  //                   <h3 className="card-title text-dark text-uppercase">
  //                     {element.title}
  //                   </h3>
  //                 </div>
  //                 <div className="bg-dark">
  //                   <p className="card-text text-white m-0 px-4 py-3 text-titlecase">
  //                     {element.description}{" "}
  //                     <Link
  //                       to="#"
  //                       onClick={() => handleClick(element.id)}
  //                       className="text-secondary"
  //                     >
  //                       Read More...
  //                     </Link>
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //           ))
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       setResponse(
  //         <div className="content blog-list">
  //           <div className="blog-wrapper clearfix">
  //             <div className="blog-meta">
  //               <h3 className="text-center">
  //                 {" "}
  //                 {error}, Please Check Your Network Connectivity And Try
  //                 Again!!!{" "}
  //               </h3>
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     });
  // }, [isLoading]);

  return (
    <>
      <Top />

      <main className="container mt-5">
        <section className="row gx-5 mx-auto">
          {isLoading ? (
            <div className="content blog-list">
              <div className="alert alert-danger">
                <strong>Note:</strong> This is the loading message click here to
                show contents <Link to="#" onClick={(e) => handleISClicked(e)}>Show</Link>
              </div>
              <div className="blog-wrapper clearfix">
                <div className="blog-meta">
                  <h3 className="text-center"> Loading, Please Wait!!! </h3>
                </div>
              </div>
            </div>
          ) : (
            response
          )}
        </section>
      </main>
    </>
  );
}
