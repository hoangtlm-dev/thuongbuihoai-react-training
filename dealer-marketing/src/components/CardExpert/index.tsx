import React from "react";
import { useRouter } from "next/router";
import { Expert } from "@common-types/expert";
import { EXPERT_MOCKING } from "@constants/expert";
import { Button, CustomImage, Text } from "@components/common";
import { TextType } from "@components/common/Text";
import styleCardExpert from "./cardExpert.module.css";

interface CardExpertProps {
  expert: Expert;
}

const CardExpert: React.FC<CardExpertProps> = ({ expert = EXPERT_MOCKING }) => {
  const router = useRouter();
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
      <a onClick={() => router.push(`/expert-page/${expert.slug}`)}>
        <Text size={TextType.regularOutline} text={expert?.name} />
      </a>
      <div className={styleCardExpert["card-info"]}>
        <Text text={expert?.info} />
      </div>
      <div className={styleCardExpert["card-button"]}>
        <Button
          icon
          onClick={() => router.push(`/expert-page/${expert.slug}`)}
        />
      </div>
    </div>
  );
};

export default CardExpert;
