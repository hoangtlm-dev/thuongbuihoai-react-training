import useSWR from "swr";
import React, { useContext, useEffect } from "react";
import { Expert } from "@common-types/expert";
import { EXPERT_URL } from "@constants/url";
import { getData } from "@helpers/fetchApi";
import { DataContext } from "@context/DataContext";
import CardExpert from "../CardExpert";
import styleExpertList from "./expertList.module.css";

const ExpertList = () => {
  const { experts, setExperts } = useContext(DataContext);
  const { data } = useSWR(EXPERT_URL, getData<Expert[]>);

  useEffect(() => {
    setExperts(data);
  }, [data]);

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
