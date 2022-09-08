import { React, useState } from "react";
import Top from "../nav/top";
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="container">
            <div>
              <h2 className="text-center">Blog Title</h2>
              <img className="" src="https://reactjs.org/logo-og.png" alt="react logo" style={{ width: '100%', }}/>
              <div className="m-4">
                This is a blog body from a blog item This is a title from a blog
                item This is a title from a blog item This is a title from a
                blog item This is a title from a blog item with the rest of it
                contents
              </div>
              <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                  <button className="btn btn-primary btn-block mt-1">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}
