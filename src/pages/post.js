import { React, useState } from "react";
import TopDash from "../nav/topdash";

export default function Post() {
  return (
    <>
      <div className="row">
        <TopDash />
        {/* <!-- Right side column. Contains the navbar and content of the page --> */}
        <main class="col-md-9 ms-sm-auto col-lg-10 mt-0 px-md-4 mt-4">
          <div class="row">
            <div class="col">
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">Add Post</h3>
                </div>
                {/* <!-- /.box-header --> */}
                <div class="box-body">
                  <div class="form-group">
                    <input class="form-control" placeholder="Title:" />
                  </div>
                  <br />
                  <div class="form-group">
                    <textarea
                      id="compose-textarea"
                      placeholder="Blog Post Body"
                      class="form-control"
                    >
                      <p>Add You Post Data Here</p>
                    </textarea>
                  </div>
                  <div class="form-group">
                    <div class="btn btn-default btn-file">
                      <i class="fa fa-paperclip"></i>
                      <input type="file" name="attachment" />
                    </div>
                    <p class="help-block">Max. 32MB</p>
                    <button type="submit" class="btn btn-dark">
                      <i class="fa fa-envelope-o"></i> Post
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
      </div>
      {/* <!-- /.content --> */}
    </>
  );
}
