import React from "react";
import Image from "next/image";
import { Expert } from "@common-types/expert";
import { Button, Text } from "@components/common";
import styleCardExpert from "./cardExpert.module.css";
import { useRouter } from "next/router";
import { EXPERT_MOCKING } from "@constants/expert";
import CustomImage from "@components/common/CustomImage/CustomImage";

interface CardExpertProps {
  expert: Expert;
}

const CardExpert: React.FC<CardExpertProps> = ({ expert = EXPERT_MOCKING }) => {
  const router = useRouter();
  return (
    <div
      itemScope
      itemType="https://schema.org/Person"
      className={styleCardExpert["card-expert"]}>
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
        <Text size="regularOutline" text={expert?.name} />
      </a>
      <div className={styleCardExpert["card-info"]}>
        <Text itemProp="description" text={expert?.info} />
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
