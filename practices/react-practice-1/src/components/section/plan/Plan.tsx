import React from "react";
import { CardProps } from "../../../types/card";
import { PlanProps } from "../../../types/plan";
import CardList from "../../list/cardList/CardList";
import SectionTitle from "../../title/SectionTitle";
import "./plan.css"

export default function Plan({
  cardList
}: PlanProps): JSX.Element {
  return (
    <section className="plan">
      <div className="container">
        <SectionTitle className="plan__title">
          Subscribing Plans
        </SectionTitle>
        <CardList cardList={cardList}></CardList>
      </div>
    </section>
  );
}
