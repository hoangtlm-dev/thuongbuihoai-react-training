import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Expert } from "@common-types/expert";
import { Button, Text } from "@components/common";
import styleCardExpert from "./cardExpert.module.css";
import { useRouter } from "next/router";

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
}) => {
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
      <Link itemProp="url" href={`/expert-page/${expert.slug}`}>
        <div className={styleCardExpert["card-button"]}>
          <Button icon text="" />
        </div>
      </Link>
    </div>
  );
};

export default CardExpert;
