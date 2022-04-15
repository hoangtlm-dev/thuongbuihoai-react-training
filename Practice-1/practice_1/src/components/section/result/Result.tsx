import React from "react";
import { CircleListProps } from "../../../types/circle";
import { Description } from "../../description/Description";
import CircleList from "../../list/circleList/CircleList";
import SectionTitle from "../../title/SectionTitle";
import "./result.css"

export interface ResultProps {
  text: string;
  list: CircleListProps[];
}

export default function Result({
  text, list
}: ResultProps): JSX.Element {
  return (
    <section className = "results">
      <div className = "container">
        <div className = "results__heading">
          <SectionTitle className="results__title"><p>Stunning Results</p></SectionTitle>
          <Description className="text">{text}</Description>
        </div>
        <CircleList circleList={list} />
      </div>
    </section>
  );
}