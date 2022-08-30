import React from "react";
import Link from "next/link";
import { Button, Text } from "@components/common";
import style from "../pages/style.module.css";
import { TextType } from "@components/common/Text";

const ErrorPage: React.FC = () => {
  return (
    <div data-testid="error-page" className={style["status-not-found"]}>
      <div className={style["status-number"]}>404</div>
      <Text size={TextType.regular} text="This page could not be found." />
      <div className={style["status-back"]}>
        <Link href="/" passHref>
          <Button icon text="Back to home" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
