import React from "react";
import Link from "next/link";
import { Expert } from "@common-types/expert";
import { EXPERT_MOCKING } from "@constants/expert";
import { Button, CustomImage, Text } from "@components/common";
import { TextType } from "@components/common/Text";
import styleCardExpert from "./cardExpert.module.css";

interface CardExpertProps {
  expert: Expert;
}

const CardExpert: React.FC<CardExpertProps> = ({ expert = EXPERT_MOCKING }) => {
  return (
    <div className={styleCardExpert["card-expert"]}>
      <figure className={styleCardExpert["card-layout"]}>
        <CustomImage
          url={expert?.image.url}
          alt={expert?.image.alt}
          width={130}
          height={130}
          className={styleCardExpert["card-image"]}
        />
      </figure>
      <Link href={`/expert-page/${expert.slug}`} passHref>
        <Text size={TextType.regularOutline} text={expert?.name} />
      </Link>
      <div className={styleCardExpert["card-info"]}>
        <Text text={expert?.info} />
      </div>
      <div className={styleCardExpert["card-button"]}>
        <Link href={`/expert-page/${expert.slug}`} passHref>
          <Button icon />
        </Link>
      </div>
    </div>
  );
};

export default CardExpert;
