import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Experts } from "@common-types/expert";
import { Button } from "@components/common";
import styleCardExpert from "./cardExpert.module.css";

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
      <Link href={`/expert-panel/${expert.slug}`}>
        <p className={styleCardExpert["card-description"]}>{expert?.name}</p>
      </Link>
      <p className={styleCardExpert["card-info"]}>{expert?.info}</p>
      <Link href={`/expert-panel/${expert.slug}`}>
        <div className={styleCardExpert["card-button"]}>
          <Button icon />
        </div>
      </Link>
    </div>
  );
};

export default CardExpert;
