import React, { useContext } from "react";
import Error from "next/error";
import { DataContext } from "@context/DataContext";
import CardExpert from "../CardExpert";
import styleExpertList from "./expertList.module.css";

const ExpertList = () => {
  const { experts, errorCode } = useContext(DataContext);

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <div className={styleExpertList["expert-list"]}>
      {experts?.map((expert) => (
        <div key={expert.expertId}>
          <CardExpert expert={expert} />
        </div>
      ))}
    </div>
  );
};

export default ExpertList;
