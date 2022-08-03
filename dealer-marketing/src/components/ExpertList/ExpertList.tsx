import React from "react";
import useSWR from "swr";
import { Experts } from "@src/common-types/expert";
import { EXPERT_URL } from "@src/constants/url";
import { getData } from "@src/helpers/fetchApi";
import CardExpert from "../CardExpert/CardExpert";
import styleExpertList from "./expertList.module.css";

const ExpertList = () => {
  const { data } = useSWR(EXPERT_URL, getData<Experts[]>);

  return (
    <div className={styleExpertList["expert-list"]}>
      {data?.map((expert) => (
        <div key={expert.expertId}>
          <CardExpert expert={expert} />
        </div>
      ))}
    </div>
  );
};

export default ExpertList;
