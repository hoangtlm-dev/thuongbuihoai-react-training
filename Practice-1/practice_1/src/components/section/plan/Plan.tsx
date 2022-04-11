import React from "react";
import { CardProps } from "../../../types/card";
import CardList from "../../card/CardList";
import SectionTitle from "../../title/SectionTitle";
import "./plan.css"

export interface PlanProps {
  planTitle: string;
  cardList: CardProps[];
}

export default function Plan({
  planTitle,
  cardList
}: PlanProps): JSX.Element {
  return (
    <section className="plan">
      <div className="container">
        <SectionTitle className="plan__title">
          <span>{planTitle}</span>
        </SectionTitle>
        <CardList cardList={cardList}></CardList>
      </div>
    </section>
  );
}
