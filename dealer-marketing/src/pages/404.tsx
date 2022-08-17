import React from "react";
import { useRouter } from "next/router";
import { Button } from "@components/common";
import style from "../styles/base/common.module.css";

const ErrorPage: React.FC = () => {
  const router = useRouter();
  return (
    <div className={style["style-not-found"]}>
      <div className={style["style-number"]}>404</div>
      <p>This page could not be found.</p>
      <div className={style["style-back"]}>
        <Button onClick={() => router.push("/")} icon text="Back to home" />
      </div>
    </div>
  );
};

export default ErrorPage;
