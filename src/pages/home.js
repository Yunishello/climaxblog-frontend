import React from "react";
import {Link} from 'react-router-dom';
import Top from "../nav/top";

export default function Home() {
  return (
    <>
      <Top />
      <div className="row">
          <div className="col"></div>
          <div className="col">
              <div className="container">
                  <div className="card p-3 my-3">
                    <div className="row">
                        <div className="col">
                        <img src="https://reactjs.org/logo-og.png" alt="react logo" style={{ width: '100%', }}/>
                        </div>
                        <div className="col card p-3">
                            <h3 className="card-title">Blog Title</h3>
                            <div className="card-body p-0">
                                This is a blog body from a blog item This is a title from a blog item This is a title from a blog item This is a title from a blog item This is a title from a blog item...  
                                <Link to="../singleBlog"> Read More</Link>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="card p-3 my-3">
                    <div className="row">
                        <div className="col">
                        <img src="https://reactjs.org/logo-og.png" alt="react logo" style={{ width: '100%', }}/>
                        </div>
                        <div className="col card p-3">
                            <h3 className="card-title">Blog Title</h3>
                            <div className="card-body p-0">
                                This is a blog body from a blog item This is a title from a blog item This is a title from a blog item This is a title from a blog item This is a title from a blog item...  
                                <Link to="../singleBlog"> Read More</Link>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="card p-3 my-3">
                    <div className="row">
                        <div className="col">
                        <img src="https://reactjs.org/logo-og.png" alt="react logo" style={{ width: '100%', }}/>
                        </div>
                        <div className="col card p-3">
                            <h3 className="card-title">Blog Title</h3>
                            <div className="card-body p-0">
                                This is a blog body from a blog item This is a title from a blog item This is a title from a blog item This is a title from a blog item This is a title from a blog item...  
                                <Link to="../singleBlog"> Read More</Link>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="card p-3 my-3">
                    <div className="row">
                        <div className="col">
                        <img src="https://reactjs.org/logo-og.png" alt="react logo" style={{ width: '100%', }}/>
                        </div>
                        <div className="col card p-3">
                            <h3 className="card-title">Blog Title</h3>
                            <div className="card-body p-0">
                                This is a blog body from a blog item This is a title from a blog item This is a title from a blog item This is a title from a blog item This is a title from a blog item...  
                                <Link to="../singleBlog"> Read More</Link>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="card p-3 my-3">
                    <div className="row">
                        <div className="col">
                        <img src="https://reactjs.org/logo-og.png" alt="react logo" style={{ width: '100%', }}/>
                        </div>
                        <div className="col card p-3">
                            <h3 className="card-title">Blog Title</h3>
                            <div className="card-body p-0">
                                This is a blog body from a blog item This is a title from a blog item This is a title from a blog item This is a title from a blog item This is a title from a blog item...  
                                <Link to="../singleBlog"> Read More</Link>
                            </div>
                        </div>
                    </div>
                  </div>
                  
                  
                  
              </div>
          </div>
          <div className="col"></div>
      </div>
    </>
  );
}
