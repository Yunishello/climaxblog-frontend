import { React, useState } from "react";
import Top from "../nav/top";
import TopDash from "../nav/topdash";
import axios from "axios";

export default function Admin() {
  const [userName, setUser] = useState("");
  const [userEmail, setEmail] = useState("");

  let handleChangeMail = (e) => {
    let input = e.target.value;
    setEmail( input);
  };

  let handleChangeName = (e) => {
    let input = e.target.value;
    setUser( input );
  };

  let handleSubmit = (e) => {
    var config = {
      method: 'post',
      url: 'http://climax.com/api/signup?name='+{userName}+'&email='+{userEmail},
      headers: { 
        'Authorization': 'Basic Og==', 
        // 'Cookie': 'XSRF-TOKEN=eyJpdiI6ImpUSGJCdENvWnZsVUJscHFkbkkydXc9PSIsInZhbHVlIjoiQ3RRSGY4ZlBZbGozWmUzZ1BzbHJrSEFCT1AybHpjeUdQYWZaekV0T211blpETkgwYzRHQStqN2s5T3JRcGRSQ1cyYTdTYjl0NnVTNTlEd2JFck5DZnVPeGlrTXJ1eVFFWnBCcDZrV0Q5cys4dkUwSUE0VXpFZ01DZFNVOVpPNDMiLCJtYWMiOiI2MDJiOTZmY2I4MzcyYjU0OWUwZThlZWYyODBlZjE2ODk4MDIzYjhiMTA1OGVhNjNkNzJkNjM3MTViZWFmNDYyIiwidGFnIjoiIn0%3D; climax_blog_session=eyJpdiI6IldQV0liRnBWSTZxYlhNTHM3ZUlOMVE9PSIsInZhbHVlIjoicnVJY3YyS3d4YVVTSms2cGdoa3liTThmQkRtUVp0WC80VEFzVVFrN2R2WnhLUUtXSkF1RGpDVGkwbFllMjRyYkhTcEhqYm8vdU1VQ2todHVjekQxRUJTVUtrWnlBSXpNTWdWeHlHNExRWm9JaTRTMkdaTFJKemplcm12Um9BckgiLCJtYWMiOiIxYzdhMjU5ZTZhNjY1ZmY1ZjU0YzE0MDYxYjc1MzM3MTUxOWM5YmZmZGQxY2UwZTBmOGJmMmFlOWJjMzJhMzZjIiwidGFnIjoiIn0%3D'
      }
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    e.preventDefault();
  };

  return (
    <>
      <div className="row">
        <TopDash />
        {/* <!-- Right side column. Contains the navbar and content of the page --> */}
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div class="row">
              <div class="col">
                <div class="box box-primary">
                  <div class="box-header with-border">
                    <h3 class="box-title">Add Admin</h3>
                  </div>
                  {/* <!-- /.box-header --> */}
                  <div class="box-body">
                    <div class="form-group">
                      <label for="">
                        <b>Full Name:</b>
                      </label>
                      <input
                        class="form-control"
                        onChange={(e) => handleChangeName(e)}
                        placeholder="Full Name:"
                      />
                    </div>
                    <br />
                    <div class="form-group">
                      <label for="">
                        <b>Email:</b>
                      </label>
                      <input
                        class="form-control"
                        onChange={(e) => handleChangeMail(e)}
                        placeholder="Email:"
                      />
                    </div>
                    <br />
                    <div class="form-group">
                      <button type="submit" class="btn btn-outline-dark">
                        <i class="fa fa-user"></i> Make Admin
                      </button>
                    </div>
                  </div>
                  {/* <!-- /.box-body --> */}
                </div>
                {/* <!-- /. box --> */}
              </div>
              {/* <!-- /.col --> */}
            </div>
          </form>
          {/* <!-- /.row --> */}
        </main>
      </div>
      {/* <!-- /.content --> */}
    </>
  );
}
