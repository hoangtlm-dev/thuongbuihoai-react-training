import React from "react";
import Image from "next/image";
import styleCardExpert from "./cardExpert.module.css";
import { Experts } from "@src/common-types/expert";
import Button from "../common/Button/Button";

interface CardExpertProps {
  expert: Experts;
}

const CardExpert: React.FC<CardExpertProps> = ({ expert }) => {
  return (
    <div className={styleCardExpert["card-expert"]}>
      <figure className={styleCardExpert["card-layout"]}>
        <Image
          src={expert?.image.url}
          alt={expert?.image.alt}
          className={styleCardExpert["card-image"]}
          width={130}
          height={130}
        />
      </figure>
      <p className={styleCardExpert["card-description"]}>{expert?.name}</p>
      <p className={styleCardExpert["card-info"]}>{expert?.info}</p>
      <div className={styleCardExpert["card-button"]}>
        <Button icon />
      </div>
    </div>
  );
};

export default CardExpert;
