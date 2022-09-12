import React, { memo, useContext } from "react";
import Error from "next/error";
import CardExpert from "../CardExpert";
import styleExpertList from "./expertList.module.css";
import { ExpertContext } from "@context/ExpertContext";
import { ErrorBoundary } from "@components/common";

const ExpertList: React.FC = () => {
  const { experts, errorCode } = useContext(ExpertContext);

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <ErrorBoundary>
      <div data-testid="expert-list" className={styleExpertList["expert-list"]}>
        {experts?.map((expert) => (
          <div key={expert.expertId}>
            <CardExpert expert={expert} />
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
};

export default memo(ExpertList);
