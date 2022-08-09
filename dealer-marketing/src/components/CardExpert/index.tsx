import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Expert } from "@common-types/expert";
import { Button } from "@components/common";
import styleCardExpert from "./cardExpert.module.css";

interface CardExpertProps {
  expert: Expert;
}

const CardExpert: React.FC<CardExpertProps> = ({
  expert = {
    name: "Matt-Childers",
    slug: "matt-childers",
    info: "DealersLink",
    image: {
      url: "/images/avatar/matt-childers.png",
      alt: "This is image of Mr Matt-Childers",
    },
    description:
      "Brent Albrecht is currently the Vice President of Business Development at Friendemic. Friendemic provides social media and online reputation services for clients and agencies across the globe. Specialties: Marketing Strategy, Product development and launch, Social Media Marketing, Business Development, Lead Generation, Sales Promotion, Digital Marketing, Database Marketing.",
  },
}) => (
  <div className={styleCardExpert["card-expert"]}>
    <figure className={styleCardExpert["card-layout"]}>
      <Image
        src={expert?.image.url}
        alt={expert?.image.alt}
        className={styleCardExpert["card-image"]}
        width={130}
        height={130}
        placeholder="blur"
        blurDataURL="/images/backgrounds/blur.jpg"
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

export default CardExpert;
