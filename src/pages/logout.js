import React from 'react';


export default function Logout() {
    sessionStorage.clear("islogin");
    alert("You have successfully Logged Out");
    window.location.href = '/';
}