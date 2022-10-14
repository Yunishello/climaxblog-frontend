import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Top from "../nav/top";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Single() {
  const id = sessionStorage.getItem("post-id");
  let emailError = "";

  // State calls
  let [commentLength, setCommentLength] = useState("0");
  const [post, setPost] = useState("");
  const [comment, setComment] = useState("");
  const [email, setMail] = useState({ email: "" });
  const [name, setName] = useState({ name: "" });
  const [body, setBody] = useState({ password: "" });
  const [response, setResponse] = useState("");
  const [isLoading, setLoading] = useState(true);

  const handleISClicked = (e) => {
    setLoading(false);
    setPost(
      <div className="">
        <div className="px-4">
          <div className="pb-2">
            <h4 className="card-title text-secondary post-text text-capitalize">
              Technology
            </h4>
          </div>
          <div className="pb-2">
            <img className="post-img" src="utils/1.png" />
          </div>
          <div>
            <h4 className="card-title post-text text-secondary">
              Posted On: {new Date("2022").toDateString()}
            </h4>
          </div>
          <h1 className="card-title text-dark post-text text-uppercase">
            Title goes here
          </h1>
        </div>
        <hr />
        <div className="">
          <p className="card-text post-text  text-para m-0 px-4 py-3 text-titlecase">
            Body content goes here, Body content goes here, Body content goes
            here, Body content goes here, Body content goes here, Body content
            goes here
          </p>
        </div>
        <div className="mx-auto text-center">
          <hr />
          <div className="site-publisher clearfix">
            <h4>
              <small>Created By:</small>{" "}
              <span className="text-capitalize">Martin Martines</span>
            </h4>
          </div>
        </div>
      </div>
    );
  };

  // let handleMail = (e) => {
  //   let input = e.target.value;
  //   setMail({ email: input });
  // };

  // let handleBody = (e) => {
  //   let input = e.target.value;
  //   setBody({ body: input });
  // };

  // let handleName = (e) => {
  //   let input = e.target.value;
  //   setName({ name: input });
  // };

  // verifing user
  // let handleSubmit = (e) => {
  //   axios
  //     .post("http://climax.com/api/comment", {
  //       email: { email },
  //       name: { name },
  //       content: { body },
  //       post_id: { id },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       // window.location.href = "/";
  //       // alert(error.response.data.errors.email);
  //     });
  //   e.preventDefault();
  // };

  // useEffect(() => {
  //   axios
  //     .post("http://climax.com/api/view/" + id, {})
  //     .then((res) => {
  //       setPost(
  //         <div className="">
  //           <div className="px-4">
  //             <div className="pb-2">
  //               <h4 className="card-title text-secondary post-text text-capitalize">
  //                 Technology
  //               </h4>
  //             </div>
  //             <div className="pb-2">
  //               <img className="post-img" src="utils/1.png" />
  //             </div>
  //             <div>
  //               <h4 className="card-title post-text text-secondary">
  //                 Posted On: {new Date(res.data.created_at).toDateString()}
  //               </h4>
  //             </div>
  //             <h1 className="card-title text-dark post-text text-uppercase">
  //               {res.data.title}
  //             </h1>
  //           </div>
  //           <hr />
  //           <div className="">
  //             <p className="card-text post-text  text-para m-0 px-4 py-3 text-titlecase">
  //               {res.data.body}
  //             </p>
  //           </div>
  //           <div className="mx-auto text-center">
  //             <hr />
  //             <div className="site-publisher clearfix">
  //               <h4>
  //                 <small>Created By:</small>{" "}
  //                 <span className="text-capitalize">Martin Martines</span>
  //               </h4>
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     })
  //     .catch((error) => {});
  // }, [id]);

  // useEffect(() => {
  //   setComment(
  //     <div className="content blog-list">
  //       <div className="blog-wrapper clearfix">
  //         <div className="blog-meta">
  //           <h3 className="text-center"> Loading Comment, Please Wait!!! </h3>
  //         </div>
  //       </div>
  //     </div>
  //   );
  //   axios
  //     .get("http://climax.com/api/comment/view/" + id, {})
  //     .then((res) => {
  //       console.log(res);
  //       setCommentLength(res.data.length);
  //       if (res.data.length === 0) {
  //         setComment(
  //           <div>
  //             <h3>No Comment Loaded For This Post!!!</h3>
  //           </div>
  //         );
  //       } else {
  //         setComment(
  //           res.data.map((element) => (
  //             <div className="media" key={element.id}>
  //               <p className="pull-right">
  //                 <small>5 days ago</small>
  //               </p>
  //               <Link className="media-left" to="#">
  //                 <img
  //                   src="../utils/blog/upload/people_12.jpeg"
  //                   alt=""
  //                   className="img-circle"
  //                 />
  //               </Link>
  //               <div className="media-body">
  //                 <h4 className="media-heading user_name text-uppercase">
  //                   {element.name}
  //                 </h4>
  //                 <p>{element.content}</p>
  //                 <Link to="#" className="btn btn-primary btn-sm">
  //                   Reply
  //                 </Link>
  //               </div>
  //             </div>
  //           ))
  //         );
  //       }
  //     })
  //     .catch((error) => {});
  // }, [id]);

  return (
    <>
      <Top />

      <section className="mt-3">
        {isLoading ? (
          <div className="content blog-list">
            <div className="alert alert-danger">
              <strong>Note:</strong> This is the loading message click here to
              show contents{" "}
              <Link to="#" onClick={(e) => handleISClicked(e)}>
                Show
              </Link>
            </div>
            <div className="blog-wrapper clearfix">
              <div className="blog-meta">
                <h3 className="text-center"> Loading Post, Please Wait!!! </h3>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 bg-white shadow rounded my-2 py-3 p-0">
                {post}

                <div className="px-3">
                  <h3 className="small-title">{commentLength} Comments</h3>
                  <div className="comments-list">{comment}</div>
                </div>

                <div className="content boxed-comment clearfix mx-3">
                  <h3 className="text-center">Leave a Comment</h3>
                  <form
                    className="big-contact-form"
                    //onSubmit={(e) => handleSubmit(e)}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Full Name"
                            //onChange={(e) => handleName(e)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            //onChange={(e) => handleMail(e)}
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="col-md-12">
                      <CKEditor
                        //onChange={(e) => handleBody(e)}
                        className="form-control"
                        editor={ClassicEditor}
                        data=""
                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                      <br />
                      <button className="btn btn-primary" type="submit">
                        SEND COMMENT
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-md-2"></div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
