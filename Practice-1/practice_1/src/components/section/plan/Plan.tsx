import React from "react";
import { CardProps } from "../../../types/card";
import CardList from "../../list/cardList/CardList";
import SectionTitle from "../../title/SectionTitle";
import "./plan.css"

export interface PlanProps {
  cardList: CardProps[];
}

export default function Plan({
  cardList
}: PlanProps): JSX.Element {
  return (
    <section className="plan">
      <div className="container">
        <SectionTitle className="plan__title">
          <span>Subscribing Plans</span>
        </SectionTitle>
        <CardList cardList={cardList}></CardList>
      </div>
    </section>
  );
}
