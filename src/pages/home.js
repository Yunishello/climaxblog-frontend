import React from "react";
import {Link} from 'react-router-dom';
import Top from "../nav/top";

export default function Home() {
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
                <div className="boxed boxedp4">
                    <div className="row blog-grid">
                        <div className="col-md-4">
                            <div className="course-box">
                                <div className="course-details">
                                    <h4>
                                        <small>Tips & Tricks</small>
                                        <Link to="../singleBlog" title="">How to make JavaScript Linting With ESLint</Link>
                                    </h4>
                                    <p>Donec maximus ligula in ante dignissim pretium. Donec vitae sem fermentum, scelerisque mi quis, cursus ipsum. Cras vitae est eu justo iaculis posuere. </p>
                                </div>
                                <div className="course-footer clearfix">
                                    <div className="pull-left">
                                        <ul className="list-inline">
                                            <li><Link to="#"><i className="fa fa-user"></i> Martin</Link></li>
                                            <li><Link to="#"><i className="fa fa-clock-o"></i> 15 Jun</Link></li>
                                            <li><Link to="#"><i className="fa fa-eye"></i> 122 Views</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="course-box">
                                <div className="course-details">
                                    <h4>
                                        <small>Language</small>
                                        <Link to="../singleBlog" title="">Learn English Online with our professional teachers</Link>
                                    </h4>
                                    <p>Integer pellentesque justo vitae nisl sagittis, nec tristique erat tincidunt. Nunc varius euismod arcu ut volutpat. Praesent massa ex, sodales nullam. </p>
                                </div>
                                <div className="course-footer clearfix">
                                    <div className="pull-left">
                                        <ul className="list-inline">
                                            <li><Link to="#"><i className="fa fa-user"></i> Amanda</Link></li>
                                            <li><Link to="#"><i className="fa fa-clock-o"></i> 14 Jun</Link></li>
                                            <li><Link to="#"><i className="fa fa-eye"></i> 455 Views</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="course-box">
                                <div className="course-details">
                                    <h4>
                                        <small>Tips & Tricks</small>
                                        <Link to="../singleBlog" title="">Working with team members for new projects</Link>
                                    </h4>
                                    <p>Duis id aliquam metus, et consectetur risus. Praesent dictum augue id velit mattis aliquet. Aliquam faucibus sollicitudin libero, sit amet massa nunc. </p>
                                </div>
                                <div className="course-footer clearfix">
                                    <div className="pull-left">
                                        <ul className="list-inline">
                                            <li><Link to="#"><i className="fa fa-user"></i> Bob DOE</Link></li>
                                            <li><Link to="#"><i className="fa fa-clock-o"></i> 13 Jun</Link></li>
                                            <li><Link to="#"><i className="fa fa-eye"></i> 444 Views</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="course-box">
                                <div className="course-details">
                                    <h4>
                                        <small>Tips & Tricks</small>
                                        <Link to="../singleBlog" title="">Buy a Macbook and learn code today like a pro</Link>
                                    </h4>
                                    <p>Nulla nisl velit, lobortis vel luctus eu, rutrum ac elit. Donec nec condimentum libero. Maecenas rutrum sit amet mi vel hendrerit. Praesent tempor id. </p>
                                </div>
                                <div className="course-footer clearfix">
                                    <div className="pull-left">
                                        <ul className="list-inline">
                                            <li><Link to="#"><i className="fa fa-user"></i> Edulogy</Link></li>
                                            <li><Link to="#"><i className="fa fa-clock-o"></i> 12 Jun</Link></li>
                                            <li><Link to="#"><i className="fa fa-eye"></i> 444 Views</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="course-box">
                                <div className="course-details">
                                    <h4>
                                        <small>Discounts</small>
                                        <Link to="../singleBlog" title="">When you join our community, you will get discount</Link>
                                    </h4>
                                    <p>Praesent dictum ullamcorper erat, a commodo elit aliquam vitae. Integer id quam ut dolor ultricies faucibus. Aenean auctor metus id mauris massa nunc. </p>
                                </div>
                                <div className="course-footer clearfix">
                                    <div className="pull-left">
                                        <ul className="list-inline">
                                            <li><Link to="#"><i className="fa fa-user"></i> Amanda</Link></li>
                                            <li><Link to="#"><i className="fa fa-clock-o"></i> 11 Jun</Link></li>
                                            <li><Link to="#"><i className="fa fa-eye"></i> 441 Views</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="course-box">
                                <div className="course-details">
                                    <h4>
                                        <small>Tips & Tricks</small>
                                        <Link to="../singleBlog" title="">Best Trending Topics for ECommerce Solutions</Link>
                                    </h4>
                                    <p>Quisque ultrices quam vitae dolor eleifend iaculis. Vivamus ut pretium arcu. Phasellus ut tellus eu est pharetra consectetur. Suspendisse in volutpat. </p>
                                </div>
                                <div className="course-footer clearfix">
                                    <div className="pull-left">
                                        <ul className="list-inline">
                                            <li><Link to="#"><i className="fa fa-user"></i> Jenny DOE</Link></li>
                                            <li><Link to="#"><i className="fa fa-clock-o"></i> 10 Jun</Link></li>
                                            <li><Link to="#"><i className="fa fa-eye"></i> 178 Views</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="course-box">
                                <div className="course-details">
                                    <h4>
                                        <small>Coding</small>
                                        <Link to="../singleBlog" title="">Another awesome solution for writing code</Link>
                                    </h4>
                                    <p>Nunc in elementum ex. Quisque lorem augue,  atquis, eleifend eget diam. Nunc fermentum, velit at malesuada laoreet, velit ante sed. </p>
                                </div>
                                <div className="course-footer clearfix">
                                    <div className="pull-left">
                                        <ul className="list-inline">
                                            <li><Link to="#"><i className="fa fa-user"></i> Martin</Link></li>
                                            <li><Link to="#"><i className="fa fa-clock-o"></i> 09 Jun</Link></li>
                                            <li><Link to="#"><i className="fa fa-eye"></i> 55 Views</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="course-box">
                                <div className="course-details">
                                    <h4>
                                        <small>Meet-up</small>
                                        <Link to="../singleBlog" title="">Meet up - 2018 Amsterdam Would you like to join us?</Link>
                                    </h4>
                                    <p>Phasellus ut tristique augue, dictum pharetra felis. Nam ut blandit nulla. Proin sit amet nisi nec nulla ultricies vulputate at vel lorem. Duis metus. </p>
                                </div>
                                <div className="course-footer clearfix">
                                    <div className="pull-left">
                                        <ul className="list-inline">
                                            <li><Link to="#"><i className="fa fa-user"></i> Edulogy</Link></li>
                                            <li><Link to="#"><i className="fa fa-clock-o"></i> 05 Jun</Link></li>
                                            <li><Link to="#"><i className="fa fa-eye"></i> 444 Views</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="course-box">
                                <div className="course-details">
                                    <h4>
                                        <small>Tips & Tricks</small>
                                        <Link to="../singleBlog" title="">What will you after complete all courses on Edulogy?</Link>
                                    </h4>
                                    <p>Suspendisse vehicula tincidunt justo eu vehicula. Praesent placera leo, ac pulvinar lectus scelerisque nec. Phasellus consequat nec lacus metus. </p>
                                </div>
                                <div className="course-footer clearfix">
                                    <div className="pull-left">
                                        <ul className="list-inline">
                                            <li><Link to="#"><i className="fa fa-user"></i> Bob DOE</Link></li>
                                            <li><Link to="#"><i className="fa fa-clock-o"></i> 01 Jun</Link></li>
                                            <li><Link to="#"><i className="fa fa-eye"></i> 55 Views</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="invis" />

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <ul className="pagination ">
                                <li className="disabled"><Link to="#">&laquo;</Link></li>
                                <li className="active"><Link to="#">1</Link></li>
                                <li><Link to="#">2</Link></li>
                                <li><Link to="#">3</Link></li>
                                <li><Link to="#">...</Link></li>
                                <li><Link to="#">&raquo;</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
