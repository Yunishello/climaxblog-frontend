import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import "../utils/css/styles.css";

export default function Footer() {
  return (
    <>
      <footer class="bg-white container-fluid row  dev">
        <div class="col-md-4"></div>
        <div class="col-md-4 text-center py-2">devYuny</div>
        <div class="col-md-4"></div>
      </footer>

      <footer class="main-footer">
        <strong>
          Copyright &copy; 2021-2022
          <a href="">Climax Global</a>.
        </strong>
        All rights reserved.
      </footer>
    </>
  );
}
