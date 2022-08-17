import React from "react";
import { Button } from "@components/common";
import style from "../styles/base/common.module.css";
import Link from "next/link";

const ErrorPage: React.FC = () => {
  return (
    <div className={style["style-not-found"]}>
      <div className={style["style-number"]}>404</div>
      <p>This page could not be found.</p>
      <div className={style["style-back"]}>
        <Link href="/" passHref>
          <Button icon text="Back to home" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
