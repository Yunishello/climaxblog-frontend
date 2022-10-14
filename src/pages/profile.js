import React from "react";
import SideNav from "../nav/sidebar";
import Top from "../nav/top";
// import Users from '../pages/users';
import Body from "./reply";
import { Routes, Route } from "react-router-dom";
import TopDash from "../nav/topdash";

export default function Profile() {
  return (
    <>
      <div className="row">
        <TopDash />
        {/* <!-- Right side column. Contains the navbar and content of the page --> */}
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
          <div class="row">
            <div class="col">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Update Your Profile</h3>
                </div>
                {/* <!-- /.box-header --> */}
                <div class="box-body">
                  <div class="form-group">
                    <label for="">
                      <b>Full Name:</b>
                    </label>
                    <input
                      class="form-control"
                      placeholder="Full Name:"
                      value="Alexander Pierce"
                    />
                  </div>
                  <br />

                  <div class="form-group">
                    <label for="">
                      <b>Email:</b>
                    </label>
                    <input
                      class="form-control"
                      placeholder="Email:"
                      value="email@example.com"
                    />
                  </div>
                  <br />
                  <div class="form-group">
                    <button type="submit" class="btn btn-dark">
                      <i class="fa fa-envelope-o"></i> Update{" "}
                    </button>
                  </div>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /. box --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}
        </main>
        {/* <!-- /.content --> */}
      </div>
    </>
  );
}
