import React from "react";
import Image from "next/image";
import { Expert } from "@common-types/expert";
import { Button, Text } from "@components/common";
import styleCardExpert from "./cardExpert.module.css";
import { useRouter } from "next/router";
import { EXPERT_MOCKING } from "@constants/expert";

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
        <Image
          itemProp="image"
          src={expert?.image.url}
          alt={expert?.image.alt}
          className={styleCardExpert["card-image"]}
          width={130}
          height={130}
          placeholder="blur"
          blurDataURL="/images/backgrounds/blur.jpg"
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
