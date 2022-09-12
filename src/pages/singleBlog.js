import { React, useState } from "react";
import { Link } from "react-router-dom";
import Top from "../nav/top";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../utils/blog/css/animate.css";
import "../utils/blog/css/bootstrap.css";
import "../utils/blog/css/style.css";

export default function Single() {
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
          window.location.href = "/";
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
        window.location.href = "/";
        alert(error.response.data.errors.email);
      });
    e.preventDefault();
  };
  return (
    <>
      <Top />

      <section className="section db p120">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tagline-message page-title text-center">
                <h3>Blog & News</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section gb nopadtop">
        <div className="container">
          <div className="boxed">
            <div className="row">
              <div className="col-md-8">
                <div className="content blog-list">
                  <div className="blog-wrapper clearfix">
                    <div className="blog-meta">
                      <small>
                        <Link to="#">Tips & Tricks</Link>
                      </small>
                      <h3>How to Hire Icon Designer for Your Next Project</h3>
                      <ul className="list-inline">
                        <li>6 hours ago</li>
                        <li>
                          <span>written by</span>{" "}
                          <Link to="#">Edulogy Team</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="blog-media">
                      <img
                        src="upload/blog_01.jpg"
                        alt=""
                        className="img-responsive img-rounded"
                      />
                    </div>

                    <div className="blog-desc-big">
                      <p className="lead">
                        You can get all the icon versions by checking out our
                        standard license that come with every free icons..
                      </p>
                      <p>
                        Integer eu urna sit amet dolor fringilla vulputate. Sed
                        diam nunc, pellentesque sed lobortis non, tincidunt et
                        sem. Sed sollicitudin elementum mi eget lobortis.
                        Aliquam molestie rhoncus nisl, vitae molestie leo
                        imperdiet ac. Aliquam diam est, aliquam vitae tristique
                        nec, pretium a libero. Vivamus tempor sed turpis sit
                        amet malesuada.
                      </p>

                      <p>
                        {" "}
                        Cras eu lacus et nulla dignissim{" "}
                        <Link to="#">ultrices</Link>. Duis ullamcorper finibus
                        quam, sed convallis massa pharetra nec. Duis nec
                        molestie dolor. Nam augue neque, efficitur vel lacus sit
                        amet, consequat pharetra massa. Proin nunc magna, congue
                        vitae justo ut, dignissim dapibus enim. Integer
                        sollicitudin lacus a iaculis molestie. Donec quis
                        consequat erat. Cras vitae consequat sem. Integer
                        eleifend purus congue, gravida sem eu, pharetra sapien.
                        Nunc venenatis, lacus id pretium volutpat, augue eros
                        accumsan leo, eu condimentum velit nulla nec sem. Donec
                        interdum bibendum eros, ut facilisis nunc malesuada id.
                        Nulla quis ex non magna sollicitudin sodales vestibulum
                        nec massa. Nullam ut nibh quis est aliquet viverra
                        mattis eu ligula. Pellentesque dui mi, ultricies ut
                        velit id, iaculis lacinia est.{" "}
                      </p>

                      <blockquote className="text-center">
                        "Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit..."
                      </blockquote>

                      <p>
                        Integer eu urna{" "}
                        <Link to="#">sit amet dolor fringilla vulputate</Link>.
                        Sed diam nunc, pellentesque sed lobortis non, tincidunt
                        et sem. Sed sollicitudin elementum mi eget lobortis.
                        Aliquam molestie rhoncus nisl, vitae molestie leo
                        imperdiet ac. Aliquam diam est, aliquam vitae tristique
                        nec, pretium a libero. Vivamus tempor sed turpis sit
                        amet malesuada.
                      </p>

                      <p>
                        {" "}
                        Quisque at vestibulum neque. Duis eget sapien ac quam
                        interdum euismod. Mauris blandit tincidunt neque, vitae
                        vestibulum tortor dapibus non. Nunc eu sollicitudin
                        diam. Proin vel erat vitae augue eleifend convallis.
                        Curabitur ut risus id ex finibus rhoncus sit amet a
                        libero. Aenean a turpis eget nisi posuere tempor.
                        Aliquam iaculis sem eros. Fusce nec erat eget sem
                        aliquam congue quis vitae mi. Praesent varius dictum
                        cursus.{" "}
                      </p>

                      <hr className="invis" />

                      <div className="tags-widget">
                        <ul className="list-inline">
                          <li>
                            <Link to="#">course</Link>
                          </li>
                          <li>
                            <Link to="#">web design</Link>
                          </li>
                          <li>
                            <Link to="#">development</Link>
                          </li>
                          <li>
                            <Link to="#">language</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="authorbox">
                  <div className="site-publisher clearfix">
                    <img
                      src="upload/people_10.jpeg"
                      alt=""
                      className="img-responsive img-circle"
                    />
                    <Link to="#" title="">
                      <h4>
                        <small>about</small> <span>Martin Martines</span>
                      </h4>
                    </Link>
                    <p>
                      Exercitation photo booth stumptown tote bag Banksy, elit
                      small batch freegan sed. Craft beer elit seitan
                      exercitation, photo booth.
                    </p>

                    <div className="authorbox-social">
                      <ul className="list-inline">
                        <li>
                          <Link to="#">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-google-plus"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-pinterest"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-envelope-o"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="content boxed-comment clearfix">
                  <h3 className="small-title">3 Comments</h3>
                  <div className="comments-list">
                    <div className="media">
                      <p className="pull-right">
                        <small>5 days ago</small>
                      </p>
                      <Link className="media-left" to="#">
                        <img
                          src="../utils/blog/upload/people_12.jpeg"
                          alt=""
                          className="img-circle"
                        />
                      </Link>
                      <div className="media-body">
                        <h4 className="media-heading user_name">
                          Baltej Singh
                        </h4>
                        <p>
                          Exercitation photo booth stumptown tote bag Banksy,
                          elit small batch freegan sed. Craft beer elit seitan
                          exercitation, photo booth et 8-bit kale chips proident
                          chillwave deep v laborum. Aliquip veniam delectus,
                          Marfa eiusmod Pinterest in do umami readymade swag.
                          Selfies iPhone Kickstarter, drinking vinegar jean.
                        </p>
                        <Link to="#" className="btn btn-primary btn-sm">
                          Reply
                        </Link>
                      </div>
                    </div>
                    <div className="media">
                      <p className="pull-right">
                        <small>5 days ago</small>
                      </p>
                      <Link className="media-left" to="#">
                        <img
                          src="upload/people_11.jpeg"
                          alt=""
                          className="img-circle"
                        />
                      </Link>
                      <div className="media-body">
                        <h4 className="media-heading user_name">
                          Baltej Singh
                        </h4>
                        <p>
                          Meh synth Schlitz, tempor duis single-origin coffee ea
                          next level ethnic fingerstache fanny pack nostrud.
                          Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                          Helvetica. Salvia esse nihil, flexitarian Truffaut
                          synth art party deep v chillwave. Seitan High Life
                          reprehenderit consectetur cupidatat kogi. Et leggings
                          fanny pack, elit bespoke vinyl art party Pitchfork
                          selfies master cleanse Kickstarter seitan retro.
                        </p>

                        <p>
                          Drinking vinegar stumptown yr pop-up artisan sunt.
                          Deep v cliche lomo biodiesel Neutra selfies. Shorts
                          fixie consequat flexitarian four loko tempor duis
                          single-origin coffee. Banksy, elit small.
                        </p>

                        <Link to="#" className="btn btn-primary btn-sm">
                          Reply
                        </Link>
                      </div>
                    </div>
                    <div className="media last-child">
                      <p className="pull-right">
                        <small>5 days ago</small>
                      </p>
                      <Link className="media-left" to="#">
                        <img
                          src="upload/people_04.jpeg"
                          alt=""
                          className="img-circle"
                        />
                      </Link>
                      <div className="media-body">
                        <h4 className="media-heading user_name">
                          Baltej Singh
                        </h4>
                        <p>
                          Kickstarter seitan retro. Drinking vinegar stumptown
                          yr pop-up artisan sunt. Deep v cliche lomo biodiesel
                          Neutra selfies. Shorts fixie consequat flexitarian
                          four loko tempor duis single-origin coffee. Banksy,
                          elit small.
                        </p>

                        <Link to="#" className="btn btn-primary btn-sm">
                          Reply
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content boxed-comment clearfix">
                  <h3 className="small-title">Leave a Comment</h3>
                  <form
                    className="big-contact-form"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="website"
                          placeholder="Website"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <CKEditor
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

              <div className="sidebar col-md-4">
                <div className="widget clearfix">
                  <div className="banner-widget">
                    <img
                      src="upload/banner.jpeg"
                      alt=""
                      className="img-responsive img-rounded"
                    />
                  </div>
                </div>

                <div className="widget clearfix">
                  <h3 className="widget-title">Popular Posts</h3>
                  <div className="post-widget">
                    <div className="media">
                      <img
                        src="upload/blog_small_01.jpg"
                        alt=""
                        className="img-responsive alignleft img-rounded"
                      />
                      <div className="media-body">
                        <h5 className="mt-0">
                          <Link to="#">Learning English Like a Pro..</Link>
                        </h5>
                        <div className="blog-meta">
                          <ul className="list-inline">
                            <li>4 days ago</li>
                            <li>
                              <span>by</span> <Link to="#">Edulogy Team</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="media">
                      <img
                        src="upload/blog_small_02.jpg"
                        alt=""
                        className="img-responsive alignleft img-rounded"
                      />
                      <div className="media-body">
                        <h5 className="mt-0">
                          <Link to="#">
                            How to create a beautiful website with Bootstrap
                          </Link>
                        </h5>
                        <div className="blog-meta">
                          <ul className="list-inline">
                            <li>5 days ago</li>
                            <li>
                              <span>by</span> <Link to="#">Boby DOE</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="media">
                      <img
                        src="upload/blog_small_03.jpg"
                        alt=""
                        className="img-responsive alignleft img-rounded"
                      />
                      <div className="media-body">
                        <h5 className="mt-0">
                          <Link to="#">
                            Don't forget to update your Google web master tools
                          </Link>
                        </h5>
                        <div className="blog-meta">
                          <ul className="list-inline">
                            <li>6 days ago</li>
                            <li>
                              <span>by</span> <Link to="#">Martin</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="widget clearfix">
                  <h3 className="widget-title">Subscribe Our Newsletter</h3>
                  <div className="newsletter-widget">
                    <p>
                      You can opt out of our newsletters at any time. See our{" "}
                      <Link to="#">privacy policy</Link>.
                    </p>
                    <form className="form-inline" role="search">
                      <div className="form-1">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter email here.."
                        />
                        <Link to="#" type="submit" className="btn btn-primary">
                          <i className="fa fa-paper-plane-o"></i>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="widget clearfix">
                  <h3 className="widget-title">Popular Tags</h3>
                  <div className="tags-widget">
                    <ul className="list-inline">
                      <li>
                        <Link to="#">course</Link>
                      </li>
                      <li>
                        <Link to="#">web design</Link>
                      </li>
                      <li>
                        <Link to="#">development</Link>
                      </li>
                      <li>
                        <Link to="#">language</Link>
                      </li>
                      <li>
                        <Link to="#">teacher</Link>
                      </li>
                      <li>
                        <Link to="#">speaking</Link>
                      </li>
                      <li>
                        <Link to="#">material</Link>
                      </li>
                      <li>
                        <Link to="#">css3</Link>
                      </li>
                      <li>
                        <Link to="#">html</Link>
                      </li>
                      <li>
                        <Link to="#">learning</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
