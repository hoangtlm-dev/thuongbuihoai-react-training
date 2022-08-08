import React from "react";
import style from "../styles/base/common.module.css";

const ErrorPage = () => (
  <div className={style["style-not-found"]}>
    <div className={style["style-number"]}>404</div>
    <p>This page could not be found.</p>
  </div>
);

export default ErrorPage;
