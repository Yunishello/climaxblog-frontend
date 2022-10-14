import { React, useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    sessionStorage.clear("islogin");
    alert("You have successfully Logged Out");
    window.location.href = "/";
  }, []);
}
